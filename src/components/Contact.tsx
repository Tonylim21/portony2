"use client";

import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/80 shadow-2xl shadow-pink-900/5 text-center">
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Berkolaborasi!</span>
          </h2>
          
          <p className="text-slate-600 max-w-xl mx-auto font-medium text-lg mb-10 leading-relaxed">
            Saya selalu terbuka untuk peluang baru, proyek <em>freelance</em>, atau sekadar berdiskusi tentang teknologi dan pengembangan perangkat lunak. Jangan ragu untuk menyapa!
          </p>

          {/* INFORMASI KONTAK */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a 
              href="mailto:antonysalim123@gmail.com" 
              className="flex items-center gap-3 text-slate-700 bg-white/60 px-5 py-3 rounded-2xl border border-white/90 shadow-sm hover:bg-white hover:text-pink-600 transition-all hover:-translate-y-1"
            >
              <FiMail className="w-5 h-5 text-pink-500" />
              <span className="font-semibold">antonysalim123@gmail.com</span>
            </a>
            
            <a 
              href="https://wa.me/6281295410338" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-700 bg-white/60 px-5 py-3 rounded-2xl border border-white/90 shadow-sm hover:bg-white hover:text-emerald-600 transition-all hover:-translate-y-1"
            >
              <FaWhatsapp className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold">WhatsApp Saya</span>
            </a>

            <div className="flex items-center gap-3 text-slate-700 bg-white/60 px-5 py-3 rounded-2xl border border-white/90 shadow-sm cursor-default">
              <FiMapPin className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold">Bekasi, Indonesia</span>
            </div>
          </div>

          {/* TOMBOL AKSI UTAMA */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:antonysalim123@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-bold text-lg shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FiSend className="w-5 h-5" />
              Kirim Email
            </a>
            
            <a
              href="https://wa.me/6281295410338"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-emerald-100 text-emerald-600 font-bold text-lg shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 hover:border-emerald-200 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FaWhatsapp className="w-6 h-6" />
              Chat WhatsApp
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}