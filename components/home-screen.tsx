"use client"

import { useState } from "react"
import { Search, Bell, Play, Sparkles, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Paper } from "@/lib/types"
import { cn } from "@/lib/utils"

interface HomeScreenProps {
  papers: Paper[]
  onSelectPaper: (paperId: string) => void
}

export function HomeScreen({ papers, onSelectPaper }: HomeScreenProps) {
  const [selectedTag, setSelectedTag] = useState("CHI'26")

  const tags = ["All", "CHI'26", "For You", "Trending", "Deep Learning", "HCI"]
  
  const filteredPapers = papers.filter(p => {
    if (selectedTag === "All") return true
    if (selectedTag === "CHI'26") return p.metadata.venue === "CHI 2026"
    return p.metadata.field.includes(selectedTag) || p.title.includes(selectedTag)
  })

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b bg-background/95 backdrop-blur z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Play className="w-5 h-5 text-primary-foreground fill-current" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">PaperReel</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6" />
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>TR</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Search and Tags */}
      <div className="px-4 py-3 space-y-4 bg-background/95 backdrop-blur z-40 sticky top-0">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input className="pl-10 bg-secondary border-none" placeholder="Search papers, authors..." />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar max-w-5xl mx-auto">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant={selectedTag === tag ? "default" : "secondary"} 
              className={cn(
                "whitespace-nowrap px-4 py-1.5 cursor-pointer transition-all text-sm",
                tag === "CHI'26" && selectedTag !== tag && "bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 border"
              )}
              onClick={() => setSelectedTag(tag)}
            >
              {tag === "CHI'26" && <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />}
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Grid of Reels */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {filteredPapers.slice(0, 40).map((paper, index) => (
            <div
              key={paper.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-white border group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]"
              onClick={() => onSelectPaper(paper.id)}
            >
              {/* Paper Content Preview (Optimized for Visibility) */}
              <div className="absolute inset-0 p-4 flex flex-col pointer-events-none">
                <div className="mb-3 flex justify-between items-start">
                  <div className="px-2 py-1 bg-secondary rounded text-[10px] font-bold text-muted-foreground">
                    #{index + 1}
                  </div>
                  {paper.metadata.venue === "CHI 2026" && (
                     <div className="bg-primary/10 text-primary p-1 rounded-full shadow-sm">
                        <Sparkles className="w-3 h-3" />
                     </div>
                  )}
                </div>
                
                <h3 className="text-xs sm:text-sm font-bold leading-tight line-clamp-4 mb-2 text-foreground group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>
                
                <p className="text-[10px] text-muted-foreground line-clamp-1 mb-4">
                  {paper.authors[0]} et al.
                </p>

                {/* Simplified Miniature Sections for Readability */}
                <div className="space-y-3 mt-auto mb-8">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-8 bg-orange-500 rounded-full shrink-0" />
                    <p className="text-[9px] text-muted-foreground line-clamp-2 leading-tight italic">
                      {paper.contentJa.background}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-8 bg-purple-500 rounded-full shrink-0" />
                    <p className="text-[9px] text-muted-foreground line-clamp-2 leading-tight italic">
                      {paper.contentJa.objective}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-2.5 h-2.5 text-white fill-current" />
                    </div>
                    <span className="text-white text-[10px] font-bold">{(paper.score * 100).toFixed(0)}% Match</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1">
                   <BookOpen className="w-3 h-3 text-white/60" />
                   <span className="text-white/60 text-[8px] uppercase tracking-wider font-bold truncate">{paper.metadata.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
