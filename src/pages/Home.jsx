import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative h-[80vh] bg-gray-100">
      <img 
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600" 
        className="w-full h-full object-cover" 
        alt="Mode"
      />
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-6xl font-black mb-4 uppercase">Nouvelle Collection</h2>
        <p className="text-xl mb-8">Découvrez les tendances de la saison 2026</p>
        <Link to="/shop" className="bg-white text-black px-10 py-4 font-bold hover:bg-orange-500 hover:text-white transition">
          SHOPPER MAINTENANT
        </Link>
      </div>
    </div>
  );
}