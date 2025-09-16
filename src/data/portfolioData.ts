import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
    name: 'Terumichi Ishibashi',
    title: 'Web Engineer',
    about: ``,
    skills: [
        {
            category: 'PHP',
            items: [
                { name: 'Laravel', description: '' },
                { name: 'CakePHP', description: '' },
            ],
        },
        {
            category: 'JavaScript',
            items: [
                { name: 'jQuery', description: '' },
                { name: 'Vue.js', description: '' },
                { name: 'React', description: '' },
                { name: 'TypeScript', description: '' },
            ],
        },
        {
            category: 'Scala',
            items: [
                { name: 'Play', description: '' },
            ],
        },
        {
            category: 'Go',
            items: [
                { name: 'Echo', description: '' },
            ],
        },
        {
            category: 'Database',
            items: [
                { name: 'MySQL', description: '' },
                { name: 'PostgreSQL', description: '' },
            ],
        },
        {
            category: 'Cloud',
            items: [
                { name: 'AWS', description: '各種クラウドサービス利用 (EC2, S3, RDS, Lambdaなど)' },
                { name: 'GCP', description: '' },
            ],
        },
        {
            category: 'Infrastructure',
            items: [
                { name: 'Docker', description: '' },
                { name: 'Nginx', description: '' },
                { name: 'Apache', description: '' },
            ],
        },
    ],
    articles: [
        {
            title: "Laravelで実践DDD",
            url: "https://qiita.com/terumichi1209/items/5e5bd53491986c763401",
            createdAt: "2019/06/30",
        },
        {
            title: "CakePHP 環境別設定ファイルの切り替えについて",
            url: "https://qiita.com/terumichi1209/items/cbb207da919a34fdea89",
            createdAt: "2015/03/18",
        },
        {
            title: "Auth0を使ってSSOの流れを確認してみた",
            url: "https://qiita.com/terumichi1209/items/c211799dec9c9ec52e13",
            createdAt: "2022/12/08",
        },
        {
            title: "Vue.jsで麻雀点数計算",
            url: "https://qiita.com/terumichi1209/items/9b45d3b0cfc6d95f47b2",
            createdAt: "2018/12/06",
        },
        {
            title: "ユースケース駆動開発実践ガイドメモ",
            url: "https://qiita.com/terumichi1209/items/dce83261288b716b549b",
            createdAt: "2018/12/01",
        },
    ],
    projects: [
        {
            title: 'portfolio',
            description: '',
            technologies: ['Next.js', 'TypeScript'],
            imageUrl: 'https://placehold.co/600x400/E0E0E0/333333?text=Portfolio',
            githubUrl: 'https://github.com/terumichi1209/portfolio',
        },
    ],
    contact: {
        email: 'terumichi1209@gmail.com',
        github: 'https://github.com/terumichi1209',
    },
};
