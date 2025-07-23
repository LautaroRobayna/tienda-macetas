export interface StrapiImage {
    url: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: StrapiImage;
}