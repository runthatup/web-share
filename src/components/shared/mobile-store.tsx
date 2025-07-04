"use client"

import React from 'react'
import { Apple } from 'lucide-react'
import { Button } from '@/src/components/thirdparty/shadcn/button'

interface MobileStoreButtonProps {
  store: 'ios' | 'android'
  url: string
  height?: number
  width?: number
}

export const MobileStoreButton: React.FC<MobileStoreButtonProps> = ({ 
  store, 
  url, 
  height = 60, 
  width = 200 
}) => {
  const isIOS = store === 'ios'
  
  return (
    <Button
      asChild
      variant="outline"
      className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 p-3 rounded-xl"
      style={{ height, width }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {isIOS ? (
              <Apple className="h-8 w-8 text-foreground" />
            ) : (
              <div className="h-8 w-8 bg-green-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">GP</span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-muted-foreground">
              {isIOS ? 'Download on the' : 'Get it on'}
            </span>
            <span className="text-sm font-semibold text-foreground">
              {isIOS ? 'App Store' : 'Google Play'}
            </span>
          </div>
        </div>
      </a>
    </Button>
  )
}