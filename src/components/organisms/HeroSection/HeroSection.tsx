import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroSectionProps } from './types';
import AnimatedBackground from '@/components/molecules/AnimatedBackground';
import { pageBackgrounds } from '@/utils/imageUtils';

// Get the first image from home backgrounds as default
const defaultBgImages = {
  primary: [pageBackgrounds.home.primary[0]],
  secondary: [pageBackgrounds.home.secondary[0]]
};

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  description,
  backgroundImages,
  secondaryBackgroundImages,
  pageType = 'home',
  contactForm
}) => {
  // Use provided images or default to page-specific backgrounds
  const primaryImages = backgroundImages || pageBackgrounds[pageType]?.primary || defaultBgImages.primary;
  const secondaryImages = secondaryBackgroundImages || pageBackgrounds[pageType]?.secondary || defaultBgImages.secondary;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Change background image every 8 seconds
  useEffect(() => {
    if (primaryImages.length <= 1) return;

    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % primaryImages.length
        );
      }, 1000); // Change image after starting transition
      
      // Reset transition state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2500); // Extended transition time for secondary image effect
    }, 10000); // Extended to 10 seconds for a slower pace

    return () => clearInterval(intervalId);
  }, [primaryImages.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background with primary and secondary images */}
      <AnimatedBackground 
        images={primaryImages}
        secondaryImages={secondaryImages}
        currentImageIndex={currentImageIndex}
        isTransitioning={isTransitioning}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16 pb-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${contactForm || pageType === 'contact' ? 'md:w-1/2 lg:w-2/5' : 'w-full'}`}
          >
            {subtitle && (
              <div className="mb-4 text-white/80">
                {subtitle}
              </div>
            )}
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight drop-shadow-lg">
              {title}
            </h1>
            
            {description && (
              <div className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
                {description}
              </div>
            )}
          </motion.div>

          {/* Display only the contact form if provided (removed section image) */}
          {contactForm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 md:mt-0 self-center md:self-start flex-shrink-0"
            >
              {contactForm}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
