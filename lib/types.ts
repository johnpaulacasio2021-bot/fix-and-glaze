export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  materials?: string[];
  glassTypes?: string[];
  applications?: string[];
  doorTypes?: string[];
  services?: string[];
  idealFor: string;
  benefits: string[];
  whatsIncluded: string[];
  emergency?: boolean;
  emergencyResponse?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  serviceType: string;
  location: string;
  clientType: "Residential" | "Commercial";
  shortDescription: string;
  challenge: string;
  solution: string;
  result: string;
  materials: string[];
  images: string[];
  date: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location?: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  propertyType: "Residential" | "Commercial";
  location: string;
  message: string;
  source?: string;
}
