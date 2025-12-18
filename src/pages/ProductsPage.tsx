import { useState, useMemo } from 'react';
import { List, Grid2X2, Grid3X3 } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import CartModal from '../components/CartModal';
import Footer from '../components/Footer';

const ProductsPage = () => {
    const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high'>('popular');
    const [gridLayout, setGridLayout] = useState<'1' | '3' | '4'>('4');

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Apply sorting
        switch (sortBy) {
            case 'popular':
                filtered = [...filtered].sort((a, b) => b.rating - a.rating);
                break;
            case 'price-low':
                filtered = [...filtered].sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered = [...filtered].sort((a, b) => b.price - a.price);
                break;
        }

        return filtered;
    }, [sortBy]);

    const getGridClasses = () => {
        switch (gridLayout) {
            case '1':
                return 'grid-cols-1';
            case '3':
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
            case '4':
                return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
            default:
                return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
        }
    };

    return (
        <>
            <Header />
            <CartModal />
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">NUESTROS PRODUCTOS</h1>

                    {/* Sorting and Grid Controls */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'popular' | 'price-low' | 'price-high')}
                                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <option value="popular">Más popular</option>
                                <option value="price-low">Precio menor</option>
                                <option value="price-high">Precio mayor</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">Vista:</span>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setGridLayout('1')}
                                    className={`px-3 py-1 border rounded-md text-sm transition-colors ${gridLayout === '1'
                                        ? 'bg-red-500 text-white border-red-500'
                                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <List size={16} />
                                </button>
                                <button
                                    onClick={() => setGridLayout('3')}
                                    className={`px-3 py-1 border rounded-md text-sm transition-colors ${gridLayout === '3'
                                        ? 'bg-red-500 text-white border-red-500'
                                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <Grid2X2 size={16} />
                                </button>
                                <button
                                    onClick={() => setGridLayout('4')}
                                    className={`px-3 py-1 border rounded-md text-sm transition-colors ${gridLayout === '4'
                                        ? 'bg-red-500 text-white border-red-500'
                                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <Grid3X3 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`grid ${getGridClasses()} gap-8`}>
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductsPage;
