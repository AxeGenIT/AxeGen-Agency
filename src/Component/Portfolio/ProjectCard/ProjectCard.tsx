import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "../../../../types/project";


interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-8 md:gap-12`}>
      {/* Image Container */}
      <div className="p-4 rounded-2xl bg-white md:w-[45%] w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            src={project.image}
            width={600}
            height={400}
            alt={project.projectName}
          />
        </div>
      </div>
      
      {/* Content Container */}
      <div className="md:w-[45%] w-full space-y-6">
        <div className="space-x-2">
          <span className="bg-[#13CAFF] py-2 px-4 rounded-full font-semibold text-sm text-white">
            {project.category}
          </span>
          <span className="bg-[#D733E3] py-2 px-4 rounded-full font-semibold text-sm text-white">
            {project.field}
          </span>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {project.projectName}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 bg-slate-800 text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github size={18} />
              Code
            </a>
          )}
          
          {project.live && (
            <a 
              href={project.live} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-6 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl bg-transparent transition-all duration-300"
            >
              Live Preview
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;