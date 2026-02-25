export default function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20 px-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Zalando_logo.svg/1200px-Zalando_logo.svg.png" 
           className="h-8 mb-10 invert" alt="logo" />
      
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-2xl font-bold">Se connecter ou s'inscrire <br/> En un clin d'œil</h1>
        
        <div className="space-y-4">
          <div className="text-left">
            <label className="text-xs uppercase font-bold text-gray-400">Adresse e-mail</label>
            <input type="email" className="w-full bg-transparent border border-gray-600 p-4 mt-1 focus:border-white outline-none" />
          </div>
          <button className="w-full bg-white text-black font-bold py-4 hover:bg-gray-200">Continuer</button>
        </div>

        <div className="space-y-3 pt-6">
          <button className="w-full border border-gray-600 py-3 flex items-center justify-center gap-2 font-bold hover:bg-gray-900">
            <span>G</span> Continuer avec Google
          </button>
          <button className="w-full border border-gray-600 py-3 flex items-center justify-center gap-2 font-bold hover:bg-gray-900">
            <span></span> Continuer avec Apple
          </button>
          <button className="w-full border border-gray-600 py-3 flex items-center justify-center gap-2 font-bold hover:bg-gray-900">
            <span>f</span> Continuer avec Facebook
          </button>
        </div>
      </div>
    </div>
  );
}