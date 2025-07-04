"use client"

import * as React from "react"
import { Button } from "@/src/components/thirdparty/shadcn/button"
import { Badge } from "@/src/components/thirdparty/shadcn/badge"
import { Users, Activity, Target, Trophy, Star, Rocket, Heart, Zap, Smartphone, CheckCircle } from "lucide-react"
import { MobileStoreButton } from "@/src/components/shared/mobile-store"
import { motion } from "framer-motion"
import config from "@/src/config"
import Image from "next/image"

export function Main() {
  const highlights = [
    { icon: Rocket, title: "Just Launched", description: "Fresh new fitness experience" },
    { icon: Heart, title: "Built for Community", description: "Connect with like-minded people" },
    { icon: Zap, title: "Your Schedule", description: "Fitness that fits your life" },
  ]

  const features = [
    { icon: Users, title: "Social Events", description: "Join challenges with friends" },
    { icon: Activity, title: "Health Sync", description: "Apple Health integration" },
    { icon: Target, title: "Personal Goals", description: "Track your progress" },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink-100 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-50 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-50 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Content Container */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-12 max-w-4xl mx-auto">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <Badge className="px-4 py-2 text-sm font-medium bg-[#CC0256]/10 text-[#CC0256] border-[#CC0256]/20 hover:bg-[#CC0256]/15">
                <Star className="w-4 h-4 mr-2" />
                Now Available on iOS
              </Badge>
            </motion.div>

            {/* Hero Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Run on</span>
                <br />
                <span className="text-[#CC0256]">your time</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The social fitness app that adapts to your schedule. Connect with friends, track your progress, and compete in challenges that fit your life.
              </p>
            </motion.div>

            {/* App Preview Card - Minimal & Modern */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center items-center"
            >
              <div className="relative">
                {/* Neon border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#CC0256]/20 via-[#CC0256]/10 to-[#CC0256]/20 rounded-3xl blur-sm" />
                
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#CC0256]/20 max-w-sm mx-auto">
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#CC0256]/10 to-[#CC0256]/20 rounded-2xl flex items-center justify-center p-2">
                        <Image 
                          src={require("@/public/rtu-outline.png")} 
                          alt="RunThatUp" 
                          width={48} 
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">RunThatUp</h3>
                      <p className="text-gray-600">Social fitness challenges that fit your schedule</p>
                    </div>
                    <div className="flex items-center justify-center space-x-6 pt-2">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-[#CC0256]" />
                        <span className="text-sm text-gray-600">Social</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Activity className="w-5 h-5 text-[#CC0256]" />
                        <span className="text-sm text-gray-600">Tracking</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-[#CC0256]" />
                        <span className="text-sm text-gray-600">Goals</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-[#CC0256]/10 backdrop-blur-sm rounded-full p-3 border border-[#CC0256]/20"
                >
                  <Trophy className="w-6 h-6 text-[#CC0256]" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-[#CC0256]/10 backdrop-blur-sm rounded-full p-3 border border-[#CC0256]/20"
                >
                  <Activity className="w-6 h-6 text-[#CC0256]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {highlights.map((highlight, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
                  <div className="w-12 h-12 bg-[#CC0256]/10 rounded-full flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-[#CC0256]" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 text-lg">{highlight.title}</div>
                    <div className="text-sm text-gray-600">{highlight.description}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <MobileStoreButton store="ios" url={config.appStoreUrl} height={56} width={180} />
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Available on iOS • Android coming soon</span>
              </div>
            </motion.div>

            {/* Early Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center space-x-2 text-sm text-gray-600"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <span>Be among the first to experience the future of fitness</span>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-gray-200/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-[#CC0256]">RunThatUp</span>
              </div>
              
              {/* Footer Text */}
              <div className="text-sm text-gray-600 text-center sm:text-right">
                <p>© {new Date().getFullYear()} RunThatUp. Available on iOS • Android coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}