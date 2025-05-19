import React from 'react';

interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'others';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML', level: 90, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    { name: 'Bootstrap 5.3', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'JavaScript', level: 80, category: 'frontend' },
    { name: 'React.js', level: 75, category: 'frontend' },
    { name: 'Node.js', level: 70, category: 'backend' },
    { name: 'Express.js', level: 70, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'database' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels gained through education and practical experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map(category => {
            const categorySkills = skills.filter(skill => skill.category === category.id);
            if (categorySkills.length === 0) return null;
            
            return (
              <div key={category.id} className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;