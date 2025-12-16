import React from 'react';
import { ArticleItem } from '@/types/portfolio';
import { formatDate } from '@/lib/qiitaApi';

interface ArticlesSectionProps {
    articles: ArticleItem[];
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ articles }) => {
    return (
        <section id="articles" className="py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-8">
                    Articles (Qiita)
                </h3>
                {articles.length === 0 ? (
                    <p className="text-lg text-gray-600">No articles found.</p>
                ) : (
                    <ul className="list-none p-0 m-0 bg-white rounded-xl shadow-md divide-y divide-gray-200">
                        {articles.map((article) => (
                            <li key={article.url} className="px-6 py-4">
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 block text-left"
                                >
                                    {article.title}
                                </a>
                                <p className="text-sm text-gray-500 mt-1 text-right">Created {formatDate(article.createdAt)}</p>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="mt-8">
                    <a
                        href="https://qiita.com/terumichi1209"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
                    >
                        View All Articles on Qiita
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;
