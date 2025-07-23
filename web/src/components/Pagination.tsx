import Link from 'next/link';

export function Pagination(
    { page, pageSize, pageCount, total }:
        { page: number, pageSize: number, pageCount: number, total: number }
) {
    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const prevPageUrl = isFirstPage ? '#' : `?page=${prevPage}`;
    const nextPageUrl = isLastPage ? '#' : `?page=${nextPage}`;

    return (
        <div className="flex flex-col items-center mt-8">
            <span className="text-sm text-gray-600 mb-2">
                Mostrando {pageSize} de{" "}
                <span className="font-semibold text-gray-900">
                    {(page - 1) * pageSize + 1}
                </span>{" "}
                a{" "}
                <span className="font-semibold text-gray-900">
                    {Math.min(page * pageSize, total)}
                </span>{" "}
                de{" "}
                <span className="font-semibold text-gray-900">
                    {total}
                </span>{" "}
                resultados
            </span>

            <div className="inline-flex mt-2 xs:mt-0">
                <Link
                    href={prevPageUrl}
                    className={`${
                        isFirstPage ? "pointer-events-none opacity-50" : ""
                    } flex items-center justify-center px-3 h-8 text-sm font-medium
                    text-white bg-gray-800 rounded-l hover:bg-gray-900`}>
                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"
                            d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Anterior
                </Link>
                <Link
                    href={nextPageUrl} 
                    className={`${
                        isLastPage ? "pointer-events-none opacity-50" : ""
                    } flex items-center justify-center px-3 h-8 text-sm font-medium text-white
                    bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900`}>
                    Siguiente
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}