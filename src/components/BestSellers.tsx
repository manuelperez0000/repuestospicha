import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState('Todos los productos');

  const tabs = ['Todos los productos', 'Llantas y ruedas', 'Focos', 'Rines automotrices'];

  const filteredProducts = activeTab === 'Todos los productos' 
    ? products 
    : products.filter(p => p.tag === activeTab);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">MÁS VENDIDOS</h2>
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-medium transition-colors ${activeTab === tab ? 'text-red-500' : 'text-gray-500 hover:text-gray-900'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;