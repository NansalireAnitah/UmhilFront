export type Accent = 'emerald' | 'gold' | 'navy';

export type Company = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  externalUrl: string;
  accent: Accent;
};

export const companies: Company[] = [
  {
    slug: 'hajj-umrah',
    name: 'Umuhil Hajj & Umrah',
    tagline: 'Guided pilgrimage, handled end to end',
    description:
      'A complete pilgrimage service, from visa processing to the flight home, with religious guidance available at every step of the journey.',
    features: [
      'Umrah Packages',
      'Hajj Packages',
      'Visa Processing',
      'Hotel Reservations',
      'Flight Booking',
      'Religious Guidance',
    ],
    ctaLabel: 'Plan your pilgrimage',
    externalUrl: '#',
    accent: 'emerald',
  },
  {
    slug: 'tours-travel',
    name: 'Umuhil Tours & Travel',
    tagline: 'Uganda, East Africa, and beyond',
    description:
      'Holiday and corporate travel services across Uganda, East Africa, and international destinations, planned by people who know the routes.',
    features: [
      'Holiday Packages',
      'Hotel Booking',
      'Flight Reservations',
      'Tour Packages',
      'Corporate Travel',
      'Airport Transfers',
      'Travel Consultation',
    ],
    ctaLabel: 'Explore destinations',
    externalUrl: '#',
    accent: 'gold',
  },
  {
    slug: 'rides',
    name: 'Umuhil Rides',
    tagline: 'A ride, tracked and priced fairly',
    description:
      'A smart transportation platform connecting passengers with drivers, with real-time tracking and upfront fares.',
    features: [
      'Ride Booking',
      'Real-Time GPS Tracking',
      'Route Navigation',
      'Fare Estimation',
      'Driver Ratings',
      'Secure Payments',
    ],
    ctaLabel: 'Book a ride',
    externalUrl: '#',
    accent: 'navy',
  },
  {
    slug: 'ummah',
    name: 'Ummah Organization',
    tagline: 'Community development and care',
    description:
      'The humanitarian arm of the group, working in education, youth empowerment, and community welfare.',
    features: [
      'Education',
      'Community Development',
      'Youth Empowerment',
      'Charity Projects',
      'Health Campaigns',
      'Religious Programs',
    ],
    ctaLabel: 'Visit the portal',
    externalUrl: '#',
    accent: 'emerald',
  },
];