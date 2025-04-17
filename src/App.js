// import React, { useState, useEffect, useRef, Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars, useGLTF, Html} from '@react-three/drei';
// import { motion} from 'framer-motion';
// import Navbar from './components/Navbar';
// import AboutSection from './components/AboutSection';
// import ProjectsSection from './components/ProjectsSection';
// import SkillsSection from './components/SkillsSection';
// import ContactSection from './components/ContactSection';
// import LoadingScreen from './components/LoadingScreen';
// import './App.css';


// // Preload the model
// useGLTF.preload('/models/laptop.glb');

// function FloatingLaptop({ scrollY }) {
//   const laptop = useRef();
//   const { nodes, materials } = useGLTF('/models/laptop.glb');
  
//   useEffect(() => {
//     if (laptop.current) {
//       laptop.current.rotation.y = scrollY * 0.01;
//       laptop.current.position.y = Math.sin(scrollY * 0.002) * 0.5;
//     }
//   }, [scrollY]);

//   // Check if nodes and geometry exist before rendering
//   if (!nodes || !nodes.Laptop || !nodes.Screen) {
//     console.log("Model nodes not ready yet");
//     return null;
//   }

//   return (
//     <group ref={laptop} position={[0, 0, 0]} scale={1.5}>
//       {nodes.Laptop && nodes.Laptop.geometry && (
//         <mesh
//           geometry={nodes.Laptop.geometry}
//           material={materials.LaptopMaterial}
//           castShadow
//           receiveShadow
//         />
//       )}
//       {nodes.Screen && nodes.Screen.geometry && (
//         <mesh
//           geometry={nodes.Screen.geometry}
//           position={[0, 0.05, 0]}
//         >
//           <meshStandardMaterial
//             emissive="#6e8efb"
//             emissiveIntensity={0.5}
//             roughness={0.2}
//             metalness={0.8}
//           />
//         </mesh>
//       )}
//     </group>
//   );
// }




// function Scene({ scrollY }) {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1} castShadow />
//       <Suspense fallback={<Html center><div className="loading-model">Loading 3D Model...</div></Html>}>
//         <FloatingLaptop scrollY={scrollY} />
//         <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
//       </Suspense>
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.5}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 3}
//       />
//     </>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [currentSection, setCurrentSection] = useState('home');
//   const [scrollY, setScrollY] = useState(0);
  
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3500);
    
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
      
//       const sections = ['home', 'about', 'projects', 'skills', 'contact'];
//       const scrollPosition = window.scrollY + 100;
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (!element) continue;
        
//         const offsetTop = element.offsetTop;
//         const offsetHeight = element.offsetHeight;
        
//         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//           setCurrentSection(section);
//           break;
//         }
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   if (loading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <div className="app">
//       <div className="canvas-container">
//         <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
//           <Scene scrollY={scrollY} />
//         </Canvas>
//       </div>
      
//       <div className="content">
//         <Navbar currentSection={currentSection} />
        
//         <main>
//           <section id="home" className="hero-section">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="hero-content"
//             >
//               <h1>John Doe</h1>
//               <h2>Full Stack Developer</h2>
//               <p>Crafting digital experiences with code and creativity</p>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="cta-button"
//                 onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
//               >
//                 Get In Touch
//               </motion.button>
//             </motion.div>
//           </section>
          
//           <AboutSection />
//           <ProjectsSection />
//           <SkillsSection />
//           <ContactSection />
//         </main>
        
//         <footer>
//           <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default App;







import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import LoadingScreen from './components/LoadingScreen';
import './App.css';
import { TypeAnimation } from 'react-type-animation'

// Preload the model
useGLTF.preload('/models/laptop.glb');

function FloatingLaptop({ scrollY }) {
  const laptop = useRef();
  const { scene, error } = useGLTF('/models/laptop.glb');

  useEffect(() => {
    if (error) console.error("Error loading model:", error);
  }, [error]);

  useEffect(() => {
    if (laptop.current) {
      laptop.current.rotation.y = scrollY * 0.01;
      laptop.current.position.y = Math.sin(scrollY * 0.002) * 0.5;
    }
  }, [scrollY]);

  if (error) return null;

  return (
    <primitive 
      ref={laptop} 
      object={scene} 
      position={[0, 0, 0]} 
      scale={1.5} 
      castShadow 
      receiveShadow
    />
  );
}

function Scene({ scrollY }) {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Suspense fallback={<Html center><div className="loading-model">Loading 3D Model...</div></Html>}>
        <FloatingLaptop scrollY={scrollY} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      <div className="canvas-container">
        <Canvas 
          shadows 
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true }}
        >
          <Scene scrollY={scrollY} />
        </Canvas>
      </div>

      <div className="content">
        <Navbar currentSection={currentSection} />

        <main>
          <section id="home" className="hero-section">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1>Baranidharan</h1>
              {/* <h2>Full Stack Developer</h2>
              <p>Crafting digital experiences with code and creativity</p> */}
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="type-animation"
                >
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      1500,
                      'UI/UX Enthusiast',
                      1500,
                      'Creative Coder',
                      1500,
                      'Problem Solver',
                      1500,
                      'Crafting digital experiences with code and creativity',
                      1500
                    ]}
                    wrapper="h2"
                    cursor={true}
                    repeat={Infinity}
                    speed={10}
                    deletionSpeed={70}
                  />
                </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </section>

          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Baranidharan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;