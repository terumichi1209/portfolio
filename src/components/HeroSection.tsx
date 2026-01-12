import React from 'react';

interface HeroSectionProps {
    name: string;
    occupation: string;
    avatarUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, occupation, avatarUrl }) => {
    return (
        <section className="flex items-center justify-center text-center bg-gray-50 py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <img
                    src={avatarUrl}
                    alt="Profile Photo"
                    className="rounded-full w-36 h-36 object-cover mx-auto mb-6 border-4 border-white shadow-lg"
                />
                <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                    {name}
                </h2>
                <p className="text-2xl text-gray-600 mb-8">
                    {occupation}
                </p>
            </div>
        </section>
    );
};

export default HeroSection;