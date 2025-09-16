import React from 'react';

interface HeaderProps {
    name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">
                    {name}
                </h1>
                <div className="hidden md:flex space-x-4">
                    <a href="#skills" className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors duration-200">Skills</a>
                    <a href="#codes" className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors duration-200">Codes</a>
                    <a href="#articles" className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors duration-200">Articles</a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors duration-200">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
