import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedBackgroundProps } from './types';

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  images, 
  currentImageIndex, 
  isTransitioning,
  secondaryImages = []
}) => {
  // Get the current primary and secondary images
  const primaryImage = images[currentImageIndex];
  const secondaryImage = secondaryImages.length > 0 
    ? secondaryImages[currentImageIndex % secondaryImages.length] 
    : null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ zIndex: -1 }}>
      {/* Primary Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`primary-${currentImageIndex}`}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ 
            opacity: 1, 
            scale: isTransitioning ? 1.08 : 1.03
          }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ 
            opacity: { duration: 1.5 },
            scale: { duration: 10, ease: "linear" }
          }}
          style={{
            backgroundImage: `url(${primaryImage})`,
            position: 'absolute', // Ensure it stays in the background
          }}
        />
      </AnimatePresence>
      
      {/* Secondary Background Image (if available) */}
      {secondaryImage && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`secondary-${currentImageIndex}`}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: isTransitioning ? 0.7 : 0,
              scale: isTransitioning ? 1.12 : 1.05
            }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ 
              opacity: { duration: 3 },
              scale: { duration: 8, ease: "easeOut" }
            }}
            style={{
              backgroundImage: `url(${secondaryImage})`,
              mixBlendMode: 'overlay',
              position: 'absolute' // Ensure it stays in the background
            }}
          />
        </AnimatePresence>
      )}
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/10 via-dark/50 to-dark"></div>
    </div>
  );
};

export default AnimatedBackground;
