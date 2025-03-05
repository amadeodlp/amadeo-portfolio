import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InfoSectionProps } from './types';

const InfoSection: React.FC<InfoSectionProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <motion.div 
        className="inline-flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered ? '0 10px 25px -5px rgba(101, 52, 144, 0.3)' : '0 0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="purple-badge relative">
          <div className="bg-[#653490] font-medium text-white px-8 py-2 text-center relative z-20 shadow-md shadow-[#653490]/30">
            <span className="text-sm">+</span> INFO
          </div>
          <div className="absolute inset-0 z-10 rotate-3 bg-white/10"></div>
        </div>
      </motion.div>
      
      <div className="text-white/90 text-lg drop-shadow-sm leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
