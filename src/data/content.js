import profilePrimary from '../assets/images/profile.jpg.jpeg'
import profileSecondary from '../assets/images/profile1.jpg.jpeg'
import projectLms from '../assets/images/project-lms.svg'
import projectAttendPro from '../assets/images/project-attendpro.svg'
import projectQuran from '../assets/images/project-quran.svg'

export const owner = {
  name: 'Zulqarnain Haider',
  title: 'Full Stack Software Engineer',
  experience: '5+ years',
  email: 'Zulqarnain7996@gmail.com',
  availability: 'Available for ambitious web products',
  heroStatement: 'Elegant software systems with cinematic execution.',
  heroSummary:
    'I design and ship premium web experiences, robust backend systems, and AI-enhanced product flows with clean architecture and sharp visual taste.',
}

export const navigationItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Craft', href: '#craft' },
  { label: 'Contact', href: '#contact' },
]

export const heroPills = ['Laravel', 'React', 'Python', 'REST APIs', 'AI Integrations']

export const heroMetrics = [
  { value: '05+', label: 'Years in delivery' },
  { value: '03', label: 'Flagship systems' },
  { value: 'Full stack', label: 'Frontend to backend' },
]

export const spotlightCards = [
  {
    label: 'Precision Build',
    title: 'Web apps shaped for longevity',
    text: 'Structured products with durable architecture, refined interfaces, and pragmatic engineering decisions.',
  },
  {
    label: 'Systems Thinking',
    title: 'APIs that stay clear under scale',
    text: 'Backend design focused on clean contracts, reliable data flow, and maintenance without friction.',
  },
  {
    label: 'Modern Delivery',
    title: 'AI integrations with product sense',
    text: 'Useful automation and intelligent workflows added where they create leverage, not noise.',
  },
]

export const stackGroups = [
  {
    title: 'Backend Core',
    items: ['Laravel', 'PHP', 'Flask', 'Django', 'Python'],
  },
  {
    title: 'Frontend Layer',
    items: ['React', 'Vite', 'Responsive UI', 'Component Systems'],
  },
  {
    title: 'Data + APIs',
    items: ['REST APIs', 'MySQL', 'SQL', 'Integrations'],
  },
]

export const services = [
  'Web app development',
  'API architecture',
  'AI integrations',
  'Full stack delivery',
]

export const projects = [
  {
    id: '01',
    title: 'Learning Management System',
    category: 'Education Platform',
    image: projectLms,
    summary: 'A structured learning environment designed for delivery, management, and progress visibility.',
    highlights: ['Role-based flows', 'Course operations', 'Scalable backend foundation'],
    stack: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    id: '02',
    title: 'IVS AttendPro',
    category: 'Attendance Product',
    image: projectAttendPro,
    summary: 'An attendance platform with clean tracking, operational clarity, and dependable reporting workflows.',
    highlights: ['Attendance pipelines', 'Operational reporting', 'Maintainable product logic'],
    stack: ['Laravel', 'REST APIs', 'SQL'],
  },
  {
    id: '03',
    title: 'Quran Scheduling Project',
    category: 'Scheduling System',
    image: projectQuran,
    summary: 'A recurring scheduling system built to coordinate sessions, availability, and assignment logic smoothly.',
    highlights: ['Recurring schedule logic', 'Assignment handling', 'Simple coordination UX'],
    stack: ['Django', 'Python', 'MySQL'],
  },
]

export const craftPrinciples = [
  {
    index: 'A1',
    title: 'Compose for impact',
    text: 'The interface should feel intentional before a single line is read.',
  },
  {
    index: 'A2',
    title: 'Engineer for clarity',
    text: 'Architecture, naming, and data flow stay sharp enough to scale without chaos.',
  },
  {
    index: 'A3',
    title: 'Polish the interaction',
    text: 'Motion, spacing, and hierarchy are treated like product features, not decoration.',
  },
]

export const profileImages = {
  primary: profilePrimary,
  secondary: profileSecondary,
}
