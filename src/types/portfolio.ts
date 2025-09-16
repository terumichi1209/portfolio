export interface SkillItem {
    name: string;
    description: string;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    articleUrl?: string;
}

export interface ArticleItem {
    title: string;
    url: string;
    createdAt: string;
}

export interface ContactInfo {
    email: string;
    github: string;
}

export interface PortfolioData {
    name: string;
    title: string;
    about: string;
    skills: SkillCategory[];
    projects: ProjectItem[];
    articles: ArticleItem[];
    contact: ContactInfo;
}
