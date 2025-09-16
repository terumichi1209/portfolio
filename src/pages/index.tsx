'use client';

import React from 'react';
import SkillsSection from "@/components/SkillsSection";
import Header from "@/components/Header";
import { portfolioData } from "@/data/portfolioData";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ArticlesSection from "@/components/ArticlesSection";
import ProjectsSection from "@/components/ProjectsSection";

const HomePage: React.FC = () => {
  return (
      <div className="font-inter antialiased text-gray-800">
        <Header name={'Portfolio'}></Header>
        <HeroSection></HeroSection>
        <SkillsSection skills={
            portfolioData.skills
        }></SkillsSection>
        <ProjectsSection projects={portfolioData.projects}></ProjectsSection>
        <ArticlesSection></ArticlesSection>
        <ContactSection></ContactSection>
      </div>
  );
};

export default HomePage;
