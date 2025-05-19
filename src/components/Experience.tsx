// import React from 'react';
// import { BriefcaseIcon } from './Icons';

// interface ExperienceItem {
//   title: string;
//   company: string;
//   period: string;
//   description: string;
//   current?: boolean;
// }

// const Experience: React.FC = () => {
//   const experiences: ExperienceItem[] = [
//     {
//       title: 'MERN Stack Developer Intern',
//       company: 'WHY Global Services',
//       period: '2025 - Present',
//       description: 'Working on full stack development projects using JavaScript, React, Node.js, and MongoDB. Gaining hands-on experience in real-time application development while strengthening practical skills in modern web technologies.',
//       current: false,
//     },
//     // Add more experiences if available
//   ];

//   return (
//     <section id="experience" className="py-20 bg-white dark:bg-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
//           <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
//           <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             My professional journey and work experience in the tech industry.
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
//             {/* Experience items */}
//             {experiences.map((exp, index) => (
//               <div key={index} className="relative mb-16 last:mb-0">
//                 <div className="flex flex-col md:flex-row items-center">
//                   <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1 mt-8 md:mt-0">
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
//                     <div className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</div>
//                     <div className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</div>
//                     <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
//                   </div>
                  
//                   <div className="z-10 order-1 md:order-2">
//                     <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${
//                       exp.current 
//                         ? 'bg-blue-600 dark:bg-blue-500 border-blue-100 dark:border-blue-900'
//                         : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
//                     }`}>
//                       <BriefcaseIcon className={`w-4 h-4 ${exp.current ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
//                     </div>
//                   </div>
                  
//                   <div className="flex-1 md:pl-8 order-3 mt-8 md:mt-0">
//                     <div className="md:hidden">
//                       <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
//                       <div className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</div>
//                       <div className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</div>
//                       <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* If no professional experience yet */}
//           {experiences.length === 0 && (
//             <div className="text-center py-10 px-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
//               <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Starting My Professional Journey</h3>
//               <p className="text-gray-700 dark:text-gray-300">
//                 After taking a career break for personal reasons, I am now actively pursuing opportunities 
//                 in full stack development to apply my skills and knowledge in practical settings.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



import React from 'react';
import { BriefcaseIcon } from './Icons';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'MERN Stack Developer Intern',
      company: 'WHY Global Services',
      period: '2025 - Present',
      description:
        'Working on full stack development projects using JavaScript, React, Node.js, and MongoDB. Gaining hands-on experience in real-time application development while strengthening practical skills in modern web technologies.',
      current: true,
    },
    // Add more experience items here if needed
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and work experience in the tech industry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1 mt-8 md:mt-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </div>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>

                  <div className="z-10 order-1 md:order-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                        exp.current
                          ? 'bg-blue-600 dark:bg-blue-500 border-blue-100 dark:border-blue-900'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <BriefcaseIcon
                        className={`w-4 h-4 ${
                          exp.current
                            ? 'text-white'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Optional: If no experiences */}
            {experiences.length === 0 && (
              <div className="text-center py-10 px-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Starting My Professional Journey
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  After taking a career break for personal reasons, I am now actively pursuing opportunities
                  in full stack development to apply my skills and knowledge in practical settings.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
