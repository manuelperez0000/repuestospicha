import { Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    category: string;
    name: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white text-gray-800 rounded-lg overflow-hidden group shadow-md">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm">{product.category}</p>
        <h3 className="font-semibold mt-1 truncate text-gray-800">{product.name}</h3>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < product.rating ? 'currentColor' : 'none'} />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">{product.reviews} {product.reviews === 1 ? 'reseña' : 'reseñas'}</span>
        </div>
        <p className="text-red-500 font-bold text-lg mt-2">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;