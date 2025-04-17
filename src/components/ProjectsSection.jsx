import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "3D Portfolio",
    description: "A modern portfolio with 3D elements built with React",
    image: `${process.env.PUBLIC_URL}/images/projects/project1.png`,
    category: "3D",
    technologies: ["React", "Spring Boot", "MySQL"],
    link: "https://example.com/project1",
    github: "https://github.com/baran0607/3d-portfolio"
  },
  {
    id: 2,
    title: "Online Exam Portal",
    description: "A web application for conducting online exams",
    image: `${process.env.PUBLIC_URL}/images/projects/project2.png`,
    category: "Full-stack",
    technologies: ["React", "Spring Boot", "Mysql"],
    link: "https://example.com/project2",
    github: "https://github.com/johndoe/project2"
  },
  {
    id: 3,
    title: "Tracking expenses App",
    description: "A mobile application for tracking expenses",
    image: `${process.env.PUBLIC_URL}/images/projects/project3.png`,
    category: "App",
    technologies: ["React", "Native", "Expo"],
    link: "https://example.com/project3",
    github: "https://github.com/baran0607/tracking"
  },
  {
    id: 4,
    title: "Departmental store",
    description: "A web application for managing a departmental store",
    image: `${process.env.PUBLIC_URL}/images/projects/project4.png`,
    category: "Full-stack",
    technologies: ["React", "Node.js", "MySQL"],
    link: "https://example.com/project4",
    github: "https://github.com/baran0607/Department_Store"
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ["All", "3D", "Full-stack", "App"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="section projects-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-content"
      >
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-buttons">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <motion.div
          layout
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="project-card"
                onClick={() => openProjectDetails(project)}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="project-modal-overlay"
              onClick={closeProjectDetails}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="project-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeProjectDetails}>×</button>
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="modal-content">
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                  
                  <div className="tech-stack">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-links">
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;