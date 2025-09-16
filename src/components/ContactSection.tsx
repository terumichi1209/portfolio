import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-8">
                    Contact
                </h3>
                <div className="flex justify-center space-x-6 mt-8">
                    <a
                        href={`mailto:terumichi1209@gmail.com`}
                        aria-label="email"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                    </a>
                    <a
                        href="https://github.com/terumichi1209"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="github"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.5.25-1 1-4-1-5.5 0 0-1 0-3 1.5-2.67-1-6-1-8 0C6 2 5 2 5 2c-2 1.5-1 4.5-1 5.5-.5.98-.75 2.2-.78 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                    </a>
                </div>
                <p className="text-sm text-gray-500 mt-12">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
