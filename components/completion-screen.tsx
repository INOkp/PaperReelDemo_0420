"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, Home, RotateCcw, Activity } from "lucide-react"

interface CompletionScreenProps {
  evaluations: any[]
  onRestart: () => void
  onGoHome: () => void
  onViewLogs: () => void
}

export function CompletionScreen({ evaluations, onRestart, onGoHome, onViewLogs }: CompletionScreenProps) {
  const goodCount = evaluations.filter((e) => e.evaluation === "good").length
  const badCount = evaluations.filter((e) => e.evaluation === "bad").length
  const normalCount = evaluations.filter((e) => e.evaluation === "normal").length

  return (
    <Card className="p-8 text-center max-w-sm w-full bg-gradient-to-b from-background to-secondary/20 border-none shadow-2xl">
      <div className="space-y-8">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-2">Great Job!</h2>
          <p className="text-muted-foreground">You've reached the end of the current paper reel.</p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 bg-green-500/10 rounded-xl">
            <div className="text-xl font-bold text-green-600">{goodCount}</div>
            <div className="text-[10px] uppercase font-bold text-green-600/70">Good</div>
          </div>
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <div className="text-xl font-bold text-blue-600">{badCount}</div>
            <div className="text-[10px] uppercase font-bold text-blue-600/70">Bad</div>
          </div>
          <div className="p-3 bg-secondary rounded-xl">
            <div className="text-xl font-bold">{normalCount}</div>
            <div className="text-[10px] uppercase font-bold text-muted-foreground">Normal</div>
          </div>
        </div>

        <div className="space-y-3">
          <Button onClick={onGoHome} variant="default" size="lg" className="w-full gap-2 rounded-xl">
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
          <Button onClick={onViewLogs} variant="outline" size="lg" className="w-full gap-2 rounded-xl">
            <Activity className="w-4 h-4" />
            Check Your Logs
          </Button>
          <Button onClick={onRestart} variant="ghost" size="sm" className="w-full gap-2 text-muted-foreground">
            <RotateCcw className="w-3 h-3" />
            Restart Explore
          </Button>
        </div>
      </div>
    </Card>
  )
}
