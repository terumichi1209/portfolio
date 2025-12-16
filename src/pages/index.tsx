import React from 'react';
import { GetStaticProps } from 'next';
import SkillsSection from "@/components/SkillsSection";
import Header from "@/components/Header";
import { portfolioData } from "@/data/portfolioData";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ArticlesSection from "@/components/ArticlesSection";
import ProjectsSection from "@/components/ProjectsSection";
import { ArticleItem } from "@/types/portfolio";
import { getArticles } from "@/lib/qiitaApi";

interface HomePageProps {
  articles: ArticleItem[];
}

const HomePage: React.FC<HomePageProps> = ({ articles }) => {
  return (
    <div className="font-inter antialiased text-gray-800">
      <Header name="Portfolio" />
      <HeroSection />
      <SkillsSection skills={portfolioData.skills} />
      <ProjectsSection projects={portfolioData.projects} />
      <ArticlesSection articles={articles} />
      <ContactSection />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const articles = await getArticles();
  return { props: { articles } };
};

export default HomePage;
