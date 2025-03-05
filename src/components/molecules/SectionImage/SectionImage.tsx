import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionImageProps } from './types';

const SectionImage: React.FC<SectionImageProps> = ({ 
  images,
  size = 'medium',
  className = '',
  shadow = true,
  transitionInterval = 6000
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Add hover interaction
  const [isHovered, setIsHovered] = useState(false);

  // Calculate size classes
  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'w-32 h-32';
      case 'medium': return 'w-48 h-48 md:w-64 md:h-64';
      case 'large': return 'w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]';
      default: return 'w-48 h-48 md:w-64 md:h-64';
    }
  };

  // Change image every 6 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % images.length
        );
      }, 800); // Change image after starting transition
      
      // Reset transition state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    }, transitionInterval);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${getSizeClass()} ${className} ${shadow ? 'shadow-xl shadow-dark/50' : ''} transition-all duration-300 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`section-image-${currentImageIndex}`}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: 1, 
            scale: isHovered ? 1.2 : isTransitioning ? 1.15 : 1.05,
            rotate: isHovered ? 2 : isTransitioning ? 1 : 0,
            filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)'
          }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 6, ease: "easeInOut" },
            rotate: { duration: 6, ease: "easeInOut" }
          }}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            position: 'absolute', // Ensure it stays in the background
          }}
        />
      </AnimatePresence>

      {/* Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-dark/10 to-dark/30 mix-blend-overlay"></div>
      
      {/* Add a subtle border */}
      <div className="absolute inset-0 border border-white/10 rounded-lg"></div>
      
      {/* Add a subtle glow effect when hovered */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#653490]/30 to-[#00E9C5]/30 mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default SectionImage;
