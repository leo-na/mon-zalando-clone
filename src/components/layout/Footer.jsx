export default function Footer() {
  return (
    <footer className="bg-[#222] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-xs">Aide & Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Questions fréquentes</li>
            <li className="hover:text-white cursor-pointer">Suivre mon colis</li>
            <li className="hover:text-white cursor-pointer">Retours</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-xs">Shopping en ligne</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Toutes les marques</li>
            <li className="hover:text-white cursor-pointer">Cartes cadeaux</li>
            <li className="hover:text-white cursor-pointer">Zalando Lounge</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-xs">À propos de Zalando</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Carrières</li>
            <li className="hover:text-white cursor-pointer">Investisseurs</li>
            <li className="hover:text-white cursor-pointer">Presse</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-gray-400 leading-relaxed">Inscris-toi pour recevoir nos offres exclusives.</p>
          <div className="flex border-b border-gray-600 pb-2">
            <input type="email" placeholder="Ton email" className="bg-transparent outline-none flex-1" />
            <button className="font-bold text-xs uppercase">S'inscrire</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-8 text-center text-[10px] text-gray-500 uppercase tracking-[0.2em]">
        © 2026 Zalando Clone - Created for learning purposes
      </div>
    </footer>
  );
}