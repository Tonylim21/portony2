"use client";

import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";

export default function Projects() {
  // Data proyekmu disesuaikan dengan pengalaman nyata
  const projects = [
    {
      title: "Sistem POS & Peramalan Inventaris",
      description: "Aplikasi web Point of Sale (POS) untuk TB Duren Jaya yang dilengkapi fitur peramalan stok menggunakan algoritma Single Moving Average, serta manajemen penjualan dan retur.",
      techStack: ["Laravel 10", "React.js", "MySQL", "SMA Algorithm"],
      github: "https://github.com/Tonylim21/SIM-PP-TB-Duren-Jaya",
      demo: "#",
    },
    {
      title: "Applicant Tracking System (ATS)",
      description: "Sistem internal manajemen rekrutmen untuk mengelola posisi pekerjaan, verifikasi dokumen pelamar, dan rekomendasi kandidat, dibangun saat magang di PT Iota Cipta Indonesia.",
      techStack: ["Laravel 10", "Sanctum", "MySQL", "Tailwind CSS"],
      github: "",
      demo: "#",
    },
    {
      title: "Car Rental Management Web",
      description: "Aplikasi full-stack untuk mengelola penyewaan mobil, pemrosesan transaksi pelanggan, pelacakan armada, dan manajemen profil pengguna secara efisien.",
      techStack: ["Laravel", "React.js", "MySQL"],
      github: "https://github.com/Tonylim21/Rental-Mobil",
      demo: "#",
    },
    {
      title: "Mobile Financial Record App",
      description: "Aplikasi mobile untuk pencatatan keuangan pribadi yang mendukung autentikasi pengguna dan sinkronisasi database secara real-time.",
      techStack: ["Flutter", "Dart", "Firebase Firestore"],
      github: "https://github.com/Tonylim21/Mobile-Apps-Daftar-Kegiatan",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* PENDARAN BACKGROUND PASTEL */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Unggulan</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
            Beberapa sistem dan aplikasi yang telah saya kembangkan, mulai dari aplikasi web hingga mobile.
          </p>
        </div>

        {/* GRID KARTU PROYEK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/80 shadow-xl shadow-sky-900/5 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-2xl group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <FiFolder className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.github} className="text-slate-400 hover:text-indigo-600 transition-colors">
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a href={project.demo} className="text-slate-400 hover:text-sky-600 transition-colors">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200/50">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold text-sky-700 bg-sky-100/50 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}