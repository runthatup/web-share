"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/thirdparty/shadcn/card'
import { Badge } from '@/src/components/thirdparty/shadcn/badge'
import { Crown, Medal, Award, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

interface LeaderboardEntry {
  id: string
  name: string
  username: string
  score: number
  avatar?: string
  rank: number
}

const mockLeaderboardData: LeaderboardEntry[] = [
  { id: '1', name: 'Sarah Johnson', username: 'sarahj', score: 25847, rank: 1 },
  { id: '2', name: 'Mike Chen', username: 'mikechen', score: 24392, rank: 2 },
  { id: '3', name: 'Emma Davis', username: 'emmad', score: 23156, rank: 3 },
  { id: '4', name: 'Alex Rivera', username: 'alexr', score: 22089, rank: 4 },
  { id: '5', name: 'Jordan Kim', username: 'jordank', score: 21234, rank: 5 },
]

export function Leaderboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Global Leaderboard</h1>
        <p className="text-muted-foreground">See how you stack up against the community</p>
      </div>

      <div className="space-y-4">
        {mockLeaderboardData.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`${entry.rank <= 3 ? 'border-primary/50 bg-primary/5' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      {entry.rank === 1 && <Crown className="h-6 w-6 text-yellow-500" />}
                      {entry.rank === 2 && <Medal className="h-6 w-6 text-gray-400" />}
                      {entry.rank === 3 && <Award className="h-6 w-6 text-orange-500" />}
                      {entry.rank > 3 && <span className="text-lg font-bold text-primary">#{entry.rank}</span>}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{entry.name}</h3>
                      <p className="text-sm text-muted-foreground">@{entry.username}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{entry.score.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">points</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Rankings updated every hour • Join the app to compete!
        </p>
      </div>
    </div>
  )
}