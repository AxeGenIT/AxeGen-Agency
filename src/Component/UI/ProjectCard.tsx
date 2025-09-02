import { MoveRight } from "lucide-react";
import Image from "next/image";

 

const ProjectCard = () => {
    return (
                <div className='flex items-center justify-around'>
          <div className='p-4 rounded-2xl   bg-white  md:w-[45%] w-full'>
            <Image className='' src="/project/Jobify.png" width={500} height={400} alt=''/>
          </div>
          <div className='md:w-[45%] w-full space-y-5'>
            <div className='space-x-2'>
              <span className=' bg-[#13CAFF] py-2 px-4 rounded-full font-semibold text-sm'>Job Finder</span>
              <span className='bg-[#D733E3] py-2 px-4 rounded-full font-semibold text-sm '>Web development</span>
            </div>
            <div className='space-y-2'>
              <h1 className='text-4xl   font-bold text-gray-900"'>Jobify</h1>
              <p className='text-lg text-[#c7d2fe] leading-relaxed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae voluptatem enim at! Placeat, aperiam aut nam magni ut eveniet.</p>
            </div>
            <div className='space-y-2'>
              <h1 className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Tech Stack</h1>
              <div>
                <span className='px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-default'>Next JS</span>
              </div>
            </div>
            <div className='space-x-2'>
              <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-linear-to-r from-[#6366f1] to-[#818cf8] hover:bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'>View a Case Study <MoveRight /></button>
              <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-11 px-6 py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl bg-transparent'>Live Preview</button>
            </div>
          </div>
        </div>
    );
};

export default ProjectCard;