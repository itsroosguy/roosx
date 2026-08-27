export interface Project {
  id: string;
  title: string;
  category: '3d-spatial' | 'branding' | 'web-app' | 'ai-motion';
  categoryLabel: string;
  client: string;
  year: string;
  description: string;
  fullDescription: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  thumbnail: string;
  heroImage: string;
  galleryImages: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
  colSpan?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectTag: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: string;
  priceAnnual: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface InquiryFormData {
  serviceTypes: string[];
  budgetRange?: string;
  projectStage?: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  projectDetails: string;
}
