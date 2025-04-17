import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="loading-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="loading-content"
      >
        <div className="loader">
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              borderRadius: ["20%", "50%", "20%"] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="loader-cube"
          />
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Welcome to my Portfolio
        </motion.h1>
        
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 2.5 }}
          className="loading-bar"
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;