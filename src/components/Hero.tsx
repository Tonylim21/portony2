"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiInstagram, FiBriefcase } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* PENDARAN BACKGROUND PASTEL */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* TEKS UTAMA */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-sky-200/60 backdrop-blur-md shadow-sm w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-700">
                Open for Opportunities & Collaboration
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Halo, Saya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-500">
                Antony Salim
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
              Seorang <strong className="text-slate-800">Software Engineer</strong> berbasis di Bekasi. Berfokus mengembangkan aplikasi web berkinerja tinggi, responsif, dan bernilai estetika tinggi menggunakan Next.js, Laravel, & Tailwind CSS.
            </p>

            {/* TOMBOL AKSI */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Lihat Proyek
                <FiArrowUpRight className="w-5 h-5" />
              </Link>

              <Link
                href="#contact"
                className="px-7 py-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-700 font-semibold shadow-sm hover:bg-white hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Hubungi Saya
              </Link>
            </div>

            {/* SOSIAL MEDIA (DIPERBARUI) */}
            <div className="flex items-center gap-4 pt-4 text-slate-500 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <a
                href="https://github.com/Tonylim21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/70 border border-white/90 hover:bg-white hover:text-indigo-600 shadow-sm transition-all hover:-translate-y-0.5"
                title="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tony-salim-55a037324/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/70 border border-white/90 hover:bg-white hover:text-sky-600 shadow-sm transition-all hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://id.jobstreet.com/id/profiles/antony-salim-v3tr0p5ydq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/70 border border-white/90 hover:bg-white hover:text-blue-600 shadow-sm transition-all hover:-translate-y-0.5"
                title="JobStreet"
              >
                <FiBriefcase className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/tonylim._/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/70 border border-white/90 hover:bg-white hover:text-pink-600 shadow-sm transition-all hover:-translate-y-0.5"
                title="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6281295410338"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/70 border border-white/90 hover:bg-white hover:text-emerald-500 shadow-sm transition-all hover:-translate-y-0.5"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="mailto:antonysalim123@gmail.com"
                className="p-2.5 rounded-xl bg-white/70 border border-white/90 hover:bg-white hover:text-rose-500 shadow-sm transition-all hover:-translate-y-0.5"
                title="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* KARTU FOTO PROFIL KACA */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/80 shadow-2xl shadow-indigo-500/10">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-sky-100 mb-6 border border-white/60 shadow-inner">
                <Image
                  src="/profile.png"
                  alt="Antony Salim"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="flex flex-col gap-1.5 bg-white/70 backdrop-blur-md p-4 rounded-xl border border-white/90 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Lokasi
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700">
                    Bekasi, Indonesia
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  Universitas Dian Nusantara
                </p>
                <p className="text-xs text-slate-500">
                  S1 Teknik Informatika
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}