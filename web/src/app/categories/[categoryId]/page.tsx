import { SortBy } from '@/components/SortBy';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';
import { getProducts } from '@/lib/get-products';


const PAGE_SIZE = 10;


export default async function CategoryPage(
    { params, searchParams }: {
        params: { categoryId: string}, searchParams: { [key: string]: string | string[] | undefined }
    }) {
    const { categoryId } = params;
    const { page } = searchParams;
    const { pagination, products } = await getProducts({ categoryId, pageSize: PAGE_SIZE, page });

    return (
        <section className="bg-gray-50 py-8 antialiased md:py-16 min-h-screen">
            <div className="container mx-auto">
                <Link href="/">
                    ← Volver al inicio
                </Link>

                {products.length > 0 && <SortBy />}

                <div className="grid grid-cols-3 gap-4 mt-6">
                    {
                        products.length === 0 && (
                            <div className="w-full max-w-sm flex">
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                        No se encontraron productos en esta categoría
                                    </h5>
                                </div>
                            </div>
                        )
                    }

                    {products.length > 0 && products.map(product => (
                        <div key={product.slug} className="w-full max-w-sm bg-white border border-gray-200">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={product.image} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                        {product.name}
                                    </h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}