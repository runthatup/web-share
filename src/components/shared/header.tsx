"use client"

import * as React from "react"
import { ThemeToggle } from "@/src/components/shared/theme-toggle"
import { Button } from "@/src/components/thirdparty/shadcn/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="font-bold">R</span>
            </div>
            <span className="hidden font-bold sm:inline-block">
              RunThatUp
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Future: Add search here if needed */}
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="#features">Features</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#download">Download</a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}