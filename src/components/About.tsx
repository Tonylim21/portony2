"use client";

import { FiCode, FiTerminal, FiBriefcase, FiAward } from "react-icons/fi";

export default function About() {
  const techStack = [
    "Next.js", "React.js", "TypeScript", "Tailwind CSS",
    "Laravel", "PHP", "MySQL", "Git & GitHub", "Postman", "Docker"
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">Saya</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
            Perjalanan, pengalaman, dan teknologi yang saya gunakan untuk membangun solusi digital yang efisien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* KIRI: Teks Bio & Pengalaman */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/80 shadow-xl shadow-sky-900/5">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FiTerminal className="text-indigo-500" /> Profil Singkat
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Saya adalah lulusan S1 Teknik Informatika dari <strong>Universitas Dian Nusantara</strong>. Saya memiliki minat besar dalam pengembangan web <em>full-stack</em>, terutama dalam merancang arsitektur <em>backend</em> yang kokoh dan antarmuka <em>frontend</em> yang modern dan responsif.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Sebelumnya, saya telah menyelesaikan program magang sebagai <strong>Software Engineer di PT Iota Cipta Indonesia</strong>, di mana saya merancang dan membangun sistem <em>Applicant Tracking System (ATS)</em>. Saya terbiasa memecahkan masalah kompleks dan mengubahnya menjadi kode yang bersih serta mudah dikembangkan.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FiAward className="text-sky-500" /> Pendidikan
                  </span>
                  <span className="text-sm text-slate-500">S1 Teknik Informatika</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FiBriefcase className="text-indigo-500" /> Pengalaman
                  </span>
                  <span className="text-sm text-slate-500">Software Engineer Intern</span>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: Tech Stack Kaca */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/80 shadow-xl shadow-indigo-900/5 h-full">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <FiCode className="text-sky-500" /> Tech Stack Utama
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white/70 backdrop-blur-md border border-white/90 rounded-xl shadow-sm hover:scale-105 hover:text-indigo-600 hover:border-indigo-300 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}