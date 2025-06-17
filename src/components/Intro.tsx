"use client";

import { ShineBorder } from "@/components/magicui/shine-border";
import Image from "next/image";


import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import Hero from "./Hero";

export default function Intro() {
  return (
    <div className="relative  md:flex gap-5 h-90  px-4 py-10 rounded-2xl overflow-hidden">
      <div>

      
      <header className="flex justify-between items-center gap-18">
        <div className="flex items-center gap-4">
          
          <div className="font-light ">
            <h1>Hii I&apos;m Kusahgra Kumar</h1>
            <span className="font-thin">web Designer & Developer</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link  href="https://x.com/KushagraDkumar" className="border-1 border-white/60 rounded-md p-1" >
            <FaSquareXTwitter className="text-3xl"  />
          </Link>
          <Link href="https://www.linkedin.com/in/kushagra-kumar-7192a7221/" className="border-1 border-white/60 rounded-md p-1" >
            <FaLinkedin className="text-3xl" />
          </Link>
          <Link href="https://github.com/krAtOsnana" className="border-1 border-white/60 rounded-md p-1" >
            <FaSquareGithub className="text-3xl" />
          </Link>
        </div>
      </header>

      <section>
        <h1 className="text-3xl font-medium mt-5  ">I build products that bring you more clients, not just users.</h1>
        <p className=" mt-4 text-lg bg-gradient-to-r to-gray-600 from-gray-400 text-transparent bg-clip-text inline-block">Using my exclusive "High-Converting System",
         I design and build fullstack products that book you more calls,
        3x your sales, and help you earn while you sleep.</p>
      </section>
      </div>
      <Hero/>

      <ShineBorder shineColor={"white"} />
    </div>
  );
}
