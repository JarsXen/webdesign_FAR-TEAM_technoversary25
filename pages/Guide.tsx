import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Recycle, AlertTriangle, CheckCircle2, XCircle, Droplets, Wind, PackageCheck } from 'lucide-react';

const Guide: React.FC = () => {
  return (
    <div className="pb-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-slate-900 dark:bg-black text-white pt-32 pb-20 px-4 overflow-hidden rounded-b-[3rem]">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Link to="/education" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Kembali ke Edukasi</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Panduan Pemilahan Sampah</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Langkah kecilmu memilah sampah hari ini adalah dampak besar bagi bumi esok hari. Pelajari caranya dengan benar di sini.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-20">
        
        {/* Kategori Sampah */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Organik */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border-t-4 border-green-500 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Sampah Organik</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                Sampah yang berasal dari sisa makhluk hidup dan mudah terurai secara alami.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-green-500" /> Sisa Makanan
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-green-500" /> Daun Kering & Ranting
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-green-500" /> Kulit Buah & Sayur
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Pengolahan:</span>
                <p className="font-semibold text-green-700 dark:text-green-400 mt-1">Dijadikan Pupuk Kompos</p>
              </div>
            </div>

            {/* Anorganik */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border-t-4 border-blue-500 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Recycle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Sampah Anorganik</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                Sampah yang sulit terurai namun bernilai ekonomis tinggi jika didaur ulang.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> Botol Plastik & Gelas
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> Kertas & Kardus
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> Kaleng & Logam
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Pengolahan:</span>
                <p className="font-semibold text-blue-700 dark:text-blue-400 mt-1">Bank Sampah / Daur Ulang</p>
              </div>
            </div>

            {/* B3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border-t-4 border-red-500 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Sampah B3</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                Bahan Berbahaya dan Beracun. Tidak boleh dicampur dengan sampah lain.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500" /> Baterai Bekas
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500" /> Lampu Neon/Bohlam
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500" /> Kemasan Pestisida/Obat
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Pengolahan:</span>
                <p className="font-semibold text-red-700 dark:text-red-400 mt-1">Dropbox E-Waste / Pengepul Khusus</p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-16 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/20 rounded-bl-full opacity-50"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Persiapan Setor ke Bank Sampah</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4">Ikuti 4 langkah mudah ini agar sampahmu diterima dan bernilai maksimal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
             {[
               { icon: Recycle, title: "1. Pilah", desc: "Pisahkan sampah sesuai jenisnya (Plastik, Kertas, Logam)." },
               { icon: Droplets, title: "2. Bersihkan", desc: "Cuci bersih sampah plastik/kaleng dari sisa makanan/minuman." },
               { icon: Wind, title: "3. Keringkan", desc: "Pastikan sampah dalam keadaan kering agar tidak bau dan berjamur." },
               { icon: PackageCheck, title: "4. Setor", desc: "Kemas rapi dan bawa ke Bank Sampah terdekat atau jadwal penjemputan." }
             ].map((step, idx) => (
               <div key={idx} className="flex flex-col items-center text-center group">
                 <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-lg">
                   <step.icon size={32} />
                 </div>
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">{step.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section>
           <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-10 text-center">Do's & Don'ts</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* Do's */}
             <div className="bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900 rounded-3xl p-8">
               <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-3">
                 <CheckCircle2 className="fill-emerald-100 dark:fill-emerald-900 text-emerald-600 dark:text-emerald-400" size={32} />
                 Lakukan Ini
               </h3>
               <ul className="space-y-4">
                 {[
                   "Remas botol plastik untuk menghemat ruang penyimpanan.",
                   "Lepaskan label kemasan jika memungkinkan.",
                   "Lipat kardus menjadi pipih.",
                   "Simpan sampah di tempat kering dan tertutup."
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-emerald-900 dark:text-emerald-100 font-medium">
                     <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Don'ts */}
             <div className="bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900 rounded-3xl p-8">
               <h3 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-6 flex items-center gap-3">
                 <XCircle className="fill-red-100 dark:fill-red-900 text-red-600 dark:text-red-400" size={32} />
                 Hindari Ini
               </h3>
               <ul className="space-y-4">
                 {[
                   "Mencampur sampah basah (organik) dengan sampah kering.",
                   "Menyetor botol yang masih berisi cairan.",
                   "Memasukkan puntung rokok atau tisu bekas ke sampah daur ulang.",
                   "Membakar sampah plastik (berbahaya bagi pernapasan)."
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-red-900 dark:text-red-100 font-medium">
                     <XCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>

           </div>
        </section>

        <div className="bg-slate-900 dark:bg-black rounded-2xl p-12 text-center text-white border border-slate-800 dark:border-slate-700">
            <h2 className="text-3xl font-bold mb-4">Siap Menjadi Pahlawan Lingkungan?</h2>
            <p className="text-slate-400 mb-8">Mulailah memilah dari rumah sekarang juga.</p>
            <Link to="/contact" className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/25">
              Daftar Bank Sampah
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Guide;