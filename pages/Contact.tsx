import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Globe, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
       {/* Hero Contact */}
       <div className="bg-slate-900 dark:bg-black pt-32 pb-32 rounded-b-[3rem] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
             <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Hubungi Kami</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Punya ide kolaborasi atau pertanyaan seputar program lingkungan? Kami siap mendengar.
            </p>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
         <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 dark:border-slate-700">
           
           {/* Info Section */}
           <div className="lg:w-2/5 bg-gradient-to-br from-emerald-900 to-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div>
                <h2 className="text-2xl font-bold mb-8">Informasi Kontak</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <MapPin size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Lokasi</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Gedung Technoversary, Lt. 3<br />
                        Jl. Pendidikan No. 25<br />
                        Jakarta Selatan, 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <Mail size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-slate-300">halo@ecodigital.id</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <Phone size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Telepon</h3>
                      <p className="text-slate-300">+62 (21) 555-0123</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold mb-4">Ikuti Kami</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
           </div>

           {/* Form Section */}
           <div className="lg:w-3/5 p-10 md:p-14 bg-white dark:bg-slate-800">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Kirim Pesan</h2>
             <p className="text-slate-500 dark:text-slate-400 mb-8">Isi formulir di bawah ini untuk memulai percakapan.</p>

             {formStatus === 'success' ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-up">
                 <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                   <Send size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Pesan Terkirim!</h3>
                 <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-8">Terima kasih. Tim kami akan segera merespon pesan Anda.</p>
                 <button 
                   onClick={() => setFormStatus('idle')}
                   className="text-primary font-bold hover:underline"
                 >
                   Kirim pesan baru
                 </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Nama Lengkap</label>
                     <input 
                       type="text" 
                       required
                       className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 outline-none transition dark:text-white"
                       placeholder="John Doe"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                     <input 
                       type="email" 
                       required
                       className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 outline-none transition dark:text-white"
                       placeholder="email@anda.com"
                     />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Topik</label>
                   <select className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 outline-none transition dark:text-white">
                     <option>Pertanyaan Umum</option>
                     <option>Kerjasama Kampanye</option>
                     <option>Saran & Masukan</option>
                   </select>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Pesan</label>
                   <textarea 
                     rows={4}
                     required
                     className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 outline-none transition resize-none dark:text-white"
                     placeholder="Tuliskan detail pesan Anda..."
                   ></textarea>
                 </div>

                 <button 
                   type="submit"
                   disabled={formStatus === 'submitting'}
                   className="w-full bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                 >
                   {formStatus === 'submitting' ? 'Mengirim...' : 'Kirim Pesan Sekarang'}
                   {!formStatus && <Send size={18} />}
                 </button>
               </form>
             )}
           </div>
         </div>
       </div>
    </div>
  );
};

export default Contact;