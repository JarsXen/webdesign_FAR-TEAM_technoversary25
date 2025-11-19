import { GoogleGenAI } from "@google/genai";

export const generateEcoTip = async (topic: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Berikan tips praktis, singkat, dan inovatif tentang "${topic}" untuk gaya hidup ramah lingkungan di Indonesia. Maksimal 2 kalimat. Gunakan bahasa yang santai dan mengajak.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text || "Maaf, saya sedang istirahat sejenak. Coba lagi nanti ya!";
  } catch (error) {
    console.error("Error generating tip:", error);
    return "Jaga lingkungan mulai dari hal kecil, buang sampah pada tempatnya!";
  }
};

export const chatWithEcoBot = async (message: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Kamu adalah EcoBot, asisten pintar untuk website EcoDigital Nusantara. Jawab pertanyaan berikut terkait lingkungan hidup, daur ulang, atau konservasi alam dengan ramah dan edukatif: "${message}". Jawab maksimal dalam 3-4 kalimat.`,
    });
    return response.text || "Maaf, saya tidak dapat memproses permintaan tersebut saat ini.";
  } catch (error) {
    console.error("EcoBot error:", error);
    return "Maaf, koneksi ke server EcoBot sedang sibuk. Silakan periksa konfigurasi API Key Anda atau coba lagi nanti.";
  }
};