import React, { useState } from 'react';
import { Search, BookOpen, Sparkles, Trash2, RefreshCw, ArrowRight, Wallet, Quote, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Article, WasteType } from '../types';
import { generateEcoTip } from '../services/geminiService';

const articles: Article[] = [
  {
    id: '1',
    title: 'Mengenal Gaya Hidup Zero Waste',
    excerpt: 'Panduan lengkap untuk pemula yang ingin mengurangi produksi sampah harian mulai dari rumah.',
    category: 'Gaya Hidup',
    imageUrl: '/images/article-zero-waste.jpg',
    date: '10 Jan 2025'
  },
  {
    id: '2',
    title: 'Inovasi Pengolahan Limbah Plastik',
    excerpt: 'Teknologi terbaru mengubah sampah plastik menjadi batako ramah lingkungan yang kuat.',
    category: 'Inovasi',
    imageUrl: '/images/article-plastic.jpg',
    date: '12 Jan 2025'
  },
  {
    id: '3',
    title: 'Pentingnya Hutan Bakau bagi Pesisir',
    excerpt: 'Mengapa konservasi mangrove sangat vital untuk mencegah abrasi dan menjaga ekosistem laut.',
    category: 'Edukasi',
    imageUrl: '/images/article-mangrove.jpg',
    date: '15 Jan 2025'
  },
  {
    id: '4',
    title: 'Bank Sampah: Ubah Sampah Jadi Rupiah',
    excerpt: 'Cara kerja bank sampah digital dan bagaimana kamu bisa mendapatkan keuntungan finansial.',
    category: 'Edukasi',
    imageUrl: '/images/article-bank-sampah.jpg',
    date: '18 Jan 2025'
  }
];

const wasteTypes: WasteType[] = [
  { id: '1', name: 'Plastik PET', pricePerKg: 3500, icon: '🥤' },
  { id: '2', name: 'Kardus', pricePerKg: 2000, icon: '📦' },
  { id: '3', name: 'Aluminium', pricePerKg: 12000, icon: '🥫' },
  { id: '4', name: 'Kertas HVS', pricePerKg: 2500, icon: '📄' },
];

