
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Zap, ShieldCheck, Trash2, Trees, Recycle, Map, CheckCircle2, Play, Scan, Award, BarChart3, X, Loader2 } from 'lucide-react';

const TiltCard = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    const x = yPct * -15;
    const y = xPct * 15;
    
    setRotate({ x, y });
    setGlare({ x: (mouseX / width) * 100, y: (mouseY / height) * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ ...glare, opacity: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform overflow-hidden ${className}`}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transformStyle: 'preserve-3d',
        isolation: 'isolate',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)', 
      }}
    >
      {children}
      
      <div 
        className="absolute inset-0 pointer-events-none rounded-3xl z-20 mix-blend-overlay"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`,
          opacity: glare.opacity,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
};

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const SimulationModal: React.FC<SimulationModalProps> = ({ isOpen, onClose, title }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      const timer1 = setTimeout(() => setStep(1), 800);
      const timer2 = setTimeout(() => setStep(2), 2500);
      return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }
  }, [isOpen, title]);

  if (!isOpen) return null;

  const renderContent = () => {
    if (title.includes("Adopsi") || title.includes("Sertifikat")) {
      return (
        <div className="flex flex-col items-center text-center p-4">
          {step < 2 ? (
            <div className="py-10">
              <Loader2 className="animate-spin text-emerald-500 mb-4" size={48} />
              <p className="text-slate-500 animate-pulse">Memproses Data Adopsi...</p>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 border-4 border-double border-emerald-200 dark:border-emerald-900 p-8 rounded-xl shadow-lg w-full max-w-sm animate-in zoom-in duration-300">
              <Award className="mx-auto text-yellow-500 mb-4" size={64} />
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">Sertifikat Adopsi</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Diberikan kepada <span className="font-bold text-slate-800 dark:text-slate-200">Pengunjung #2025</span> atas kontribusi penanaman 1 pohon Mangrove.</p>
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded text-xs text-emerald-700 dark:text-emerald-300 font-mono">
                ID: TREE-2025-XE92
              </div>
            </div>
          )}
        </div>
      );
    } 
    
    else if (title.includes("Monitoring") || title.includes("Scan")) {
       return (
        <div className="w-full h-64 bg-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center">
          {/* Map Grid Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {step < 2 ? (
             <div className="absolute w-full h-2 bg-emerald-500/50 blur-md top-0 animate-[float_2s_linear_infinite]" style={{ animation: 'scan 2s linear infinite' }}></div>
          ) : (
             <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold mb-2 animate-pulse">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> LIVE SATELLITE
                </div>
                <div className="text-white text-4xl font-mono font-bold">98.5%</div>
                <div className="text-emerald-400 text-xs">Health Index Area A-12</div>
             </div>
          )}
          
          <style>{`
            @keyframes scan {
              0% { top: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          `}</style>
        </div>
       )
    }

    else if (title.includes("Tracking") || title.includes("Laporan")) {
      return (
        <div className="w-full space-y-4 p-4">
           {['Sampah Dijemput', 'Sampah Dipilah', 'Daur Ulang Selesai'].map((status, idx) => (
             <div key={idx} className={`flex items-center gap-4 transition-all duration-500 ${step >= idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
               <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= idx ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 text-slate-300'}`}>
                 {step >= idx && <CheckCircle2 size={16} />}
               </div>
               <div className="flex-1">
                 <div className={`font-bold ${step >= idx ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{status}</div>
                 <div className="text-xs text-slate-500">Update: {new Date().toLocaleTimeString()}</div>
               </div>
             </div>
           ))}
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center justify-center p-6 h-64">
        <BarChart3 size={64} className="text-slate-300 dark:text-slate-600 mb-4" />
        <div className="flex items-end gap-2 h-32 w-full justify-center">
          {[40, 70, 50, 90, 60].map((h, i) => (
            <div 
              key={i} 
              className="w-8 bg-emerald-500 rounded-t-lg transition-all duration-1000 ease-out"
              style={{ height: step > 0 ? `${h}%` : '0%' }}
            ></div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4 font-bold">Statistik Realtime: {title}</p>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-white/20">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
               <Scan size={20} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 dark:text-white">Simulasi Fitur</h3>
               <p className="text-xs text-slate-500">{title}</p>
             </div>
           </div>
           <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500">
             <X size={20} />
           </button>
        </div>
        
        {/* Body */}
        <div className="p-6 bg-slate-50 dark:bg-black/20 min-h-[300px] flex items-center justify-center">
           {renderContent()}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center">
           <p className="text-xs text-slate-400">Ini adalah simulasi interaktif untuk keperluan demonstrasi Technoversary 2025.</p>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("");

  const handleFeatureClick = (featureName: string) => {
    setActiveFeature(featureName);
    setModalOpen(true);
  };

  const programs = [
    {
      id: 'bank-sampah',
      title: 'Bank Sampah',
      desc: 'Tukar sampah anorganik jadi poin bernilai ekonomi.',
      icon: Trash2,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-900/30',
      border: 'border-emerald-200 dark:border-emerald-800',
      shadow: 'shadow-emerald-600',
      image: '/images/bank-sampah-beranda.png',
      linkText: 'Panduan Pemilahan',
      linkUrl: '/guide',
      features: ['Tracking Realtime', 'Tukar Poin', 'Jemput Bola']
    },
    {
      id: 'konservasi',
      title: 'Konservasi',
      desc: 'Adopsi pohon dan pantau penghijauan hutan via satelit.',
      icon: Trees,
      color: 'text-teal-600 dark:text-teal-400',
      bg: 'bg-teal-50 dark:bg-teal-900/30',
      border: 'border-teal-200 dark:border-teal-800',
      shadow: 'shadow-teal-600',
      image: '/images/konservasi-pohon.png',
      linkText: 'Lihat Peta',
      linkUrl: '/education',
      features: ['Adopsi Pohon', 'Monitoring AI', 'Laporan Tumbuh']
    },
    {
      id: 'zero-waste',
      title: 'Zero Waste',
      desc: 'Edukasi gaya hidup minim sampah untuk pemula.',
      icon: Recycle,
      color: 'text-slate-700 dark:text-slate-300',
      bg: 'bg-slate-50 dark:bg-slate-800/50',
      border: 'border-slate-200 dark:border-slate-700',
      shadow: 'shadow-slate-600',
      image: '/images/Zero Waste.png',
      linkText: 'Mulai Belajar',
      linkUrl: '/education',
      features: ['Modul Belajar', 'Tantangan 30 Hari', 'Komunitas']
    },
    {
      id: 'eco-tour',
      title: 'Eco Tour',
      desc: 'Wisata alam sambil berkontribusi membersihkan lingkungan.',
      icon: Map,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-800',
      shadow: 'shadow-blue-600',
      image: '/images/Eco Tour.png',
      linkText: 'Daftar Trip',
      linkUrl: '/contact',
      features: ['Wisata Minim Karbon', 'Volunteering', 'Workshop Lokal']
    }
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-10">
      
      {/* Simulation Modal */}
      <SimulationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={activeFeature} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 md:pt-0 overflow-hidden">
        {/* Mesh Gradients Background */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-300/30 dark:bg-emerald-600/20 rounded-full blur-[100px] animate-float will-change-transform"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-400/20 dark:bg-teal-600/10 rounded-full blur-[100px] animate-float will-change-transform" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="animate-fade-up space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 border border-emerald-100 dark:border-emerald-900 backdrop-blur-sm shadow-sm w-fit">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide uppercase">Technoversary 2025 Entry</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-slate-900 dark:text-white tracking-tight">
                Digitalisasi <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-300 dark:to-blue-400 animate-gradient">
                  Masa Depan
                </span>
                <br /> Lingkungan
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Platform interaktif yang menggabungkan edukasi, aksi nyata, dan teknologi untuk menciptakan ekosistem berkelanjutan bagi generasi mendatang.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/education" 
                  className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white font-medium hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
                >
                  Mulai Eksplorasi <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:shadow-md flex items-center gap-2"
                >
                  Gabung Aksi
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="pt-4 flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-700/60 max-w-md">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-emerald-500" size={18} />
                  <span>Materi Terpercaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-yellow-500" size={18} />
                  <span>Asisten EcoBot</span>
                </div>
              </div>
            </div>

            {/* Hero Image / Visual */}
            <div className="relative lg:h-[600px] w-full flex items-center justify-center animate-float will-change-transform">
               {/* Abstract shapes */}
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 dark:from-emerald-500/20 dark:to-blue-500/20 rounded-[3rem] rotate-3 blur-2xl transform scale-90"></div>
               
               {/* Main Image Container */}
               <TiltCard className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] shadow-2xl border-4 border-white/50 dark:border-slate-700/50 overflow-hidden bg-slate-200 dark:bg-slate-800">
                 <img 
                   src="/images/hero-bg.jpg" 
                   alt="Green Future" 
                   className="w-full h-full object-cover scale-110"
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = '/images/beranda.png'; 
                   }}
                 />
                 {/* Floating Card Overlay */}
                 <div className="absolute bottom-8 left-8 right-8 glass dark:bg-slate-900/80 dark:border-slate-700 p-4 rounded-2xl flex items-center gap-4 animate-fade-up" style={{ transform: 'translateZ(40px)' }}>
                   <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-xl text-emerald-600 dark:text-emerald-400">
                     <Sprout size={24} />
                   </div>
                   <div>
                     <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Status Planet</div>
                     <div className="text-slate-900 dark:text-white font-bold">Perlu Aksi Nyata Sekarang</div>
                   </div>
                 </div>
               </TiltCard>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-4 tracking-wide uppercase">
            Pilar EcoDigital
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Program Unggulan
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Pilih program yang sesuai dengan passion lingkunganmu. Klik fitur di dalam kartu untuk melihat simulasi.
          </p>
        </div>

        {/* 3D Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((item) => (
            <TiltCard 
              key={item.id}
              className={`
                group bg-white dark:bg-slate-800 rounded-3xl border-2 ${item.border}
                shadow-[0_6px_0_0_rgba(0,0,0,0)] ${item.shadow.replace('shadow-', 'shadow-[0_6px_0_0_')}
              `}
            >
              {/* Card Image Header */}
              <div className="h-48 overflow-hidden relative border-b-2 border-slate-100 dark:border-slate-700 rounded-t-[1.4rem]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ transform: 'translateZ(20px)' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=EcoDigital';
                  }}
                />
                <div 
                  className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-xl font-bold text-xs shadow-lg flex items-center gap-2"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <item.icon size={14} className={item.color} />
                  <span className="text-slate-800 dark:text-slate-200">{item.title}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8" style={{ transform: 'translateZ(20px)' }}>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Interactive Mini Features List */}
                <div className="space-y-3 mb-8">
                  {item.features.map((feat, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => handleFeatureClick(feat)}
                      className="w-full flex items-center justify-between gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 group/btn transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                         <CheckCircle2 size={16} className={`${item.color} opacity-60`} />
                         <span>{feat}</span>
                      </div>
                      <div className="opacity-0 group-hover/btn:opacity-100 transition-opacity text-emerald-500">
                        <Play size={12} fill="currentColor" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Action Button Area */}
                <Link 
                  to={item.linkUrl}
                  className={`
                    w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all
                    ${item.bg} ${item.color} hover:brightness-95
                    transform hover:translate-z-10 relative z-20
                  `}
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {item.linkText} <ArrowRight size={16} />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 text-white">
           {/* Background Image with overlay */}
           <div className="absolute inset-0 z-0">
             <img 
               src="/images/cta-planting.jpg" 
               alt="CTA" 
               className="w-full h-full object-cover opacity-40"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop';
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
           </div>

           <div className="relative z-10 p-10 md:p-20 max-w-3xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
                <Sprout size={16} />
                <span>Gerakan 1 Juta Pohon</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
               Siap Menjadi Bagian dari <br/> <span className="text-emerald-400">Perubahan Besar?</span>
             </h2>
             <p className="text-lg text-slate-300 mb-8 leading-relaxed">
               Jangan biarkan ide hanya menjadi wacana. Bergabunglah dengan ribuan relawan lainnya untuk menciptakan dampak nyata hari ini.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
               <Link 
                 to="/contact" 
                 className="px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30 text-center"
               >
                 Daftar Sekarang Gratis
               </Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
