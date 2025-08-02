// app/components/TeamMembers.tsx
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TeamMembers = () => {
  const ref = useRef(null);
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

  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      position: "Lead Developer",
      description: "Full-stack developer with 8+ years of experience in building scalable web applications."
    },
    {
      id: 2,
      name: "Taylor Chen",
      position: "UX/UI Designer",
      description: "Creative designer focused on creating intuitive and beautiful user experiences."
    },
    {
      id: 3,
      name: "Jordan Williams",
      position: "Project Manager",
      description: "Ensures projects are delivered on time and exceed client expectations."
    },
    {
      id: 4,
      name: "Casey Rodriguez",
      position: "DevOps Engineer",
      description: "Infrastructure expert focused on seamless deployments and system reliability."
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-slate-900 to-indigo-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-8 shadow-2xl flex flex-col items-center text-center"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-full mb-6">
                <div className="bg-slate-800 p-1 rounded-full">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <div className="text-cyan-400 font-medium mb-4">{member.position}</div>
              <p className="text-slate-300 mb-6">{member.description}</p>
              
              <div className="flex space-x-4 mt-auto">
                <button className="bg-slate-700/50 hover:bg-slate-700 rounded-full p-2 transition-all">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
                <button className="bg-slate-700/50 hover:bg-slate-700 rounded-full p-2 transition-all">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="bg-slate-700/50 hover:bg-slate-700 rounded-full p-2 transition-all">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;