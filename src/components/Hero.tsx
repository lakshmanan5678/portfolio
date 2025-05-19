import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute left-1/4 bottom-1/4 w-1/4 h-1/4 bg-indigo-300 dark:bg-indigo-800 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                MERN Full Stack Developer
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Lakshmanan</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                A passionate MERN Stack Developer with strong foundation in web technologies. 
                Currently working as an intern at WHY Global Services, developing real-time applications 
                and expanding my skills in full stack development.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://github.com/lakshmanan5678/Lakshmanan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors"
                >
                  <GitHub size={18} className="mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/lakshmanan-venkatachalapathi-2269a2102/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-black dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Resume
                </a>
              </div>
              
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail size={18} className="mr-2" />
                <a href="mailto:lordslaxman@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  lordslaxman@gmail.com
                </a>
                <span className="mx-3">|</span>
                <Phone size={18} className="mr-2" />
                <a href="tel:+918110829769" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 8110829769
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-blue-600 dark:text-blue-400">
                LV
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;