'use client'

import React from 'react'
import dynamic from 'next/dynamic';
import Portfolio from '@/components/Portfolio';

// Dynamically import the StarsCanvas component with SSR disabled
const StarsCanvas = dynamic(() => import('@/components/StarBackground'), { ssr: false });
const page = () => {
  return (
    <>
    <div className=' max-w-2xl flex mx-auto justify-center '>
      <Portfolio/>
    </div>
      <StarsCanvas />
    </>
  )
} 

export default page
