import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ContactButtonProps } from './types';

const ContactButton: React.FC<ContactButtonProps> = ({ 
  href = '/contact',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ 
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        to={href} 
        onClick={onClick}
        className="bg-red-600 text-white font-medium uppercase tracking-wide px-6 py-2 inline-block transition-colors hover:bg-red-700"
      >
        Contact
      </Link>
    </motion.div>
  );
};

export default ContactButton;
