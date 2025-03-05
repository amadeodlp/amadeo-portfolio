import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeaderProps } from './types';

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  color = 'cyan', 
  align = 'center' 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const getColorClass = () => {
    switch (color) {
      case 'cyan':
        return 'bg-[#00E9C5]';
      case 'purple':
        return 'bg-[#653490]';
      case 'blue':
        return 'bg-blue-500';
      default:
        return 'bg-[#00E9C5]';
    }
  };

  const getAlignmentClass = () => {
    switch (align) {
      case 'left':
        return 'text-left';
      case 'center':
        return 'text-center mx-auto';
      case 'right':
        return 'text-right ml-auto';
      default:
        return 'text-center mx-auto';
    }
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0,
      }
    }
  };

  const lineVariants = {
    hidden: { width: '100%', opacity: 1 },
    visible: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 0
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={headerVariants}
      className={`mb-12 ${getAlignmentClass()}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4 drop-shadow-md">
        {title}
      </h2>
      <div className="overflow-hidden max-w-xl relative h-1.5 rounded-md bg-dark-light/50 backdrop-blur-sm shadow-inner">
        <motion.div 
          variants={lineVariants} 
          className={`h-full absolute left-0 top-0 ${getColorClass()} ${getAlignmentClass()} rounded-md shadow-lg`}
          style={{ maxWidth: '100%' }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
