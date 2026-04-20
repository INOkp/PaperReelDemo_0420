"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Paper } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Share2, Bookmark, Languages } from "lucide-react"

interface PaperCardProps {
  paper: Paper
  rank: number
  onEvaluation: (evaluation: "good" | "bad" | "normal", dwellTime: number) => void
  onBack: () => void
  canGoBack: boolean
  animationTrigger?: { action: "good" | "bad" | "normal" | "back"; timestamp: number } | null
  isGoingBack?: boolean
  previousSwipeDirection?: "good" | "bad" | "normal"
}

export function PaperCard({
  paper,
  rank,
  onEvaluation,
  onBack,
  canGoBack,
  animationTrigger,
  isGoingBack = false,
  previousSwipeDirection,
}: PaperCardProps) {
  const [swipeDirection, setSwipeDirection] = useState<"good" | "bad" | "normal" | "back" | null>(null)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isEntering, setIsEntering] = useState(true)
  const [showAbstractTranslation, setShowAbstractTranslation] = useState(false)
  const startTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    if (animationTrigger) {
      triggerSwipe(animationTrigger.action)
    }
  }, [animationTrigger])

  useEffect(() => {
    startTimeRef.current = Date.now()
    setSwipeDirection(null)
    setOffsetX(0)
    setOffsetY(0)
    setIsDragging(false)
    setIsEntering(true)
    setShowAbstractTranslation(false)

    const timer = setTimeout(() => {
      setIsEntering(false)
    }, 50)

    return () => clearTimeout(timer)
  }, [paper.id])

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setStartY(e.touches[0].clientY)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    setOffsetX(currentX - startX)
    setOffsetY(currentY - startY)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    const threshold = 100

    if (Math.abs(offsetX) > Math.abs(offsetY)) {
      if (offsetX > threshold) {
        triggerSwipe("good")
      } else if (offsetX < -threshold) {
        triggerSwipe("bad")
      } else {
        resetSwipe()
      }
    } else {
      if (offsetY > threshold && canGoBack) {
        triggerSwipe("back")
      } else if (offsetY < -threshold) {
        triggerSwipe("normal")
      } else {
        resetSwipe()
      }
    }
  }

  const triggerSwipe = (direction: "good" | "bad" | "normal" | "back") => {
    setSwipeDirection(direction)
    const dwellTime = Date.now() - startTimeRef.current

    setTimeout(() => {
      if (direction === "back") {
        onBack()
      } else {
        onEvaluation(direction, dwellTime)
      }
    }, 300)
  }

  const resetSwipe = () => {
    setOffsetX(0)
    setOffsetY(0)
    setSwipeDirection(null)
  }

  const getCardStyle = () => {
    if (isEntering) {
      return {
        transform: "scale(0.9) translateY(20px)",
        opacity: 0,
        transition: "none",
      }
    }

    if (swipeDirection) {
      const transforms = {
        good: "translateX(1000px) rotate(30deg)",
        bad: "translateX(-1000px) rotate(-30deg)",
        normal: "translateY(-1000px) rotate(0deg)",
        back: "translateY(1000px) rotate(0deg)",
      }
      return {
        transform: transforms[swipeDirection],
        opacity: 0,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }
    }

    if (isDragging) {
      const rotation = offsetX * 0.1
      return {
        transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotation}deg)`,
        transition: "none",
      }
    }

    return {
      transform: "scale(1) translateY(0)",
      opacity: 1,
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    }
  }

  const getActiveOverlay = () => {
    if (swipeDirection) return swipeDirection
    if (!isDragging) return null
    if (Math.abs(offsetX) > Math.abs(offsetY)) {
      if (offsetX > 30) return "good"
      if (offsetX < -30) return "bad"
    } else {
      if (offsetY < -30) return "normal"
      if (offsetY > 30 && canGoBack) return "back"
    }
    return null
  }

  const getOverlayOpacity = () => {
    if (swipeDirection) return 0.8
    if (!isDragging) return 0
    const distance = Math.max(Math.abs(offsetX), Math.abs(offsetY))
    return Math.min(distance / 200, 0.5)
  }

  const activeOverlay = getActiveOverlay()
  const overlayOpacity = getOverlayOpacity()

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[70vh] flex items-center justify-center">
      <Card
        className={cn(
          "relative p-8 cursor-grab active:cursor-grabbing overflow-hidden h-full flex flex-col shadow-xl transition-colors duration-200",
          swipeDirection === "good" && "border-green-500",
          swipeDirection === "bad" && "border-blue-500"
        )}
        style={getCardStyle()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Dynamic Overlay */}
        <div 
          className={cn(
            "absolute inset-0 pointer-events-none z-10 transition-colors duration-200",
            activeOverlay === "good" && "bg-green-500",
            activeOverlay === "bad" && "bg-blue-500",
            activeOverlay === "normal" && "bg-slate-500",
            activeOverlay === "back" && "bg-orange-500"
          )}
          style={{ opacity: overlayOpacity }}
        />

        {/* Floating Labels during Swipe */}
        {activeOverlay === "good" && isDragging && (
          <div className="absolute top-10 left-10 z-30 border-4 border-green-500 text-green-500 font-black px-4 py-2 rounded-lg -rotate-12 uppercase text-3xl" style={{ opacity: overlayOpacity * 2 }}>
            Good
          </div>
        )}
        {activeOverlay === "bad" && isDragging && (
          <div className="absolute top-10 right-10 z-30 border-4 border-blue-500 text-blue-500 font-black px-4 py-2 rounded-lg rotate-12 uppercase text-3xl" style={{ opacity: overlayOpacity * 2 }}>
            Bad
          </div>
        )}
        {activeOverlay === "normal" && isDragging && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 border-4 border-slate-500 text-slate-500 font-black px-4 py-2 rounded-lg uppercase text-3xl" style={{ opacity: overlayOpacity * 2 }}>
            Normal
          </div>
        )}

        <div className="relative z-20 space-y-6 flex-1 overflow-y-auto no-scrollbar">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-3">
                Rank #{rank}
              </Badge>
              <h1 className="text-2xl font-bold leading-tight mb-1">{paper.title}</h1>
              {paper.titleJa && <h2 className="text-xl text-muted-foreground leading-tight mb-2">{paper.titleJa}</h2>}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{paper.authors.join(", ")}</p>
            <p className="text-sm font-medium uppercase tracking-tight">
              {paper.metadata.venue} ({paper.metadata.year})
            </p>
          </div>

          <div className="space-y-4">
            <Section title="背景" content={paper.contentJa.background} />
            <Section title="目的" content={paper.contentJa.objective} />
            <Section title="提案" content={paper.contentJa.proposal} />
            <Section title="評価" content={paper.contentJa.evaluation} />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="abstract" className="border-t pt-4 border-b-0">
              <div className="flex items-center justify-between mb-2">
                <AccordionTrigger className="hover:no-underline py-0">
                  <h3 className="text-sm font-semibold">Abstract</h3>
                </AccordionTrigger>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 px-2 text-xs gap-1.5"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAbstractTranslation(!showAbstractTranslation);
                  }}
                >
                  <Languages className="h-3.5 w-3.5" />
                  {showAbstractTranslation ? "English" : "日本語"}
                </Button>
              </div>
              <AccordionContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {showAbstractTranslation ? paper.abstractJa : paper.abstract}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Final Trigger Overlay (Static Labels) */}
        {!isDragging && swipeDirection === "good" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
            <div className="text-7xl font-black text-green-500 rotate-12 border-8 border-green-500 px-12 py-6 rounded-2xl bg-background/90 shadow-2xl animate-in zoom-in duration-300">
              GOOD
            </div>
          </div>
        )}
        {!isDragging && swipeDirection === "bad" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
            <div className="text-7xl font-black text-blue-500 -rotate-12 border-8 border-blue-500 px-12 py-6 rounded-2xl bg-background/90 shadow-2xl animate-in zoom-in duration-300">
              BAD
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

function Section({ title, content }: { title: string; content: string }) {
  const highlightedContent = content.replace(
    /(重要|課題|提案|改善|効果|結果|成果|新規|開発|実装|評価|検証|分析|手法|システム|モデル|アルゴリズム)/g,
    '<span class="text-orange-500 font-semibold">$1</span>',
  )

  return (
    <div>
      <h3 className="text-[10px] font-bold uppercase text-muted-foreground mb-1">{title}</h3>
      <p
        className="text-[13px] leading-relaxed font-medium"
        dangerouslySetInnerHTML={{ __html: highlightedContent }}
      />
    </div>
  )
}
