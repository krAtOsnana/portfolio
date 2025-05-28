import React from 'react';

const Technologies = () => {
  const tech = [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    "Express",
    'Tailwind CSS',
    'Socket.io',
    'HTML5/CSS3',
    'Postgres',
    'Docker',
    'C++'
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-md text-sm font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
