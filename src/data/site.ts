import {
  Armchair,
  Bath,
  Cctv,
  Frame,
  Gem,
  Hammer,
  HardHat,
  House,
  LayoutGrid,
  PaintRoller,
  TreePine,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export const COMPANY = {
  name: 'Fast Traders',
  tagline: 'Count On Us',
  phoneDisplay: '+92 323 7106190',
  phoneHref: 'tel:+923237106190',
  whatsappNumber: '923237106190',
  whatsappMessage: 'Hi Fast Traders, I would like to request a quotation.',
  email: 'Fasttraders2018@gmail.com',
  address: 'Office No.29, 1st Floor, Gohar Plaza, Wahdat Road, Lahore',
} as const;

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Our Work', href: '#work' },
  { label: 'Get a Quote', href: '#quote' },
] as const;

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    title: 'Home and Office Renovation',
    description: 'Complete refurbishment of homes and offices, from planning to handover.',
    icon: House,
  },
  {
    title: 'Washroom & Kitchen Redo',
    description: 'Fresh tiling, fittings, plumbing finishes and layouts that last.',
    icon: Bath,
  },
  {
    title: 'Wooden Flooring',
    description: 'Solid and engineered wood floors installed flush, level and durable.',
    icon: TreePine,
  },
  {
    title: 'Tiles & Marble',
    description: 'Precision tiling and marble laying with clean joints and polished finishes.',
    icon: Gem,
  },
  {
    title: 'Paint & Polish Work',
    description: 'Smooth multi-coat painting and polishing with careful base preparation.',
    icon: PaintRoller,
  },
  {
    title: 'Wooden Work',
    description: 'Custom joinery, panels, doors and bespoke woodwork built to measure.',
    icon: Hammer,
  },
  {
    title: 'Civil Work',
    description: 'Structural repairs, partitions, plastering and site preparation.',
    icon: HardHat,
  },
  {
    title: 'Glass Work',
    description: 'Partitions, glass doors, shopfronts and careful dismantling and refitting.',
    icon: Frame,
  },
  {
    title: 'Electric & Networking Work',
    description: 'Wiring, distribution boards, data points and structured networking.',
    icon: Zap,
  },
  {
    title: 'CCTV Installation',
    description: 'Camera design, installation and setup for homes, offices and branches.',
    icon: Cctv,
  },
  {
    title: 'Blinds & Panels',
    description: 'Window blinds and wall panelling that add privacy, style and comfort.',
    icon: LayoutGrid,
  },
  {
    title: 'Office Furniture & Workstations',
    description: 'Workstations, desks and seating arranged for productive, modern offices.',
    icon: Armchair,
  },
];

export const PROCESS_STEPS = [
  {
    title: 'Tell us about the work',
    description: 'Call or message us with your requirements and any photos or drawings.',
  },
  {
    title: 'Discuss the details',
    description: 'We review the work with you and answer any questions before getting started.',
  },
  {
    title: 'Agree on the work',
    description: 'We confirm the scope and price with you before the work begins.',
  },
  {
    title: 'Complete the project',
    description: 'Our team carries out the agreed work and keeps you updated.',
  },
] as const;

export const WORK_GALLERY = [
  {
    title: 'Washroom & marble finishing',
    image: 'https://images.pexels.com/photos/6587852/pexels-photo-6587852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Contemporary bathroom with marble walls and a glass shower',
  },
  {
    title: 'Wooden flooring',
    image: 'https://images.pexels.com/photos/7587859/pexels-photo-7587859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Contemporary room with wooden flooring and a large glass door',
  },
  {
    title: 'Office workstations',
    image: 'https://images.pexels.com/photos/5511098/pexels-photo-5511098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Spacious modern office with contemporary furniture',
  },
  {
    title: 'Paint & polish finish',
    image: 'https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Worker applying paint to a wall during a renovation',
  },
] as const;

