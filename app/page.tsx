"use client";
import { useState } from "react";
import Image from "next/image";

export default function LoveBottleGame() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [turn, setTurn] = useState(0); // 0: Xanım, 1: Bəy
  const [message, setMessage] = useState("");

  const loveMessages = [
    "Səninlə hər anım bir nağıldır... ❤️",
    "Gözlərindəki işıq mənim yolumu aydınladır. ✨",
    "Dünyanın ən şirin təbəssümü səndədir. 😍",
    "Yaxşı ki varsan, yaxşı ki mənimləsən. 🌹",
    "Qəlbimin tək sahibi sənsən. 🔒❤️"
  ];

  const spinBottle = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setMessage("");

    // Növbəli dayanma məntiqi:
    // Xanım tərəf (Sol): 270 dərəcə (və ya -90)
    // Bəy tərəf (Sağ): 90 dərəcə
    let targetDegree = turn === 0 ? 270 : 90;
    
    // Tam dövrlər əlavə edirik (5 dövr = 1800 dərəcə) ki, fırlanma effekti olsun
    const newRotation = rotation + (1800 - (rotation % 360)) + targetDegree;
    
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setMessage(loveMessages[Math.floor(Math.random() * loveMessages.length)]);
      
      // Növbəni dəyişdiririk: növbəti dəfə digər şəxs olsun
      setTurn(turn === 0 ? 1 : 0);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#fffafa] text-zinc-900 flex flex-col items-center justify-between p-6 overflow-hidden relative">
      {/* Üst Naviqasiya */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-6 border-b border-pink-100 z-10">
        <h1 className="text-xl font-black tracking-tighter text-pink-600 italic uppercase flex items-center gap-2">
          ƏLİŞ & XANIM <span className="animate-pulse">❤️</span>
        </h1>
        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
          Növbə: {turn === 0 ? "Xanım" : "Bəy"}
        </p>
      </nav>

      {/* Mesaj */}
      <div className="h-24 flex items-center justify-center text-center px-4 z-10">
        {message && (
          <div className="animate-bounce bg-white shadow-lg px-8 py-3 rounded-2xl border border-pink-100 italic text-pink-600 font-bold">
            {message}
          </div>
        )}
      </div>

      {/* Oyun Sahəsi */}
      <div className="relative w-full max-w-5xl flex items-center justify-around flex-col md:flex-row gap-8 py-4 z-10">
        
        {/* Xanım (Sol) */}
        <div className={`flex flex-col items-center gap-6 transition-opacity duration-500 ${isSpinning || turn === 1 ? 'opacity-50' : 'opacity-100'}`}>
          <div className="relative w-48 h-64 border-8 border-white rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src="/xanim.webp" alt="Xanım" fill className="object-cover" />
          </div>
          <span className="px-6 py-1 bg-pink-50 text-[10px] font-black rounded-full text-pink-500 uppercase">Gözəlim</span>
        </div>

        {/* Orta: Növbəli Şüşə */}
        <div className="relative flex flex-col items-center justify-center">
          <div 
            className="relative w-44 h-44 md:w-60 md:h-60 transition-transform duration-[3000ms] cubic-bezier(0.15, 0, 0.15, 1)"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-2xl">
              <path d="M40 20 L60 20 L60 50 L85 90 L85 190 L15 190 L15 90 L40 50 Z" fill="#db2777" />
              <rect x="45" y="10" width="10" height="15" fill="#9d174d" rx="2" />
              {/* Şüşənin üzərindəki balaca ürək */}
              <text x="35" y="145" fontSize="30" fill="white" opacity="0.5">❤️</text>
            </svg>
          </div>
          
          <button 
            onClick={spinBottle}
            disabled={isSpinning}
            className="mt-16 px-14 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:scale-110 transition-all shadow-xl disabled:opacity-30"
          >
            {isSpinning ? "Sevgi fırlanır..." : "NÖVBƏTİ SEVGİ"}
          </button>
        </div>

        {/* Bəy (Sağ) */}
        <div className={`flex flex-col items-center gap-6 transition-opacity duration-500 ${isSpinning || turn === 0 ? 'opacity-50' : 'opacity-100'}`}>
          <div className="relative w-48 h-64 border-8 border-white rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src="/bey.webp" alt="Bəy" fill className="object-cover" />
          </div>
          <span className="px-6 py-1 bg-pink-50 text-[10px] font-black rounded-full text-pink-500 uppercase">Əliş</span>
        </div>

      </div>

      <footer className="w-full max-w-6xl py-10 border-t border-pink-50 text-center opacity-40">
        <p className="text-[10px] text-pink-300 tracking-[0.5em] uppercase font-bold italic">
          Birlikdə daha gözəl...
        </p>
      </footer>
    </main>
  );
}