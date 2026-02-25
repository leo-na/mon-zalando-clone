import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../services/products';
import { useCartStore } from '../store/useCartStore';
import { ShoppingBag, Filter, Search, X } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || "");
  const [category, setCategory] = useState(searchParams.get('cat') || "Tous");
  const [sortBy, setSortBy] = useState("default");
  
  const addToCart = useCartStore((state) => state.addToCart);

  // Synchronisation avec l'URL
  useEffect(() => {
    const q = searchParams.get('q') || "";
    const cat = searchParams.get('cat') || "Tous";
    setSearchTerm(q);
    setCategory(cat);
  }, [searchParams]);

  // Logique de filtrage et tri
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = category === "Tous" || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-[1600px] mx-auto px-10">
      {/* Barre de recherche style Zalando */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between border-b pb-6">
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="w-full bg-gray-100 p-3 pl-10 outline-none focus:ring-1 focus:ring-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          {searchTerm && <X className="absolute right-3 top-3.5 cursor-pointer" size={18} onClick={() => setSearchTerm("")} />}
        </div>
        
        <select 
          className="p-3 border-none bg-gray-100 outline-none text-sm font-bold uppercase"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Trier par</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar Filtres */}
        <aside className="w-full md:w-52 space-y-8">
          <div>
            <h3 className="font-black uppercase text-xs tracking-widest mb-4">Catégories</h3>
            <div className="flex flex-col gap-3">
              {["Tous", "Homme", "Femme", "Enfant"].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setCategory(cat)}
                  className={`text-left text-sm ${category === cat ? 'font-bold underline' : 'text-gray-500 hover:text-black'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grille */}
        <div className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {filteredProducts.map(product => (
              <div key={product.id} className="group relative">
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                    <img src={product.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <p className="text-[10px] font-bold uppercase text-gray-400">{product.brand}</p>
                  <h4 className="text-sm truncate">{product.name}</h4>
                  <p className="font-bold text-sm mt-1">{product.price.toFixed(2)} €</p>
                </Link>
                <button 
                  onClick={() => addToCart(product, "M")}
                  className="absolute top-2 right-2 bg-white p-2 shadow-md opacity-0 group-hover:opacity-100 transition"
                >
                  <ShoppingBag size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}