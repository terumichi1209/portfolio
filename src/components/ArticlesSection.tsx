'use client';

import React, { useState, useEffect } from 'react';
import { ArticleItem } from '@/types/portfolio';
import { fetchQiitaArticles, formatDate } from '@/lib/qiitaApi';
import {portfolioData} from "@/data/portfolioData";

const ArticlesSection: React.FC = () => {
    const [qiitaArticles, setQiitaArticles] = useState<ArticleItem[]>(portfolioData.articles);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const loadArticles = async () => {
            setLoading(true);
            try {
                const fetchedArticles = await fetchQiitaArticles(100);

                const mappedArticles: ArticleItem[] = fetchedArticles.map(item => ({
                    title: item.title,
                    url: item.url,
                    createdAt: item.created_at,
                }));

                setQiitaArticles(mappedArticles);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.error("Failed to fetch Qiita articles:", err.message);
                } else {
                    console.error("Failed to fetch Qiita articles:", err);
                }
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    return (
        <section id="articles" className="py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-8">
                    Articles (Qiita)
                </h3>
                {loading && <p className="text-lg text-gray-600">Loading articles...</p>}
                {!loading && qiitaArticles.length === 0 && (
                    <p className="text-lg text-gray-600">No articles found.</p>
                )}
                {!loading && qiitaArticles.length > 0 && (
                    <ul className="list-none p-0 m-0 bg-white rounded-xl shadow-md divide-y divide-gray-200">
                        {qiitaArticles.map((article, index) => (
                            <li key={index} className="px-6 py-4">
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
