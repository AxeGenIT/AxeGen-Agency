'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio = () => {const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
    return (
        <div ref={ref} className='min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative flex justify-center pt-16'>
            <div className='max-w-7xl mx-auto"'>
                <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Meet Our <span className="text-cyan-400">Expert Team</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            The talented professionals behind our success
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"
            variants={itemVariants}
          />
        </motion.div>
        <div>
          
        </div>

            </div>
        </div>
    );
};

export default Portfolio;