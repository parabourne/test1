"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoveBottleGame() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [message, setMessage] = useState("");

  const loveMessages = [
    "Səninlə hər anım bir nağıldır... ❤️",
    "Gözlərindəki işıq mənim yolumu aydınladır. ✨",
    "Dünyanın ən şirin təbəssümü səndədir. 😍",
    "Yaxşı ki varsan, yaxşı ki mənimləsən. 🌹",
    "Qəlbimin tək sahibi sənsən. 🔒❤️",
    "Səni sevmək dünyanın ən gözəl hissidir."
  ];

  const spinBottle = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setMessage(""); // Yeni fırlanmada köhnə mesajı silirik
    
    const newRotation = rotation + 1800 + Math.floor(Math.random() * 360);
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      // Fırlanma bitəndə təsadüfi bir sevgi mesajı seçirik
      setMessage(loveMessages[Math.floor(Math.random() * loveMessages.length)]);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#fffafa] text-zinc-900 flex flex-col items-center justify-between p-6 overflow-hidden font-sans relative">
      
      {/* Arxa planda uçan ürəklər (sadə dekor) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 text-red-400">
        <span className="absolute top-10 left-10 animate-pulse text-2xl">❤️</span>
        <span className="absolute bottom-20 right-20 animate-bounce text-3xl">💖</span>
        <span className="absolute top-1/2 left-1/4 animate-pulse text-xl">💗</span>
      </div>

      {/* Üst Başlıq */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-6 border-b border-pink-100 z-10">
        <h1 className="text-xl font-black tracking-tighter text-pink-600 italic uppercase flex items-center gap-2">
          BİZİM HEKAYƏMİZ <span className="animate-pulse">❤️</span>
        </h1>
        <div className="flex gap-4">
          <a href="https://ok.ru/profile/605649922330" target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-pink-500 transition">XANIM</a>
          <a href="https://ok.ru/profile/571342590727" target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-pink-500 transition">BƏY</a>
        </div>
      </nav>

      {/* Mesaj Bölməsi */}
      <div className="h-20 flex items-center justify-center text-center px-4 z-10">
        {message && (
          <div className="animate-bounce bg-white shadow-lg px-6 py-2 rounded-2xl border border-pink-100 italic text-pink-600 font-medium">
            {message}
          </div>
        )}
      </div>

      {/* Oyun Sahəsi */}
      <div className="relative w-full max-w-5xl flex items-center justify-around flex-col md:flex-row gap-8 py-4 z-10">
        
        {/* Xanım Profili */}
        <div className="flex flex-col items-center gap-6 group">
          <div className="relative w-48 h-64 border-8 border-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(255,182,193,0.3)] group-hover:scale-105 transition-all duration-500">
            <Image src="/xanim.webp" alt="Xanım" fill className="object-cover" />
          </div>
          <span className="px-6 py-1 bg-pink-50 text-[10px] font-black rounded-full uppercase tracking-widest text-pink-500 border border-pink-100">Xanımım</span>
        </div>

        {/* Orta: Şüşə */}
        <div className="relative flex flex-col items-center justify-center py-10">
          <div 
            className="relative w-44 h-44 md:w-60 md:h-60 cursor-pointer transition-transform duration-[3000ms] cubic-bezier(0.15, 0, 0.15, 1)"
            style={{ transform: `rotate(${rotation}deg)` }}
            onClick={spinBottle}
          >
            {/* Romantik Şüşə Dizaynı */}
            <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_10px_20px_rgba(219,39,119,0.2)]">
              <path d="M40 20 L60 20 L60 50 L85 90 L85 190 L15 190 L15 90 L40 50 Z" fill="#db2777" />
              <circle cx="50" cy="130" r="15" fill="white" opacity="0.3" />
              <rect x="45" y="10" width="10" height="15" fill="#9d174d" rx="2" />
            </svg>
          </div>
          
          <button 
            onClick={spinBottle}
            disabled={isSpinning}
            className="mt-16 px-14 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:from-pink-600 hover:to-rose-600 hover:scale-110 active:scale-95 transition-all shadow-xl shadow-pink-200 disabled:opacity-30"
          >
            {isSpinning ? "Sevgi fırlanır..." : "Qəlbi Seç"}
          </button>
        </div>

        {/* Bəy Profili */}
        <div className="flex flex-col items-center gap-6 group">
          <div className="relative w-48 h-64 border-8 border-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(255,182,193,0.3)] group-hover:scale-105 transition-all duration-500">
            <Image src="/bey.webp" alt="Bəy" fill className="object-cover" />
          </div>
          <span className="px-6 py-1 bg-pink-50 text-[10px] font-black rounded-full uppercase tracking-widest text-pink-500 border border-pink-100">Bəyim</span>
        </div>

      </div>

      {/* Alt hissə */}
      <footer className="w-full max-w-6xl py-10 border-t border-pink-50 text-center z-10">
        <p className="text-[10px] text-pink-300 tracking-[0.5em] uppercase font-bold">
          Sizin sevginiz hər şeydən üstündür ❤️ 2026
        </p>
      </footer>
    </main>
  );
}