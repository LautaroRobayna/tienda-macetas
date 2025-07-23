import { query } from "./strapi";
import { Category } from "@/types";

const STRAPI_HOST = process.env.STRAPI_HOST || 'http://localhost:1337';

export async function getCategories(): Promise<Category[]> {
    try {
        const res = await query("product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url");
        
        if (!res?.data || !Array.isArray(res.data)) {
            console.error('No data received from Strapi:', res);
            return [];
        }

        return res.data.map((category: Category) => ({
            ...category,
            image: {
                url: `${STRAPI_HOST.replace(/\/$/, '')}${category.image.url.replace(/^\//, '/')}`
            }
        }));
        
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}