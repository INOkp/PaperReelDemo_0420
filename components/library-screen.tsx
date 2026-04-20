"use client"

import { Bookmark, Search, MoreVertical, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Paper } from "@/lib/types"

interface LibraryScreenProps {
  goodPapers: Paper[]
  onSelectPaper: (paperId: string) => void
}

export function LibraryScreen({ goodPapers, onSelectPaper }: LibraryScreenProps) {
  return (
    <div className="flex flex-col h-screen bg-background pb-20">
      <header className="flex items-center justify-between px-4 py-4 border-b">
        <h1 className="text-2xl font-bold">Your Library</h1>
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 fill-primary text-primary" />
            <h2 className="text-lg font-semibold">Good Papers ({goodPapers.length})</h2>
          </div>

          {goodPapers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Bookmark className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground font-medium">No good papers yet</p>
                <p className="text-sm text-muted-foreground">Papers you swipe right will appear here</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {goodPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="p-4 rounded-xl border bg-card hover:bg-accent transition-colors cursor-pointer group"
                  onClick={() => onSelectPaper(paper.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-[10px] h-4">
                          {paper.metadata.field}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground">{paper.metadata.year}</span>
                      </div>
                      <h3 className="font-bold leading-snug group-hover:text-primary transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {paper.authors.join(", ")}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t pt-3">
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                      {paper.metadata.venue}
                    </span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
