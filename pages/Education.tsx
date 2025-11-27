import React, { useState } from 'react';
import { Search, BookOpen, Sparkles, Trash2, RefreshCw, ArrowRight, Wallet, Quote, Camera, X, ExternalLink, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Article, WasteType, GalleryItem } from '../types';
import { generateEcoTip } from '../services/geminiService';

const articles: Article[] = [
  {
    id: '1',
    title: 'Manfaat Bank Sampah dan Cara Kerjanya yang Perlu Diketahui',
    excerpt: 'Masih bingung dengan manfaat dan cara kerja bank sampah? Mari kenali lebih dalam seputar bank sampah agar Anda bisa turut berkontribusi di dalamnya.',
    category: 'Edukasi',
    imageUrl: '/images/bank-sampah.jpg',
    date: '24 Nov 2025',
    source: 'Rinso.com',
    url: 'https://shorturl.at/vE3d8'
  },
  {
    id: '2',
    title: 'Mencintai dan Melestarikan Alam Sejak Dini',
    excerpt: 'Menyoroti pentingnya menanam kebiasaan cinta alam dari anak-anak: menanam pohon, hemat air, dan memisahkan sampah.',
    category: 'Edukasi',
    imageUrl: '/images/mencintai-lingkungan.jpg',
    date: '24 Nov 2025',
    source: 'Kemendikdasmen',
    url: 'https://shorturl.at/iZPjT'
  },
  {
    id: '3',
    title: 'Membumikan Kesadaran Lingkungan dengan Gerakan Kampanye Desa',
    excerpt: 'Berisi strategi efektif kampanye lingkungan di desa, termasuk penyuluhan publik, aksi nyata seperti bersih-bersih dan penanaman pohon, serta peran aktif masyarakat dan penggerak lokal untuk menjaga lingkungan.',
    category: 'Edukasi',
    imageUrl: '/images/lingkungan.png',
    date: '25 Nov 2025',
    source: 'kuripankidul.desa.id',
    url: 'https://shorturl.at/rMNAG'
  },
  {
    id: '4',
    title: 'Contoh Teknologi Ramah Lingkungan Beserta Manfaatnya',
    excerpt: 'Gambaran berbagai teknologi ramah lingkungan seperti panel surya, turbin angin, dan kendaraan listrik yang membantu mengurangi polusi serta menjaga keberlanjutan bumi.',
    category: 'Edukasi',
    imageUrl: '/images/artikel 4.png',
    date: '25 Nov 2025',
    source: 'vida.id',
    url: 'https://shorturl.at/EYK1w'
  },
  {
    id: '5',
    title: 'Lingkungan Bersih Ciptakan Hidup Sehat',
    excerpt: 'Kebersihan lingkungan menjadi faktor penting dalam menciptakan kehidupan yang sehat. Upaya menjaga kebersihan dapat mengurangi penyakit dan meningkatkan kualitas hidup.',
    category: 'Gaya Hidup',
    imageUrl: '/images/artikel 5.png',
    date: '25 Nov 2025',
    source: 'dlh.bulelengkab.go.id',
    url: 'https://shorturl.at/fZ9xv'
  },
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/images/galeri 1.png',
    title: 'Kegiatan Menanam Pohon',
    date: '26 November 2025',
    description: 'Gerakan kolaboratif masyarakat dalam menanam pohon sebagai langkah nyata menjaga ekosistem dan memperbaiki kualitas lingkungan.'
  },
  {
    id: 2,
    image: '/images/galeri 2.png',
    title: 'Kegiatan Bersih-bersih Lingkungan',
    date: '26 November 2025',
    description: 'Gotong royong warga dalam memungut sampah, memilah limbah, dan melakukan penanaman untuk menciptakan lingkungan yang lebih bersih dan asri.'
  },
  {
    id: 3,
    image: '/images/galeri 3.png',
    title: 'Pembersihan Sungai / Pantai',
    date: '26 November 2025',
    description: 'Kegiatan aksi bersih-bersih di area sungai/pantai sebagai upaya menjaga kebersihan lingkungan dan mengurangi pencemaran.'
  },
  {
    id: 4,
    image: '/images/galeri 4.png',
    title: 'Edukasi Lingkungan (Workshop / Sosialisasi)',
    date: '26 November 2025',
    description: 'Kegiatan workshop dan sosialisasi yang membahas pentingnya pelestarian lingkungan serta praktik ramah lingkungan.'
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
  
  // State untuk "Lihat Semua" Artikel
  const [showAllArticles, setShowAllArticles] = useState(false);
  
  // State untuk Modal Galeri
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

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

  // Logic untuk menampilkan artikel (Semua atau Terbatas 4)
  const displayedArticles = showAllArticles ? articles : articles.slice(0, 4);

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
              src="/images/bank-sampah-beranda.png" 
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
            {/* Tombol Lihat Semua yang Fungsional */}
            {articles.length > 4 && (
              <button 
                onClick={() => setShowAllArticles(!showAllArticles)}
                className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                {showAllArticles ? 'Lebih Sedikit' : 'Lihat Semua'} 
                {showAllArticles ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up">
            {displayedArticles.map((article) => (
              <a 
                key={article.id} 
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700 cursor-pointer flex flex-col will-change-transform"
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
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
                <div className="p-5 flex-1 flex flex-col">
                  {/* Menampilkan Sumber Artikel dan Tanggal */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{article.source}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-primary transition-colors mt-auto">
                    Baca Selengkapnya <ExternalLink size={14} className="ml-2" />
                  </div>
                </div>
              </a>
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
               Klik foto untuk melihat detail kegiatan dan momen kebersamaan kami dalam melestarikan lingkungan.
             </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
             {galleryItems.map((item) => (
               <div 
                  key={item.id} 
                  className="rounded-2xl overflow-hidden h-72 group relative shadow-lg cursor-pointer bg-slate-100 dark:bg-slate-800"
                  onClick={() => setSelectedGalleryItem(item)}
               >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1591191853878-8b4474469777?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1 block">Dokumentasi</span>
                    <h4 className="text-white font-bold text-lg leading-tight mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      Klik untuk detail kegiatan
                    </p>
                  </div>
               </div>
             ))}
          </div>
        </section>

      </div>

      {/* Gallery Modal (Lightbox) */}
      {selectedGalleryItem && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <X size={20} />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-2/3 bg-black flex items-center justify-center h-64 md:h-auto">
              <img 
                src={selectedGalleryItem.image} 
                alt={selectedGalleryItem.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1591191853878-8b4474469777?q=80&w=1000&auto=format&fit=crop`;
                }}
              />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/3 p-8 flex flex-col overflow-y-auto">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-bold bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full mb-4">
                  <Calendar size={14} />
                  {selectedGalleryItem.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                  {selectedGalleryItem.title}
                </h3>
                <div className="w-12 h-1 bg-emerald-500 rounded-full mb-6"></div>
                
                <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {selectedGalleryItem.description}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                 <div className="flex items-start gap-3">
                   <MapPin className="text-slate-400 shrink-0 mt-1" size={18} />
                   <div>
                     <span className="block text-xs font-bold text-slate-400 uppercase">Lokasi Kegiatan</span>
                     <span className="text-slate-800 dark:text-slate-200 font-medium text-sm">Indonesia, Bumi Pertiwi</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Education;
