import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../services/products';
import { useCartStore } from '../store/useCartStore';
import { Heart, Ruler, Truck, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  const { addToCart, toggleWishlist, wishlist } = useCartStore();
  const [size, setSize] = useState("");

  if (!product) return null;
  const isFav = wishlist.some(i => i.id === product.id);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 flex flex-col md:flex-row gap-12">
      {/* Galerie d'images */}
      <div className="flex gap-4 w-full md:w-2/3">
        <div className="hidden lg:flex flex-col gap-2 w-20">
          {[1,2,3,4].map(i => <img key={i} src={product.image} className="w-full aspect-[3/4] object-cover border" alt="" />)}
        </div>
        <div className="flex-1 relative aspect-[3/4] bg-gray-50">
          <img src={product.image} className="w-full h-full object-cover" alt="" />
          <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase">Promo</span>
        </div>
      </div>

      {/* Infos & Achat */}
      <div className="w-full md:w-1/3 space-y-6">
        <h1 className="text-xl font-bold italic underline">{product.brand}</h1>
        <h2 className="text-2xl font-light leading-tight uppercase">{product.name}</h2>
        
        <div className="space-y-1">
          <p className="text-2xl font-bold text-red-600">{(product.price * 0.7).toFixed(2)} € <span className="text-gray-400 text-sm font-normal">TVA incluse</span></p>
          <p className="text-xs text-gray-500 line-through">Prix de référence: {product.price.toFixed(2)} €</p>
        </div>

        <div className="border border-gray-300">
          <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <span className="text-xs font-bold uppercase italic">Taille</span>
            <span className="text-[10px] flex items-center gap-1 cursor-pointer underline"><Ruler size={12}/> Guide des tailles</span>
          </div>
          <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full p-4 outline-none appearance-none cursor-pointer">
            <option value="">Votre taille</option>
            {['S', 'M', 'L', 'XL'].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="flex gap-2">
          <button onClick={() => size && addToCart(product, size)} className={`flex-1 py-5 font-bold uppercase transition ${size ? 'bg-black text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            Ajouter au panier
          </button>
          <button onClick={() => toggleWishlist(product)} className="p-5 border border-gray-300">
            <Heart fill={isFav ? "black" : "none"} className={isFav ? "text-black" : "text-gray-400"} />
          </button>
        </div>

        <div className="pt-6 border-t space-y-4 text-xs">
          <div className="flex items-center gap-3"><Truck size={18}/> <span>Livraison Standard gratuite (3-5 jours)</span></div>
          <div className="flex items-center gap-3"><RotateCcw size={18}/> <span>Retour gratuit sous 100 jours</span></div>
        </div>
      </div>
    </div>
  );
}