"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiBriefcase } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/50 bg-white/20 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-6">
        
        {/* LOGO & TEKS */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-slate-800">
            PORT<span className="text-sky-500">ONY</span>
          </span>
        </Link>
        <p className="text-slate-500 text-sm font-medium text-center max-w-sm">
          Membangun antarmuka modern yang indah dan arsitektur backend yang kokoh.
        </p>

        {/* SOSIAL MEDIA */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <a href="https://github.com/Tonylim21" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors" title="GitHub">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/tony-salim-55a037324/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-600 transition-colors" title="LinkedIn">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a href="https://id.jobstreet.com/id/profiles/antony-salim-v3tr0p5ydq" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors" title="JobStreet">
            <FiBriefcase className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/tonylim._/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors" title="Instagram">
            <FiInstagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/6281295410338" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors" title="WhatsApp">
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a href="mailto:antonysalim123@gmail.com" className="text-slate-400 hover:text-rose-500 transition-colors" title="Email">
            <FiMail className="w-5 h-5" />
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent my-4" />
        <p className="text-slate-400 text-xs font-semibold tracking-wide">
          © {currentYear} Antony Salim. All rights reserved. Built with Next.js & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}