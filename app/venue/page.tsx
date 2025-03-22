import VenueContent from './VenueContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venue Facilities & Spaces | Raj Palace & Convention',
  description: 'Explore our luxurious venue facilities including grand halls, garden lawns, conference rooms, and modern amenities. Perfect for weddings, corporate events, and special occasions.',
  keywords: ['venue facilities', 'wedding halls', 'conference rooms', 'garden lawns', 'event spaces', 'Raj Palace venues', 'luxury event spaces'],
  openGraph: {
    title: 'Venue Facilities & Spaces | Raj Palace & Convention',
    description: 'Explore our luxurious venue facilities including grand halls, garden lawns, conference rooms, and modern amenities.',
    images: [
      {
        url: '/images/optimized/wedding_stage.jpg',
        width: 1200,
        height: 630,
        alt: 'Raj Palace Venue Facilities',
      },
    ],
  },
};

export default function VenuePage() {
  return <VenueContent />;
} 