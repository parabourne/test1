"use client";
import { useState } from "react";
import Image from "next/image";

export default function BottleGame() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinBottle = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    // Təsadüfi fırlanma (minimum 5 tam dövr + random dərəcə)
    const newRotation = rotation + 1800 + Math.floor(Math.random() * 360);
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col items-center justify-between p-6 overflow-hidden font-sans">
      
      {/* Üst Başlıq */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-6 border-b border-zinc-200">
        <h1 className="text-xl font-black tracking-tighter text-zinc-800 italic uppercase">
          BOTTLE GAME
        </h1>
        <div className="flex gap-4">
          <a href="https://ok.ru/profile/571342590727" target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-orange-500 transition">Bəy</a>
          <a href="https://ok.ru/profile/605649922330" target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-orange-500 transition">Xanım</a>
        </div>
      </nav>

      <div className="z-10 text-center mt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Interaktiv Dostluq Oyunu</p>
      </div>

      {/* Oyun Sahəsi */}
      <div className="relative w-full max-w-5xl flex items-center justify-around flex-col md:flex-row gap-8 py-10">
        
        {/* Xanım Profili */}
        <div className="flex flex-col items-center gap-6 group">
          <a href="https://ok.ru/profile/605649922330" target="_blank" className="relative w-48 h-64 border-4 border-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
            <Image src="/xanim.webp" alt="Xanım" fill className="object-cover" />
          </a>
          <span className="px-4 py-1 bg-zinc-200 text-[10px] font-black rounded-full uppercase tracking-widest text-zinc-600">XANIM</span>
        </div>

        {/* Orta: Şüşə */}
        <div className="relative flex flex-col items-center justify-center py-10">
          <div 
            className="relative w-40 h-40 md:w-56 md:h-56 cursor-pointer transition-transform duration-[3000ms] cubic-bezier(0.15, 0, 0.15, 1)"
            style={{ transform: `rotate(${rotation}deg)` }}
            onClick={spinBottle}
          >
            {/* Minimalist Şüşə SVG */}
            <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-lg">
              <path d="M40 20 L60 20 L60 50 L85 90 L85 190 L15 190 L15 90 L40 50 Z" fill="#27272a" />
              <rect x="45" y="10" width="10" height="10" fill="#71717a" />
              <rect x="25" y="100" width="50" height="70" rx="5" fill="#3f3f46" opacity="0.3" />
            </svg>
          </div>
          
          <button 
            onClick={spinBottle}
            disabled={isSpinning}
            className="mt-16 px-12 py-4 bg-zinc-900 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-zinc-700 hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-30"
          >
            {isSpinning ? "FIRLANIR..." : "ŞÜŞƏNİ FIRLAT"}
          </button>
        </div>

        {/* Bəy Profili */}
        <div className="flex flex-col items-center gap-6 group">
          <a href="https://ok.ru/profile/571342590727" target="_blank" className="relative w-48 h-64 border-4 border-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
            <Image src="/bey.webp" alt="Bəy" fill className="object-cover" />
          </a>
          <span className="px-4 py-1 bg-zinc-200 text-[10px] font-black rounded-full uppercase tracking-widest text-zinc-600">BƏY</span>
        </div>

      </div>

      {/* Alt hissə */}
      <footer className="w-full max-w-6xl py-10 border-t border-zinc-200 text-center">
        <p className="text-[9px] text-zinc-400 tracking-[0.5em] uppercase font-bold">
          © 2026 Baku Development | Odnoklassniki Profiles Integrated
        </p>
      </footer>
    </main>
  );
}