import { Search, ShoppingBag, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

export default function Header() {
  const { cart, getSubtotal } = useCartStore();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-black tracking-tighter uppercase">Zalando</Link>

        <nav className="hidden md:flex gap-8 font-bold text-sm uppercase">
          <Link to="/shop?cat=Femme" className="hover:underline">Femme</Link>
          <Link to="/shop?cat=Homme" className="hover:underline">Homme</Link>
          <Link to="/shop?cat=Enfant" className="hover:underline">Enfant</Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="relative group">
            <Link to="/login"><User className="w-6 h-6 cursor-pointer" /></Link>
          </div>
          <Link to="/wishlist"><Heart className="w-6 h-6" /></Link>
          
          {/* Mini Panier au survol */}
          <div className="relative group py-4">
            <Link to="/cart" className="relative">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
            </Link>

            {/* Fenêtre volante du panier */}
            {cart.length > 0 && (
              <div className="absolute right-0 top-full w-80 bg-white border shadow-xl p-4 hidden group-hover:block z-50">
                <p className="font-bold text-center border-b pb-2 mb-4 uppercase text-xs">Mon panier</p>
                <div className="max-h-60 overflow-y-auto space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-3 text-sm">
                      <img src={item.image} className="w-12 h-16 object-cover" alt="" />
                      <div className="flex-1">
                        <p className="font-bold leading-tight">{item.brand}</p>
                        <p className="text-gray-500 text-xs truncate w-40">{item.name}</p>
                        <p className="font-bold mt-1">{item.price.toFixed(2)} €</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4 space-y-3">
                  <div className="flex justify-between font-bold"><span>Total</span><span>{getSubtotal()} €</span></div>
                  <Link to="/cart" className="block w-full bg-black text-white text-center py-3 font-bold text-sm uppercase">Mon panier</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}