import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const skills = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'React Native', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'JQuery', level: 85 },
      { name: 'Framer Motion', level: 30 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MySql', level: 75 },
      { name: 'Spring Boot', level: 70 },
      { name: 'AWS', level: 30 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 70 },
      { name: 'Redux', level: 60 },
      { name: 'Jest', level: 75 },
      { name: 'Figma', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 }
    ]
  };
  
  return (
    <section id="skills" className="section skills-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-content"
      >
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="tabs">
          <motion.button
            className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Frontend
          </motion.button>
          <motion.button
            className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Backend
          </motion.button>
          <motion.button
            className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tools & Others
          </motion.button>
        </div>
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="skills-container"
        >
          {skills[activeTab].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;