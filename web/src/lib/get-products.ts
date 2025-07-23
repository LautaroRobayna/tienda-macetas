import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export function getProducts(
    { categoryId, sort, pageSize, page }:
    { categoryId: string, sort: string | string[] | undefined, pageSize: number, page: string | string[] | undefined }
) {
    let url = `products?filters[product_category][slug][$contains]=${categoryId}&populate=images`

    if (page) url += `&pagination[page]=${page}`
    if (pageSize) url += `&pagination[pageSize]=${pageSize}`
    if (sort) url += `&sort=${sort}`

    return query(url)
    .then(res => {
        const { data,meta } = res

        const products = data.map(product => {
            const { name, slug, description, price, images: rawImages } = product
            const image = `${STRAPI_HOST}/${rawImages[0].url}`
            return { name, slug, description, price, image }
        })

        return { products, pagination: meta.pagination }
    })
}