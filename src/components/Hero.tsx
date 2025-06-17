"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShineBorder } from "./magicui/shine-border";



const Hero = () => {
  return (
    <div className="relative  w-96 max-w-1/3 mx-auto  rounded-2xl overflow-hidden border border-gray-800  shadow-xl">
      {/* Background Glow */}
      <div className="absolute inset-0 h-full w-full scale-95 transform rounded-full   opacity-20 z-0" />

      {/* Animated Hero Image + Meteors */}
      <motion.div
        className="relative z-10 flex justify-center"
        initial={{ y: "100%", scale: 0.8, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/kratos.png"
          alt="hero"
          height={300}
          width={200}
          className="h-[300px] w-[200px] object-contain"
        />
        {/* <Meteors number={20} /> */}
      </motion.div>

      {/* Shine Border */}
      <ShineBorder shineColor="red" />
    </div>
  );
};

export default Hero;
