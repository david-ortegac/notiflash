export interface News {
    id: number;
    subject: string;
    title: string;
    content: string;
    author: string;
    image_url: string;
    category: string;
    source: string;
    created_at: Date;
    updated_at: Date;
}