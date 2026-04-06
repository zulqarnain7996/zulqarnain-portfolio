import profileImage from '../assets/images/profile.jpg.jpeg'
import profileImageSecondary from '../assets/images/profile1.jpg.jpeg'
import lmsPlaceholder from '../assets/images/project-lms.svg'
import attendProPlaceholder from '../assets/images/project-attendpro.svg'
import quranPlaceholder from '../assets/images/project-quran.svg'

export const owner = {
  name: 'Zulqarnain Haider',
  title: 'Full Stack Software Engineer',
  experience: '5+ years',
  email: 'Zulqarnain7996@gmail.com',
  company: 'IVS',
  intro: 'Building sharp web products with clean systems and reliable delivery.',
}

export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
]

export const heroMetrics = [
  { value: '5+', label: 'Years of experience' },
  { value: 'Full Stack', label: 'Frontend to backend' },
  { value: 'IVS', label: 'Company experience' },
]

export const profileImages = {
  hero: profileImage,
  workspace: profileImageSecondary,
}

export const aboutHighlights = [
  {
    title: 'Backend clarity',
    text: 'Clean APIs and stable systems.',
  },
  {
    title: 'Frontend polish',
    text: 'Responsive interfaces with a sharp feel.',
  },
  {
    title: 'Product focus',
    text: 'Built for users, business, and longevity.',
  },
]

export const skillColumns = [
  {
    heading: 'Backend',
    lead: 'API and application engineering',
    items: ['Laravel', 'PHP', 'Flask', 'Django', 'Python', 'REST APIs'],
  },
  {
    heading: 'Frontend',
    lead: 'Modern interface delivery',
    items: ['React', 'Responsive UI', 'Component Architecture', 'Vite'],
  },
  {
    heading: 'Data & Delivery',
    lead: 'Structured systems and deployment',
    items: ['MySQL', 'SQL', 'GitHub', 'Vercel', 'Database Design'],
  },
]

export const services = [
  {
    index: '01',
    title: 'Web App Development',
    description: 'Custom products with clean architecture and refined UX.',
  },
  {
    index: '02',
    title: 'API Development',
    description: 'Reliable APIs for integrations, automation, and scale.',
  },
  {
    index: '03',
    title: 'AI Integrations',
    description: 'Practical AI features integrated into real product workflows.',
  },
  {
    index: '04',
    title: 'Full Stack Development',
    description: 'Joined-up execution across frontend, backend, and data.',
  },
]

export const projects = [
  {
    title: 'Learning Management System',
    tag: 'Education Platform',
    image: lmsPlaceholder,
    summary: 'A learning platform for delivery, progress, and administration.',
    details: [
      'Role-aware user flows',
      'Structured course management',
      'Scalable backend foundation',
    ],
  },
  {
    title: 'IVS AttendPro',
    tag: 'Attendance Product',
    image: attendProPlaceholder,
    summary: 'An attendance system for visibility, tracking, and reporting.',
    details: [
      'Daily attendance workflows',
      'Clear operational reporting',
      'Built for maintainability',
    ],
  },
  {
    title: 'Quran Scheduling Project',
    tag: 'Scheduling System',
    image: quranPlaceholder,
    summary: 'A scheduling system for planning and recurring sessions.',
    details: [
      'Recurring scheduling logic',
      'Availability and assignment handling',
      'Simple coordination flow',
    ],
  },
]
