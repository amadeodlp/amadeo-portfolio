import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconType } from 'react-icons';
import { TechIconsRotatorProps } from './types';

const TechIconsRotator: React.FC<TechIconsRotatorProps> = ({ 
  icons,
  size = 'medium',
  className = '',
  shadow = true,
  transitionInterval = 3000,
  iconColor = '#00E9C5'
}) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  // Change icon every specified interval
  useEffect(() => {
    if (icons.length <= 1) return;

    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIconIndex((prevIndex) => 
          (prevIndex + 1) % icons.length
        );
      }, 400); // Change icon after starting transition
      
      // Reset transition state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, transitionInterval);

    return () => clearInterval(intervalId);
  }, [icons.length, transitionInterval]);

  const CurrentIcon = icons[currentIconIndex];

  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${getSizeClass()} ${className} ${shadow ? 'shadow-xl shadow-dark/50' : ''} transition-all duration-300 flex items-center justify-center cursor-pointer bg-dark/60 backdrop-blur-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`tech-icon-${currentIconIndex}`}
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ 
            opacity: 1, 
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0,
            filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
          }}
          exit={{ opacity: 0, scale: 0.8, rotate: 10, filter: "blur(8px)" }}
          transition={{ 
            opacity: { duration: 0.4 },
            scale: { duration: 0.5, ease: "easeInOut" },
            rotate: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          <CurrentIcon className={`text-8xl`} style={{ color: iconColor }} />
        </motion.div>
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

export default TechIconsRotator;
