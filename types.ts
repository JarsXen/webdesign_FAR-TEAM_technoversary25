
export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'Edukasi' | 'Inovasi' | 'Gaya Hidup';
  imageUrl: string;
  date: string;
  url: string;
  source: string;
}

export interface WasteType {
  id: string;
  name: string;
  pricePerKg: number;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}
