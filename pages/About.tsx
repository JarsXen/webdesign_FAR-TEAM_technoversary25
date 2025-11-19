
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Users, Target, Heart, Maximize2, X, ImageOff, Quote } from 'lucide-react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { 
    name: "Fajar Irwansah", 
    role: "Front End Developer", 
    image: "/images/fajar.jpg" 
  },
  { 
    name: "LM.Arya Randani", 
    role: "UI/UX Designer", 
    image: "/images/arya.jpg" 
  },
];

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (selectedMember) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedMember]);

  const handleImageError = (name: string) => {
    setImgError(prev => ({ ...prev, [name]: true }));
  };

  return (
    <div className="pb-20">
      {/* Header with Abstract BG */}
      <div className="relative bg-slate-900 dark:bg-black text-white py-32 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -left-20 bottom-0 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Know Us Better</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Menggabungkan passion teknologi dengan kepedulian lingkungan untuk Technoversary 2025.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-900 dark:to-teal-900 rounded-[2rem] blur-lg opacity-50"></div>
             <img 
                src="/images/about-mission.jpg" 
                alt="Misi Kami" 
                className="relative rounded-[2rem] shadow-2xl w-full object-cover z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop';
                }}
              />
              <div className="absolute -bottom-10 -right-10 z-20 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-xs hidden md:block animate-float animation-delay-1000">
                <Quote className="text-emerald-500 mb-4" size={32} />
                <p className="text-slate-600 dark:text-slate-300 font-medium italic">"Technology is best when it brings people together for a cause."</p>
              </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Lebih Dari Sekedar Website</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
              EcoDigital Nusantara adalah manifestasi ide kami dalam lomba Web Design Technoversary 2025. Kami ingin membuktikan bahwa baris kode dapat menjadi jembatan menuju bumi yang lebih lestari.
            </p>
            
            <div className="space-y-6 mt-8">
              {[
                { title: "Edukasi Interaktif", desc: "Belajar lingkungan dengan cara menyenangkan." },
                { title: "Aksi Nyata", desc: "Fitur yang mendorong implementasi langsung." },
                { title: "Desain Humanis", desc: "UI/UX yang memanusiakan pengguna." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Tim Kreatif</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Dua pikiran, satu tujuan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700">
              {/* Image Area */}
              <div 
                className="relative h-[450px] overflow-hidden cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                {imgError[member.name] ? (
                  <div className="h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-400">
                    <ImageOff size={48} className="mb-4 opacity-50" />
                    <p>Foto tidak tersedia</p>
                  </div>
                ) : (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    onError={() => handleImageError(member.name)}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Zoom Icon */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:text-slate-900">
                  <Maximize2 size={20} />
                </div>
              </div>

              {/* Info Card Floating */}
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="glass-card dark:bg-slate-900/80 p-5 rounded-2xl backdrop-blur-xl border-none shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                   <div className="flex items-center justify-between mt-1">
                     <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
                     <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                       <Users size={14} />
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div className="relative max-w-4xl w-full max-h-screen flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition p-2"
            >
              <X size={32} />
            </button>
            
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={imgError[selectedMember.name] ? "https://placehold.co/600x400?text=No+Image" : selectedMember.image} 
                alt={selectedMember.name} 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            
            <div className="mt-6 text-center">
               <h3 className="text-3xl font-bold text-white">{selectedMember.name}</h3>
               <p className="text-emerald-400 text-lg mt-2 font-medium">{selectedMember.role}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
