"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { ShineBorder } from "./magicui/shine-border";
import Image from "next/image";

const content = [
  
  {
    title: "Blood Link",
    url: "https://blood-link-kappa.vercel.app/",
    description:
          "Blood Link is a platform that connects blood donors with recipients in real-time, streamlining emergency requests and ensuring faster access to life-saving donations. Built with a focus on speed, reliability, and accessibility.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/bl1.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    )
  },
  {
    title: "Quiet space",
    url: "https://quite-space.vercel.app/",
    description:
    "Quiet Space is a minimalist social media platform focused on mindfulness and meaningful connections. It offers a calm, distraction-free environment where users can share thoughts, reflect, and engage authentically—without the noise of traditional social platforms.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/qs3.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    )
  },
  
  
];
export default function Projects() {
  return (
    <>
      <div className="w-full relative  py-4 rounded-xl mt-5">
        <div>
          <h1 className="text-3xl font-bold mb-6 pl-10">Projects</h1>
        <StickyScroll content={content} />
        </div>
        <ShineBorder shineColor={"white"}/>
      </div>
    </>
  );
}
