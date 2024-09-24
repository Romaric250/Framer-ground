"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  '/public/image1.jpg',
  '/public/image2.jpg',
  '/public/image3.jpg',
  '/public/image4.jpg'
];

const BoxCarousel = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleSpin = (direction: 'up' | 'down' | 'left' | 'right') => {
    switch (direction) {
      case 'up':
        setRotation(prev => ({ ...prev, x: prev.x - 90 }));
        break;
      case 'down':
        setRotation(prev => ({ ...prev, x: prev.x + 90 }));
        break;
      case 'left':
        setRotation(prev => ({ ...prev, y: prev.y - 90 }));
        break;
      case 'right':
        setRotation(prev => ({ ...prev, y: prev.y + 90 }));
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="relative w-64 h-64"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(128px)`
            }}
          >
            <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 flex space-x-4">
        <ArrowUp onClick={() => handleSpin('up')} className="cursor-pointer text-blue-500 w-8 h-8" />
        <ArrowDown onClick={() => handleSpin('down')} className="cursor-pointer text-blue-500 w-8 h-8" />
        <ArrowLeft onClick={() => handleSpin('left')} className="cursor-pointer text-blue-500 w-8 h-8" />
        <ArrowRight onClick={() => handleSpin('right')} className="cursor-pointer text-blue-500 w-8 h-8" />
      </div>
    </div>
  );
};

export default BoxCarousel;