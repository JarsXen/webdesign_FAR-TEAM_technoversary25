
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trash2, Trees, Recycle, Map, CheckCircle } from 'lucide-react';

const Program: React.FC = () => {
  return (
    <div className="pb-20 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-32 pb-24 px-4 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0">
           <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-sm font-bold mb-4">
            Inisiatif Nyata
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Program Unggulan</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Empat pilar utama EcoDigital Nusantara dalam mewujudkan ekosistem lingkungan yang berkelanjutan di Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 space-y-20">
        
        {/* 1. Bank Sampah Digital */}
        <section id="bank-sampah" className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Trash2 size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bank Sampah Digital</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Transformasi manajemen limbah rumah tangga menjadi bernilai ekonomi. Melalui aplikasi kami, setiap sampah yang Anda pilah dapat ditukar menjadi poin belanja atau uang tunai.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Tracking setoran sampah realtime",
                  "Konversi sampah anorganik jadi Rupiah",
                  "Jadwal penjemputan fleksibel"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={20} className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/guide" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
                Lihat Panduan Pemilahan <ArrowRight size={18} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden group shadow-lg">
              <img 
                src="/images/article-bank-sampah.jpg" 
                alt="Bank Sampah" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </section>

        {/* 2. Konservasi Alam */}
        <section id="konservasi" className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg">
               <img 
                src="/images/article-mangrove.jpg" 
                alt="Konservasi Alam" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000&auto=format&fit=crop';
                }}
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                <Trees size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Konservasi Alam</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Program restorasi ekosistem kritis, mulai dari penanaman mangrove di pesisir hingga reboisasi hutan lindung. Kami mengajak masyarakat untuk menjadi orang tua asuh pohon.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Adopsi Pohon Digital",
                  "Monitoring pertumbuhan via satelit",
                  "Pemberdayaan petani lokal"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={20} className="text-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/education" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-3 transition-all">
                Pelajari Ekosistem <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Zero Waste Lifestyle */}
        <section id="zero-waste" className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
             <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-400">
               <Recycle size={40} />
             </div>
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Gerakan Zero Waste</h2>
             <p className="text-slate-300 text-lg mb-10 leading-relaxed">
               Bukan hanya tentang mendaur ulang, tapi tentang menolak apa yang tidak kita butuhkan. Kami menyediakan edukasi dan workshop untuk memulai gaya hidup minim sampah.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h4 className="font-bold text-xl mb-2 text-emerald-400">Refuse</h4>
                 <p className="text-sm text-slate-300">Menolak penggunaan plastik sekali pakai dalam aktivitas harian.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h4 className="font-bold text-xl mb-2 text-emerald-400">Reduce</h4>
                 <p className="text-sm text-slate-300">Mengurangi konsumsi barang yang berpotensi menjadi sampah.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h4 className="font-bold text-xl mb-2 text-emerald-400">Reuse</h4>
                 <p className="text-sm text-slate-300">Menggunakan kembali barang yang masih layak pakai.</p>
               </div>
             </div>
          </div>
        </section>

        {/* 4. Eco Tour */}
        <section id="eco-tour" className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Map size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Eco Tour</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Jelajahi keindahan alam Indonesia dengan cara yang bertanggung jawab. Paket wisata edukasi yang menggabungkan petualangan dengan aksi pelestarian lingkungan.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Wisata minim jejak karbon",
                  "Workshop kerajinan daur ulang lokal",
                  "Volunteering membersihkan pantai/gunung"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={20} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                Daftar Trip Berikutnya <ArrowRight size={18} />
              </Link>
            </div>
             <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden group shadow-lg">
               <img 
                src="/images/gallery-1.jpg" 
                alt="Eco Tour" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop';
                }}
              />
               <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <div className="text-center pb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Tertarik berkolaborasi dalam program kami?</h3>
          <Link to="/contact" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/30">
            Hubungi Mitra Kami
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Program;
