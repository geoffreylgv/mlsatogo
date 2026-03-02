// ========================================
// Centralized data file for MSA Togo
// Edit arrays below to update site content
// ========================================

// --- Partners ---
export type Partner = {
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  { name: "Microsoft", logo: "/images/clients/microsoft.svg" },
  { name: "GitHub", logo: "/images/clients/github.png" },
  { name: "MSA", logo: "/images/clients/MLSA.png" },
  { name: "MUG Lomé", logo: "/images/clients/muglome.png" },
  { name: ".NET Cameroon", logo: "/images/clients/dotnetcameroon.png" },
  { name: "NgCodex", logo: "/images/clients/ngcodex.png" },
];

// --- Videos ---
export type Video = {
  id: string;
  title: string;
  titleFr: string;
  thumbnail: string;
};

export const videos: Video[] = [
  {
    id: "awPDSdxw9LQ",
    title: "Managing Identities with Microsoft Entra ID",
    titleFr: "Gérer les identités avec Microsoft Entra ID",
    thumbnail: "https://img.youtube.com/vi/awPDSdxw9LQ/maxresdefault.jpg",
  },
  {
    id: "zNgjt8XaX_M",
    title: "Unlocking Your Student Pack on GitHub with GitHub Student Developer Pack",
    titleFr: "Debloquer votre pack GitHub Education avec GitHub Student Developer Pack",
    thumbnail: "https://img.youtube.com/vi/zNgjt8XaX_M/maxresdefault.jpg",
  },
  {
    id: "qk4MaQtuazI",
    title: "Getting Started with Power BI Report Server",
    titleFr: "Prise en main de Power BI eport Server",
    thumbnail: "https://img.youtube.com/vi/qk4MaQtuazI/maxresdefault.jpg",
  },
];

// --- Events ---
export type Event = {
  title: string;
  date: string;
  location: string;
  type: "past" | "upcoming";
  description: string;
};

export const events: Event[] = [
  {
    title: "Azure AI Workshop",
    date: "2025-01-15",
    location: "Lomé, Togo",
    type: "past",
    description: "Hands-on workshop on Azure AI services and Cognitive APIs.",
  },
  {
    title: "GitHub Copilot Hackathon",
    date: "2024-11-20",
    location: "Université de Lomé",
    type: "past",
    description: "A full-day hackathon building projects with GitHub Copilot.",
  },
  {
    title: "Cloud Skills Challenge",
    date: "2024-09-10",
    location: "Online",
    type: "past",
    description: "30-day cloud skills challenge with Microsoft Learn paths.",
  },
  {
    title: "MSA Togo Meetup #3",
    date: "2024-07-05",
    location: "Lomé, Togo",
    type: "past",
    description: "Community meetup with tech talks and networking.",
  },
];

// --- Members ---
export type Member = {
  name: string;
  photo: string;
  tier: "new" | "beta" | "gold";
  role?: string;
  linkedin?: string;
};

export const members: Member[] = [
  { name: "Geoffrey Logovi", photo: "/images/avatars/geo.png", tier: "gold", role: "IT Engineer, Cloud" },
  { name: "Ghislain M.", photo: "/images/avatars/ghislain.jpg", tier: "beta", role: "Cyber Security Expert" },
  { name: "Wachiou Bouraima", photo: "/images/avatars/wasscodeur.jpg", tier: "beta", role: "Python Developer" },
  { name: "Pakou", photo: "/images/avatars/pakou.jpg", tier: "new", role: "Developer" },
  { name: "Samadou", photo: "/images/avatars/samadou.jpg", tier: "new", role: "Developer" },
];

// --- Header past events (shown in nav dropdown) ---
export type HeaderEvent = {
  title: string;
  date: string;
};

export const headerPastEvents: HeaderEvent[] = [
  { title: "Azure AI Workshop", date: "Jan 2025" },
  { title: "GitHub Copilot Hackathon", date: "Nov 2024" },
  { title: "Cloud Skills Challenge", date: "Sep 2024" },
  { title: "MSA Togo Meetup #3", date: "Jul 2024" },
];
