import { Project, Skill } from './types';

export const bishojProfile = {
  name: 'Bishoj Basnet',
  title: 'Graphic Designer & Creative Thinker',
  location: 'Nepal',
  experience: '6+ months in graphic design',
  focus: 'Branding, Posters, Digital Advertising',
  goal: 'Building modern and memorable visual identities',
  avatarUrl: '/src/assets/images/bishoj_profile_1782873085220.jpg',
  aboutText: `Form, function, and a bit of digital magic. I’m Bishoj Basnet, a modern graphic designer who builds crisp visual narratives.

My work focuses on bringing a premium, contemporary feel to digital spaces. From isolating the perfect texture in an advertisement to balancing whitespace in a layout, I thrive on the details that turn a good design into a stunning one.

I don't just create graphics; I build the visual assets that define how a brand moves through the digital world.`,
};

export const projectsData: Project[] = [
  {
    id: 'dishwasher-poster',
    title: 'Dishwasher Advertisement Poster',
    category: 'Poster Design',
    imageUrl: '/src/assets/images/dishwasher_poster_1782873100505.jpg',
    description: 'A premium kitchen appliance marketing poster blending hyper-crisp studio lighting, high-velocity water splash visuals, and elegant typography.',
    year: '2026',
    client: 'AeroLine Appliances',
    tags: ['Ad Design', 'Photoshop', 'Key Visual', 'Retouching'],
    challenge: 'Communicating ultimate hygienic cleaning and silent operation in a single, motionless print medium.',
    solution: 'Engineered a striking electric-blue visual using high-speed photography references of water splashes, framed by structured grid columns and sleek sans-serif typography that communicates luxury and cleanliness.',
    deliverables: ['A1 Exhibition Poster', 'Digital Store Banner', 'Retouched Hero Visual'],
  },
  {
    id: 'microwave-campaign',
    title: 'Microwave Campaign Design',
    category: 'Digital Advertising',
    imageUrl: '/src/assets/images/microwave_campaign_1782873112563.jpg',
    description: 'A futuristic digital campaign featuring smart-oven culinary experiences, characterized by rich retro-futuristic dark mode elements.',
    year: '2026',
    client: 'NovaTech Living',
    tags: ['Creative Direction', 'Figma', 'Poster Design', 'Social Ad'],
    challenge: 'Reframing a standard household microwave as a sophisticated piece of luxury culinary tech.',
    solution: 'Designed a product layout using highly contrasting dark backgrounds illuminated by warm glowing interior oven elements and a striking electric purple and sunset orange neon gradient.',
    deliverables: ['Social Campaign Set', 'Web Hero Banner', 'Product Specification Guide'],
  },
  {
    id: 'construction-poster',
    title: 'Construction Company Poster',
    category: 'Poster Design',
    imageUrl: '/src/assets/images/construction_poster_1782873124514.jpg',
    description: 'A bold, brutalist construction company advertisement poster utilizing architectural structural layouts and heavy technical typography.',
    year: '2026',
    client: 'Apex Builders Ltd.',
    tags: ['Brutalist Layout', 'Illustrator', 'Poster Design', 'Typography'],
    challenge: 'Breaking away from common corporate construction layouts to make a bold, design-forward architectural statement.',
    solution: 'Crafted a layout inspired by concrete brutalism with intersecting metallic grids, deep shadow geometry, and vibrant hazard-orange warning stripes that represent structure, safety, and modern form.',
    deliverables: ['Event Banner', 'Corporate Brand Poster', 'Vector Construction Graphics'],
  },
  {
    id: 'logo-collection',
    title: 'Logo Design Collection',
    category: 'Logo Design',
    imageUrl: '/src/assets/images/logo_collection_1782873139577.jpg',
    description: 'A curated selection of modern, geometric, and concept-driven corporate logos engineered with ultimate precision.',
    year: '2026',
    client: 'Various Startups',
    tags: ['Vector Graphics', 'Branding', 'Symmetry', 'Illustrator'],
    challenge: 'Translating complex corporate philosophies into highly simplified, unforgettable icons that scale perfectly.',
    solution: 'Utilized rigorous grid alignments, negative space techniques, and custom typographic pairings to ensure perfect optical balance and multi-medium adaptability.',
    deliverables: ['12 Vector Logos', 'Brand Emblem Kit', 'Trademark Specifications'],
  },
  {
    id: 'social-media-set',
    title: 'Social Media Creative Set',
    category: 'Social Media Design',
    imageUrl: '/src/assets/images/social_creative_set_1782873158498.jpg',
    description: 'A suite of highly engaging, visually rich social layouts using glowing gradients, frosted glass panels, and crisp typography.',
    year: '2026',
    client: 'Elysian Cosmetics',
    tags: ['Social Assets', 'Figma', 'Gradients', 'Interactive Grid'],
    challenge: 'Attracting target-audience attention on fast-moving, competitive visual social media feeds.',
    solution: 'Created custom card grids with blurred glassmorphism layers, energetic typography structures, and premium neon accents that look stunning on any screen resolution.',
    deliverables: ['Instagram Feed Templates', 'Story Layouts', 'Animated Post Assets'],
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Concept',
    category: 'Brand Identity',
    imageUrl: '/src/assets/images/brand_identity_1782873172086.jpg',
    description: 'A comprehensive branding guidebook, stationary set, and digital design touchpoints for a contemporary tech start-up.',
    year: '2026',
    client: 'Synapse AI Systems',
    tags: ['Brand Guidelines', 'Figma', 'Stationery', 'Corporate Design'],
    challenge: 'Creating a unified, scalable visual language that establishes authority and modern tech-driven elegance.',
    solution: 'Constructed an in-depth brand book outlining structured design systems, corporate slate backgrounds, brilliant electric-blue color codes, and clean icon assets.',
    deliverables: ['Brand Manual (32-Pages)', 'Stationery Suite', 'Corporate Presentation Deck'],
  },
];

export const skillsData: Skill[] = [
  { name: 'Adobe Photoshop', category: 'software', percentage: 95, color: '#00C8FF' }, // electric blue
  { name: 'Adobe Illustrator', category: 'software', percentage: 90, color: '#FF7B00' }, // orange
  { name: 'Figma', category: 'software', percentage: 88, color: '#A259FF' }, // purple
  { name: 'Logo Design', category: 'design', percentage: 92, color: '#00F5D4' }, // mint neon
  { name: 'Poster Design', category: 'design', percentage: 96, color: '#FF007A' }, // pink neon
  { name: 'Social Media Design', category: 'design', percentage: 94, color: '#FFE600' }, // yellow neon
];
