"use client"

import { Activity, Trash2, Clock, ThumbsUp, ThumbsDown, Minus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { EvaluationLog, Paper } from "@/lib/types"

interface ActivityLogProps {
  evaluations: EvaluationLog[]
  papers: Paper[]
  onClearLogs: () => void
}

export function ActivityLog({ evaluations, papers, onClearLogs }: ActivityLogProps) {
  const getPaperTitle = (id: string) => papers.find((p) => p.id === id)?.title || "Unknown Paper"

  return (
    <div className="flex flex-col h-screen bg-background pb-20">
      <header className="flex items-center justify-between px-4 py-4 border-b">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary" />
          Activity Log
        </h1>
        <Button variant="ghost" size="icon" onClick={onClearLogs}>
          <Trash2 className="w-5 h-5 text-muted-foreground" />
        </Button>
      </header>

      <div className="flex-1 overflow-y-auto">
        {evaluations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 px-8">
            <Activity className="w-12 h-12 text-muted" />
            <p className="text-muted-foreground">No activities recorded yet. Start exploring to see your logs!</p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {evaluations.slice().reverse().map((log, index) => (
              <div key={`${log.paperId}-${index}`} className="flex gap-4 p-4 rounded-xl border bg-card">
                <div className="shrink-0 mt-1">
                  {log.evaluation === "good" ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                      <ThumbsUp className="w-4 h-4 fill-current" />
                    </div>
                  ) : log.evaluation === "bad" ? (
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                      <ThumbsDown className="w-4 h-4 fill-current" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                      <Minus className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Rank #{log.rank}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {(log.dwellTime / 1000).toFixed(1)}s
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug">
                    {getPaperTitle(log.paperId)}
                  </h3>
                  <p className="text-[10px] text-muted-foreground">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
