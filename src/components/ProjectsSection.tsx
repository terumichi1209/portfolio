import React from 'react';
import { ProjectItem } from '@/types/portfolio';

interface ProjectsSectionProps {
    projects: ProjectItem[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    if (!projects || projects.length === 0) {
        console.error("Projects data is undefined or empty in ProjectsSection.");
        return null;
    }
    return (
        <section id="codes" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-12">
                    Codes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {project.title}
                                </h4>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <p className="text-gray-800 font-semibold mb-4">
                                    {project.technologies.join(', ')}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
                                        >
                                            Demo
                                        </a>
                                    )}
                                    {project.articleUrl && (
                                        <a
                                            href={project.articleUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
                                        >
                                            Article
                                        </a>
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

export default ProjectsSection;
