import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useCartStore();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Ta liste de favoris est vide ❤️</h2>
        <Link to="/shop" className="text-orange-600 font-bold underline">Découvrir des articles</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-10 uppercase italic">Mes Articles Préférés</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {wishlist.map((product) => (
          <div key={product.id} className="group relative border border-gray-100 p-2">
            {/* Bouton pour retirer des favoris */}
            <button 
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md hover:text-red-500"
            >
              <X size={18} />
            </button>

            <Link to={`/product/${product.id}`}>
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold text-gray-400 uppercase">{product.brand}</p>
                <h3 className="text-sm font-medium truncate">{product.name}</h3>
                <p className="font-bold mt-1">{product.price.toFixed(2)} €</p>
              </div>
            </Link>

            <button 
              onClick={() => addToCart(product)}
              className="w-full mt-4 bg-black text-white py-2 text-xs font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition"
            >
              <ShoppingBag size={14} /> AJOUTER AU PANIER
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}