import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-content"
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="John Doe" />
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <p>
              Hi there! I'm Baran, a passionate full-stack developer with 1+ years of experience
              building web applications and interactive experiences.
            </p>
            <p>
              My journey in web development started when I was studying Electronics and Communication Engineering at Arunai Engineering College.
              Since then, I've worked with various technologies and frameworks to create
              scalable and user-friendly applications.
            </p>
            <p>
              I specialize in React.js, React Native focusing on creating immersive
              3D experiences and performant web applications. When I'm not coding, you can find
              me hiking, reading sci-fi novels, or experimenting with new technologies.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <h3>1+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>1+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="download-cv"
              href={`${process.env.PUBLIC_URL}/files/baranidharan-resume.pdf`}
              download
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
