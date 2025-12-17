export interface EventItem {
  id: number;
  date: string;
  title: string;
  description: string;
  location: string;
  asset: {
    url: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  asset: {
    url: string;
  };
}