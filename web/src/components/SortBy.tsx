'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const SortBy = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    const currentFilter = searchParams.get('sortBy') ?? 'all';

    const handleClick = (filter: string) => () => {
        const params = new URLSearchParams(searchParams);
        
        if (filter === 'all') {
            params.delete('sortBy');
        } else {
            params.set('sortBy', filter);
        }
        
        const query = params.toString() ? `?${params.toString()}` : '';
        router.push(`${pathname}${query}`);
    }

    const sortOptions = [
        { value: 'all', label: 'Todos' },
        { value: 'name:asc', label: 'Nombre A-Z' },
        { value: 'name:desc', label: 'Nombre Z-A' },
        { value: 'price:asc', label: 'Precio menor' },
        { value: 'price:desc', label: 'Precio mayor' },
        { value: 'createdAt:desc', label: 'Más recientes' },
        { value: 'createdAt:asc', label: 'Más antiguos' }
    ];

    return (
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            {sortOptions.map((option) => (
                <button 
                    key={option.value}
                    type="button" 
                    onClick={handleClick(option.value)} 
                    className={`inline-flex items-center px-5 py-2.5 me-3 mb-3 text-sm font-medium 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border transition-colors
                    ${currentFilter === option.value ? 
                        'pointer-events-none bg-blue-600 text-white border-blue-600' :
                        'text-gray-900 bg-white border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                    }`}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}