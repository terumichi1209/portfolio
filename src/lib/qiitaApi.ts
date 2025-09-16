import { format } from 'date-fns';

export interface QiitaArticleResponse {
    title: string;
    url: string;
    likes_count: number;
    created_at: string;
}

export const formatDate = (dateString: string): string => {
    return format(new Date(dateString), 'yyyy/MM/dd');
};

export const fetchQiitaArticles = async (perPage: number): Promise<QiitaArticleResponse[]> => {
    const qiitaAccessToken = process.env.NEXT_QIITA_ACCESS_TOKEN;
    if (!qiitaAccessToken) {
        console.info("Qiita Access Token is not configured. Please set NEXT_QIITA_ACCESS_TOKEN in your .env file.");
        return [];
    }

    const url = "https://qiita.com/api/v2/authenticated_user/items";
    const params = new URLSearchParams({
        page: '1',
        per_page: String(perPage),
    });

    const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${qiitaAccessToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Qiita API Error: ${response.status} - ${errorData.message || response.statusText}`);
    }

    const result: QiitaArticleResponse[] = await response.json();

    return result.sort((a, b) => b.likes_count - a.likes_count).slice(0, 5);
};
