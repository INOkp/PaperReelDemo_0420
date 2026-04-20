"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { UserProfile } from "@/lib/types"

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1)
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    field: "",
    age: "",
    interests: [],
  })

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      onComplete(profile)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to PaperReel</CardTitle>
          <CardDescription>Step {step} of 3: Let's set up your profile</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">What's your name?</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age Range</Label>
                <Select onValueChange={(value) => setProfile({ ...profile, age: value })} value={profile.age}>
                  <SelectTrigger id="age">
                    <SelectValue placeholder="Select age range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-20">Under 20</SelectItem>
                    <SelectItem value="20-25">20 - 25</SelectItem>
                    <SelectItem value="26-30">26 - 30</SelectItem>
                    <SelectItem value="over-30">Over 30</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="field">Your Research Field</Label>
                <Select onValueChange={(value) => setProfile({ ...profile, field: value })} value={profile.field}>
                  <SelectTrigger id="field">
                    <SelectValue placeholder="Select your field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
                    <SelectItem value="Human-Computer Interaction">Human-Computer Interaction</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Biology">Biology</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <Label>What are you interested in?</Label>
              <div className="grid grid-cols-2 gap-2">
                {["Deep Learning", "UX Design", "Robotics", "Quantum Computing", "Bioinformatics", "NLP"].map((interest) => (
                  <Button
                    key={interest}
                    variant={profile.interests.includes(interest) ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => {
                      const newInterests = profile.interests.includes(interest)
                        ? profile.interests.filter((i) => i !== interest)
                        : [...profile.interests, interest]
                      setProfile({ ...profile, interests: newInterests })
                    }}
                  >
                    {interest}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleNext} disabled={step === 1 && !profile.name}>
            {step === 3 ? "Get Started" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
