import { query } from "./strapi";

const STRAPI_HOST = process.env.STRAPI_HOST || 'http://localhost:1337';

export function getHomeInfo() {
  return query("home?populate=cover").then((res) => {
    const { title, description, cover } = res.data;
    const image = joinUrl(STRAPI_HOST, cover.url);
    return { title, description, image };
  });
}

// Helpers
function joinUrl(base: string, path: string) {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
