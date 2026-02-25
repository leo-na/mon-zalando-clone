import { useCartStore } from '../store/useCartStore';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getSubtotal } = useCartStore();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8 italic">Mon panier ({cart.length} article{cart.length > 1 ? 's' : ''})</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-6">
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-6 border-b pb-6 relative">
              <img src={item.image} className="w-32 h-44 object-cover" />
              <div className="flex-1 space-y-2">
                <h3 className="font-bold">{item.brand}</h3>
                <p className="text-sm text-gray-600">{item.name}</p>
                <p className="font-bold">{item.price.toFixed(2)} €</p>
                <p className="text-xs text-gray-400 italic">Couleur: Original | Taille: {item.size}</p>
                
                <div className="flex items-center gap-4 mt-4">
                  <select 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, item.size, e.target.value)}
                    className="border p-1"
                  >
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                  <button onClick={() => removeFromCart(item.id, item.size)} className="text-xl">✕</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-80 bg-gray-50 p-6 h-fit">
          <h2 className="font-bold mb-6">Récapitulatif</h2>
          <div className="space-y-3 text-sm border-b pb-4">
            <div className="flex justify-between"><span>Sous-total</span><span>{getSubtotal()} €</span></div>
            <div className="flex justify-between"><span>Livraison</span><span className="text-green-600 font-bold">0,00 €</span></div>
          </div>
          <div className="flex justify-between font-bold text-lg py-4">
            <span>Total <small className="font-normal text-xs text-gray-500">TVA incluse</small></span>
            <span>{getSubtotal()} €</span>
          </div>
          <button className="w-full bg-black text-white font-bold py-4 mt-4">Commander</button>
        </div>
      </div>
    </div>
  );
}