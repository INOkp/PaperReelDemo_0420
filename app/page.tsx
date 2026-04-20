"use client"

import { useState, useEffect } from "react"
import { PaperCard } from "@/components/paper-card"
import { HomeScreen } from "@/components/home-screen"
import { Onboarding } from "@/components/onboarding"
import { LibraryScreen } from "@/components/library-screen"
import { ActivityLog } from "@/components/activity-log"
import { CompletionScreen } from "@/components/completion-screen"
import { BottomNav } from "@/components/bottom-nav"
import { Badge } from "@/components/ui/badge"
import { generateDummyPapers } from "@/lib/dummy-data"
import { allChiPapers } from "@/lib/chi-data"
import type { Paper, EvaluationLog, UserProfile } from "@/lib/types"

type View = "onboarding" | "home" | "reel" | "library" | "profile" | "logs"

export default function Home() {
  const [view, setView] = useState<View>("onboarding")
  const [papers] = useState<Paper[]>([...allChiPapers, ...generateDummyPapers()])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [evaluations, setEvaluations] = useState<EvaluationLog[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [goodPaperIds, setGoodPaperIds] = useState<Set<string>>(new Set())
  const [isCompleted, setIsCompleted] = useState(false)
  
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationTrigger, setAnimationTrigger] = useState<{
    action: "good" | "bad" | "normal" | "back"
    timestamp: number
  } | null>(null)
  const [swipeHistory, setSwipeHistory] = useState<Map<number, "good" | "bad" | "normal">>(new Map())
  const [isGoingBack, setIsGoingBack] = useState(false)

  // Load profile from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("paperreel-profile")
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile))
      setView("home")
    }
  }, [])

  const handleOnboardingComplete = (profile: UserProfile) => {
    setUserProfile(profile)
    localStorage.setItem("paperreel-profile", JSON.stringify(profile))
    setView("home")
  }

  const handleEvaluation = (evaluation: "good" | "bad" | "normal", dwellTime: number) => {
    if (isAnimating) return

    const log: EvaluationLog = {
      paperId: papers[currentIndex].id,
      rank: currentIndex + 1,
      evaluation,
      dwellTime,
      timestamp: new Date().toISOString(),
    }

    setEvaluations((prev) => [...prev, log])
    setSwipeHistory((prev) => new Map(prev).set(currentIndex, evaluation))
    
    if (evaluation === "good") {
      setGoodPaperIds((prev) => new Set(prev).add(papers[currentIndex].id))
    }
    
    setIsGoingBack(false)
    if (currentIndex < papers.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handleBack = () => {
    if (isAnimating || currentIndex === 0) return

    setIsGoingBack(true)
    setCurrentIndex((prev) => prev - 1)
    const paperId = papers[currentIndex - 1].id
    
    setEvaluations((prev) => {
      const lastIndex = prev.findLastIndex((e) => e.paperId === paperId)
      if (lastIndex !== -1) {
        return prev.filter((_, i) => i !== lastIndex)
      }
      return prev
    })
    
    setSwipeHistory((prev) => {
      const newMap = new Map(prev)
      newMap.delete(currentIndex - 1)
      return newMap
    })
  }

  const handleSelectPaperFromHome = (paperId: string) => {
    const index = papers.findIndex((p) => p.id === paperId)
    if (index !== -1) {
      setCurrentIndex(index)
      setView("reel")
      setIsCompleted(false)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setEvaluations([])
    setGoodPaperIds(new Set())
    setSwipeHistory(new Map())
    setIsCompleted(false)
    setView("reel")
  }

  const goodPapers = papers.filter((p) => goodPaperIds.has(p.id))

  const renderView = () => {
    if (isCompleted && view === "reel") {
      return (
        <div className="flex flex-col h-screen items-center justify-center p-4 bg-background">
          <CompletionScreen 
            evaluations={evaluations}
            onRestart={handleRestart}
            onGoHome={() => setView("home")}
            onViewLogs={() => setView("logs")}
          />
        </div>
      )
    }

    switch (view) {
      case "onboarding":
        return <Onboarding onComplete={handleOnboardingComplete} />
      case "home":
        return <HomeScreen papers={papers} onSelectPaper={handleSelectPaperFromHome} />
      case "reel":
        return (
          <div className="flex flex-col h-screen bg-background items-center justify-center p-4">
             <PaperCard
                paper={papers[currentIndex]}
                rank={currentIndex + 1}
                onEvaluation={handleEvaluation}
                onBack={handleBack}
                canGoBack={currentIndex > 0}
                animationTrigger={animationTrigger}
                isGoingBack={isGoingBack}
                previousSwipeDirection={swipeHistory.get(currentIndex)}
              />
          </div>
        )
      case "library":
        return <LibraryScreen goodPapers={goodPapers} onSelectPaper={handleSelectPaperFromHome} />
      case "logs":
        return <ActivityLog evaluations={evaluations} papers={papers} onClearLogs={() => setEvaluations([])} />
      case "profile":
        return (
          <div className="flex flex-col h-screen bg-background">
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">
                {userProfile?.name?.[0] || "U"}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{userProfile?.name}</h1>
                <p className="text-muted-foreground">{userProfile?.field}</p>
              </div>
              <div className="w-full max-w-xs space-y-2 text-left">
                <div className="p-4 bg-secondary/50 rounded-xl space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Interests</div>
                  <div className="flex flex-wrap gap-2">
                    {userProfile?.interests.map(i => <Badge key={i} variant="secondary">{i}</Badge>)}
                  </div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl flex justify-between items-center">
                  <div className="text-sm font-medium">Evaluation Count</div>
                  <div className="text-lg font-bold">{evaluations.length}</div>
                </div>
              </div>
              <button 
                className="text-destructive text-sm font-medium mt-4"
                onClick={() => {
                  if (confirm("Reset profile and data?")) {
                    localStorage.removeItem("paperreel-profile")
                    window.location.reload()
                  }
                }}
              >
                Reset Profile & Data
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {renderView()}
      {view !== "onboarding" && (
        <BottomNav 
          currentView={view === "logs" ? "profile" : (view === "reel" ? "reel" : (view as any))} 
          onViewChange={(newView) => {
            setView(newView as View)
            if (newView !== "reel") setIsCompleted(false)
          }} 
        />
      )}
    </div>
  )
}
