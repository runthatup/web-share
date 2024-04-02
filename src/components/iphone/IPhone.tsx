"use client";

import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const IPhone = () => {
  return (
    <Box position="relative" w="300px" h="600px" mx="auto">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%) rotate(10deg)"
        w="100%"
        h="100%"
        bg="white"
        borderRadius="40px"
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.3)"
        overflow="hidden"
      >
        {/* Phone frame */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          borderWidth="12px"
          borderColor="black"
          borderRadius="40px"
        />
        {/* Notch */}
        <Box
          position="absolute"
          top="0"
          left="50%"
          transform="translateX(-50%)"
          w="33%"
          h="4%"
          bg="black"
          borderRadius="0 0 20px 20px"
        />
        {/* Phone screen */}
        <Box
          position="absolute"
          top="1%"
          left="2%"
          right="2%"
          bottom="2%"
          bg="white"
          borderRadius="30px"
          overflow="hidden"
        >
          {/* Screen content */}
          <Box position="absolute" top="0" left="0" right="0" bottom="0">
            {/* Add your screen content here */}
            <Image
              src="/iphone-screen.png"
              width={300}
              height={600}
              alt="App Screenshot"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};