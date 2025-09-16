import React from 'react';
import { SkillCategory } from '@/types/portfolio';

interface SkillsSectionProps {
    skills: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {

    return (
        <section id="skills" className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <h3 className="text-4xl font-bold text-gray-900 mb-12">
                    Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                                {skillCategory.category}
                            </h4>
                            <ul className="list-none p-0 m-0 flex-grow">
                                {skillCategory.items && skillCategory.items.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="flex items-start mb-2 last:mb-0">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 mr-2"></span>
                                        <div>
                                            <p className="text-lg font-medium text-gray-700">{skill.name}</p>
                                            <p className="text-sm text-gray-500">{skill.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
