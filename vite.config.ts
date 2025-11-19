import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Memuat environment variable berdasarkan mode saat ini dari file .env
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Polyfill untuk process.env.API_KEY agar kode service tetap berjalan
      // Mengambil nilai dari VITE_API_KEY yang ada di file .env
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY),
    }
  };
});