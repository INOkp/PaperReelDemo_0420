"use client"

import { Home, Compass, Bookmark, User } from "lucide-react"
import { cn } from "@/lib/utils"

type View = "home" | "reel" | "library" | "profile"

interface BottomNavProps {
  currentView: View
  onViewChange: (view: View) => void
}

export function BottomNav({ currentView, onViewChange }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "reel", icon: Compass, label: "Explore" },
    { id: "library", icon: Bookmark, label: "Library" },
    { id: "profile", icon: User, label: "Profile" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t flex items-center justify-around px-4 z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={cn(
            "flex flex-col items-center justify-center gap-1 w-full h-full",
            currentView === item.id ? "text-primary" : "text-muted-foreground"
          )}
          onClick={() => onViewChange(item.id as View)}
        >
          <item.icon className={cn("w-6 h-6", currentView === item.id && "fill-current")} />
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
