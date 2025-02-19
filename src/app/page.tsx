'use client'
import { HyperText } from '@/components/ui/HyperText'
import React from 'react'
import dynamic from 'next/dynamic';

// Dynamically import the StarsCanvas component with SSR disabled
const StarsCanvas = dynamic(() => import('@/components/StarBackground'), { ssr: false });
const page = () => {
  return (
    <div>
      <HyperText>kushagra</HyperText>
      <StarsCanvas />
    </div>
  )
}

export default page
