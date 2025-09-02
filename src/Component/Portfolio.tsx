"use client";
import { motion, useInView } from "framer-motion";
import { MoveRight } from "lucide-react";
 
import { useRef } from "react";
import ProjectCard from "./UI/ProjectCard";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
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
        stiffness: 100,
      },
    },
  };

 // Define the structure of a Project
interface Project {
  category: string;
  field: string;
  projectName: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
}

// Create the projects array with type safety
const projects: Project[] = [
  {
    category: "Job Finder",
    field: "Web Application",
    projectName: "Jobify",
    description:
      "Jobify is a comprehensive job portal streamlining job search and recruitment with advanced tools for job seekers and employers.",
    stack: [
      "React.js",
      "JavaScript",
      "Firebase",
      "Stripe",
      "Express.js",
      "Node.js",
      "MongoDB"
    ],
    github: "",
    live: "https://jobify-13db1.web.app/"
  },
  {
    category: "Education",
    field: "Web Application",
    projectName: "EduCoder",
    description:
      "EduCoder is an e-learning platform that connects students and instructors, providing tools for effective course management.",
    stack: [
      "Next.js",
      "Redux",
      "TypeScript",
      "TailwindCSS",
      "Cloudinary",
      "Nodemailer",
      "Mongoose",
      "Express.js",
      "MongoDB"
    ],
    github: "https://github.com/mdimamhosen/EduCoder",
    live: "https://edu-coder.vercel.app/"
  },
  {
    category: "Review",
    field: "Web Application",
    projectName: "ReviewHub",
    description:
      "ReviewHub is a product review platform that enables users to explore and contribute premium and interactive reviews.",
    stack: [
      "Next.js",
      "Redux",
      "TypeScript",
      "TailwindCSS",
      "Cloudinary",
      "Nodemailer",
      "Mongoose",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "SSLCOMMERZ",
      "Framer Motion"
    ],
    github: "https://github.com/md-maruf-billa/ReviewHub-Client",
    live: "https://assignment-9-client-iota.vercel.app/"
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

        <div className="">
           {
            projects.map((index,project) => {
              <ProjectCard key={index} project={project}/>
            })
           }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
