"use client"

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
}

const generateStars = (num: number): Star[] => {
  const stars = [];
  for (let i = 0; i < num; i++) {
    const size = Math.random() * 2 + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const speed = Math.random() * 0.05 + 0.01;
    const angle = Math.random() * 360;
    stars.push({ x, y, size, speed, angle });
  }
  return stars;
};

const StarsCanvas: React.FC = () => {
  const [stars, setStars] = useState<Star[]>(() => generateStars(250));


  useEffect(() => {
    const intervalId = setInterval(() => {
      setStars(prevStars => 
        prevStars.map(star => {
          const radians = star.angle * (Math.PI / 180);
          let newX = star.x + Math.cos(radians) * star.speed;
          let newY = star.y + Math.sin(radians) * star.speed;

          if (newX > 100) newX -= 100;
          if (newX < 0) newX += 100;
          if (newY > 100) newY -= 100;
          if (newY < 0) newY += 100;

          const newAngle = Math.random() < 0.01 ? Math.random() * 360 : star.angle;

          return { ...star, x: newX, y: newY, angle: newAngle };
        })
      );
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 -z-20 overflow-hidden transition-colors duration-500 dark:bg-black bg-gray-100">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
          }}
          className="transition-colors duration-500 dark:bg-white bg-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 3 + 1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default StarsCanvas;