const Education: React.FC = () => {
  const [tipTopic, setTipTopic] = useState('');
  const [generatedTip, setGeneratedTip] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedWaste, setSelectedWaste] = useState<string>(wasteTypes[0].id);
  const [weight, setWeight] = useState<number>(0);

  const handleGenerateTip = async () => {
    if (!tipTopic) return;
    setIsGenerating(true);
    setGeneratedTip('');
    const tip = await generateEcoTip(tipTopic);
    setGeneratedTip(tip);
    setIsGenerating(false);
  };

  const calculateTotal = () => {
    const waste = wasteTypes.find(w => w.id === selectedWaste);
    return waste ? waste.pricePerKg * weight : 0;
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-slate-900 dark:bg-black text-white pt-32 pb-20 px-4 relative overflow-hidden rounded-b-[3rem]">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
           <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
           <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
         </div>
         
         <div className="relative z-10 text-center max-w-3xl mx-auto">
           <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Pusat Edukasi</h1>
           <p className="text-slate-300 text-lg">Eksplorasi wawasan lingkungan dan manfaatkan fitur interaktif kami.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 space-y-16">
        
        {/* AI Feature */}
        <div className="glass-card bg-white/80 dark:bg-slate-800/80 p-8 rounded-3xl shadow-xl border-none">
           <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="md:w-1/2">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold mb-4">
                 <Sparkles size={14} />
                 <span>Powered by Gemini AI</span>
               </div>
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Generator Tips Ramah Lingkungan</h2>
               <p className="text-slate-600 dark:text-slate-300 mb-6">
                 Tanyakan apa saja tentang cara hidup hijau, dan AI kami akan memberikan tips praktis khusus untukmu.
               </p>
               <div className="flex gap-2">
                 <input 
                   type="text" 
                   value={tipTopic}
                   onChange={(e) => setTipTopic(e.target.value)}
                   placeholder="Cth: Hemat listrik, Kompos..."
                   className="flex-1 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition dark:text-white"
                 />
                 <button 
                   onClick={handleGenerateTip}
                   disabled={isGenerating || !tipTopic}
                   className="bg-slate-900 dark:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-indigo-500 transition disabled:opacity-50"
                 >
                   {isGenerating ? '...' : 'Generate'}
                 </button>
               </div>
             </div>
             
             <div className="md:w-1/2 w-full">
               {generatedTip ? (
                 <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 p-6 rounded-2xl relative">
                   <Quote size={40} className="absolute -top-4 -left-4 text-indigo-200 dark:text-indigo-900 fill-indigo-200 dark:fill-indigo-900" />
                   <p className="text-slate-800 dark:text-slate-200 font-medium text-lg relative z-10 italic">"{generatedTip}"</p>
                 </div>
               ) : (
                 <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center text-slate-400 dark:text-slate-500">
                   <Sparkles size={32} className="mx-auto mb-2 opacity-50" />
                   <p>Hasil tips akan muncul di sini</p>
                 </div>
               )}
             </div>
           </div>
        </div>

        {/* Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Widget */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col">
             <div className="flex items-center gap-3 mb-8">
               <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl text-emerald-600 dark:text-emerald-400">
                 <Wallet size={24} />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Simulasi Bank Sampah</h2>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">Estimasi pendapatan daur ulangmu.</p>
               </div>
             </div>

             <div className="flex-1 space-y-6">
               <div>
                 <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 block">Pilih Jenis Sampah</label>
                 <div className="grid grid-cols-2 gap-3">
                   {wasteTypes.map((waste) => (
                     <button
                       key={waste.id}
                       onClick={() => setSelectedWaste(waste.id)}
                       className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                         selectedWaste === waste.id 
                         ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-sm ring-1 ring-emerald-500' 
                         : 'border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                       }`}
                     >
                       <span className="text-2xl">{waste.icon}</span>
                       <div className="text-left">
                         <div className="font-bold text-slate-900 dark:text-white text-sm">{waste.name}</div>
                         <div className="text-xs text-slate-500 dark:text-slate-400">Rp {waste.pricePerKg}/kg</div>
                       </div>
                     </button>
                   ))}
                 </div>
               </div>

               <div>
                 <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 block">Berat Sampah (Kg)</label>
                 <div className="relative">
                   <input 
                    type="number" 
                    min="0"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-xl px-4 py-4 text-lg font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                   />
                   <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-bold">Kg</span>
                 </div>
               </div>
             </div>

             <div className="mt-8 bg-slate-900 dark:bg-black rounded-2xl p-6 text-white flex justify-between items-center shadow-xl shadow-slate-900/20">
               <div>
                 <div className="text-slate-400 text-xs uppercase tracking-wider font-bold">Total Estimasi</div>
                 <div className="text-slate-500 text-xs mt-1">Harga dapat berubah</div>
               </div>
               <div className="text-3xl font-bold text-emerald-400">
                 Rp {calculateTotal().toLocaleString('id-ID')}
               </div>
             </div>
          </div>

          {/* Image Visual */}
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg group">
            <img 
              src="/images/feature-recycle.jpg" 
              alt="Recycling Guide" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
               <h3 className="text-2xl font-bold text-white mb-2">Panduan Pemilahan</h3>
               <p className="text-slate-300 mb-4">Pisahkan sampah organik dan anorganik. Pastikan sampah kering sebelum disetor.</p>
               <Link to="/guide" className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg self-start text-sm font-semibold hover:bg-white hover:text-slate-900 transition">
                 Lihat Panduan Lengkap
               </Link>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Artikel & Berita</h2>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Lihat Semua <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${article.category}/400/300`;
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 dark:text-white shadow-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-slate-400 font-medium mb-2">{article.date}</div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors ml-auto">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-4">
                 <Camera size={14} />
                 <span>Dokumentasi Kegiatan</span>
             </div>
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Galeri Aksi Nyata</h2>
             <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
               Momen-momen kebersamaan kami dalam upaya pelestarian lingkungan. Dari penanaman pohon hingga bersih-bersih pantai.
             </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((num) => (
               <div key={num} className="rounded-2xl overflow-hidden h-64 group relative shadow-lg cursor-pointer">
                  <img 
                    src={`/images/gallery-${num}.jpg`} 
                    alt={`Dokumentasi Aksi ${num}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1591191853878-8b4474469777?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium text-sm">Kegiatan Lingkungan #{num}</span>
                  </div>
               </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Education;