import React from 'react';
import { GraduationCapIcon } from './Icons';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
}

const Education: React.FC = () => {
  const educationHistory: EducationItem[] = [
    {
      degree: "Master's in Computer Applications (MCA)",
      institution: "Erode Sengunthar Engineering College",
      location: "Erode, Tamil Nadu",
      year: "2016",
      description: "Completed Master's degree in Computer Applications with focus on programming and application development."
    },
    // Add more education entries if available
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications in Computer Applications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationHistory.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4 md:mb-0 mr-0 md:mr-6">
                  <GraduationCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.degree}</h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">{item.institution}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {item.location} | {item.year}
                  </div>
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;