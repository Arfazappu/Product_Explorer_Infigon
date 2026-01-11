'use client'
import Image from "next/image";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/lib/FavoritesContext"; 

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <div onClick={handleClick} className="bg-white overflow-hidden cursor-pointer group">
      <div className="relative w-full aspect-3/4 bg-gray-100 overflow-hidden flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={400}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          priority={false}
        />
        
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform z-10"
        >
          <svg 
            className={`w-4 h-4 transition-colors ${
              isProductFavorite ? 'fill-red-500 text-red-500' : 'fill-none text-gray-600'
            }`}
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>

        {product.rating && (
          <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded flex items-center gap-1 shadow-sm">
            <span className="text-xs font-semibold text-gray-800">{product.rating.rate}</span>
            <svg className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className="text-xs text-gray-500">({product.rating.count})</span>
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="text-xs font-semibold text-gray-900 uppercase mb-1 truncate">
          {product.category}
        </div>
        
        <h3 className="text-sm text-gray-600 mb-2 line-clamp-2 h-10">
          {product.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900">
            ₹{Math.round(product.price * 90.27)}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ₹{Math.round(product.price * 90.27 * 1.4)}
          </span>
          <span className="text-xs font-semibold text-orange-500">
            (30% OFF)
          </span>
        </div>
      </div>
    </div>
  );
}