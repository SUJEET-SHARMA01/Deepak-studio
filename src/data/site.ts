import heroImage from "@/assets/hero-wedding.jpg";
import weddingCollection from "@/assets/wedding-collection.jpg";
import eventCollection from "@/assets/event-collection.jpg";
import studioTeam from "@/assets/studio-team.jpg";

export const siteConfig = {
  name: "Deepak Studio",
  email: "deepakstudio@gmail.com",
  phone: "+91 82940 54666",
  whatsapp: "+91 82940 54666",
  location: "Tedhighat Bazar,Andar Road,Siwan, Bihar, India",
  whatsappMessage:
    "Hello, I would like to enquire about your photography and videography services.",
};

export const images = { heroImage, weddingCollection, eventCollection, studioTeam };

export const services = [
  {
    name: "Wedding Photography",
    description: "Honest, elegant frames from every chapter of your celebration.",
    image: weddingCollection,
    position: "0% 0%",
  },
  {
    name: "Wedding Videography",
    description: "Cinematic films shaped by movement, sound, and the feeling of the day.",
    image: weddingCollection,
    position: "100% 0%",
  },
  {
    name: "Pre-Wedding Shoot",
    description: "Relaxed editorial portraits in a location meaningful to you.",
    image: heroImage,
    position: "center",
  },
  {
    name: "Birthday Photography",
    description: "Joyful, vivid coverage of milestones shared with your people.",
    image: eventCollection,
    position: "100% 0%",
  },
  {
    name: "Engagement Photography",
    description: "Intimate storytelling with timeless portraits and candid moments.",
    image: weddingCollection,
    position: "0% 0%",
  },
  {
    name: "Corporate Events",
    description: "Polished event coverage that reflects your brand at its best.",
    image: eventCollection,
    position: "0% 0%",
  },
  {
    name: "Traditional & Religious",
    description: "Respectful documentation of rituals, details, and generations together.",
    image: eventCollection,
    position: "0% 100%",
  },
  {
    name: "Custom Event Packages",
    description: "Flexible photography and film coverage built around your occasion.",
    image: studioTeam,
    position: "center",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "The Quiet Before",
    category: "Weddings",
    image: weddingCollection,
    position: "0% 0%",
    tall: true,
  },
  {
    id: 2,
    title: "First Dance",
    category: "Weddings",
    image: weddingCollection,
    position: "100% 0%",
    tall: false,
  },
  {
    id: 3,
    title: "Golden Vows",
    category: "Pre-Wedding",
    image: heroImage,
    position: "center",
    tall: false,
  },
  {
    id: 4,
    title: "A Wish at Midnight",
    category: "Birthdays",
    image: eventCollection,
    position: "100% 0%",
    tall: true,
  },
  {
    id: 5,
    title: "On the Main Stage",
    category: "Events",
    image: eventCollection,
    position: "0% 0%",
    tall: false,
  },
  {
    id: 6,
    title: "Sacred Light",
    category: "Events",
    image: eventCollection,
    position: "0% 100%",
    tall: true,
  },
  {
    id: 7,
    title: "Stillness",
    category: "Portraits",
    image: eventCollection,
    position: "50% 100%",
    tall: true,
  },
  {
    id: 8,
    title: "Afterglow",
    category: "Portraits",
    image: eventCollection,
    position: "100% 100%",
    tall: false,
  },
];

export const packages = [
  {
    name: "Basic Package",
    subtitle: "For intimate gatherings",
    features: [
      "1 Photographer",
      "4 Hours Coverage",
      "Professionally Edited Photos",
      "Online Gallery",
    ],
    label: "Contact for Price",
  },
  {
    name: "Premium Package",
    subtitle: "The complete visual story",
    features: [
      "2 Photographers",
      "Photography + Videography",
      "Full Event Coverage",
      "Cinematic Highlight Film",
      "Online Gallery",
    ],
    label: "Get Quote",
    featured: true,
  },
  {
    name: "Custom Package",
    subtitle: "Designed around your event",
    features: [
      "Tailored Team & Coverage",
      "Multi-Day Options",
      "Albums & Films Available",
      "Dedicated Planning Call",
    ],
    label: "Build My Package",
  },
];

export const testimonials = [
  {
    quote:
      "They captured the warmth, chaos and joy exactly as we remember it. Every frame feels alive.",
    name: "Aisha & Rohan",
    event: "Wedding celebration",
  },
  {
    quote: "Calm, punctual and brilliantly creative. Our event film feels like a cinema premiere.",
    name: "Priya Menon",
    event: "Corporate gala",
  },
  {
    quote: "We forgot the cameras were there. The result was honest, beautiful, and completely us.",
    name: "Meera & Dev",
    event: "Engagement session",
  },
];
