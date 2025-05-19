import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm Lakshmanan, a passionate MERN Stack Developer with a Master's degree in Computer Applications.
              After completing my studies in 2016, I took a career break for personal reasons. Recently, I've restarted
              my professional journey and am currently working as an intern at WHY Global Services.
            </p>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              In my current role, I'm gaining valuable hands-on experience in full stack development,
              working with JavaScript, React, Node.js, and MongoDB. I'm actively involved in developing
              real-time applications, which is helping me strengthen my practical skills and understanding
              of modern web development.
            </p>
            
            <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              I consider myself a quick learner, dedicated, and passionate about technology. My goal is to
              grow as a developer and contribute to meaningful projects that solve real-world problems. I'm also
              open to part-time opportunities in Tamil news reading, as I have strong communication skills in Tamil.
            </p>
            
            <div className="flex flex-wrap gap-y-4 mt-8">
              <div className="w-full md:w-1/2 flex items-start">
                <MapPin className="mr-2 flex-shrink-0 text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">Kallakurichi, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex items-start">
                <Calendar className="mr-2 flex-shrink-0 text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Experience</h3>
                  <p className="text-gray-700 dark:text-gray-300">Currently MERN Stack Intern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;