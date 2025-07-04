"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const IPhone = () => {
  return (
    <motion.div 
      className="relative w-[300px] h-[600px] mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[10deg] w-full h-full bg-white rounded-[40px] shadow-2xl overflow-hidden"
        animate={{ 
          rotateY: [0, 5, 0, -5, 0],
          rotateX: [0, 2, 0, -2, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* Phone frame */}
        <div className="absolute inset-0 border-[12px] border-black rounded-[40px]" />
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[4%] bg-black rounded-b-[20px]" />
        
        {/* Phone screen */}
        <div className="absolute top-[1%] left-[2%] right-[2%] bottom-[2%] bg-white rounded-[30px] overflow-hidden">
          {/* Screen content */}
          <div className="absolute inset-0">
            <Image
              src="/iphone-screen.png"
              width={300}
              height={600}
              alt="RunThatUp App Screenshot"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5" />
        </div>
        
        {/* Reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[40px] pointer-events-none" />
      </motion.div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-6 bg-primary rounded-full" />
      </motion.div>
      
      <motion.div
        className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center"
        animate={{ 
          y: [0, 10, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-4 h-4 bg-purple-500 rounded-full" />
      </motion.div>
    </motion.div>
  );
};