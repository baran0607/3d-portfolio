import React, { useEffect , useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ theme }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loading-screen ${theme}-theme`}>
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
          style={{ width: `${loadingProgress}%` }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
