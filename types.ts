export interface CakeProject {
  id: string;
  title: string;
  category: 'Wedding' | 'Debutante' | 'Corporate' | 'Artistic';
  imageUrl: string;
  baseDescription: string; // The factual description
  aiStory?: string; // The generated artistic story
}

export interface TastingBoxParams {
  month: string;
  flavors: string[];
  availableQty: number;
  price: number;
}

export enum Section {
  HOME = 'home',
  PORTFOLIO = 'portfolio',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}