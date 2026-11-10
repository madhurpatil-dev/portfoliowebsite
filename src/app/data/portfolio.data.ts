export interface NavigationLink {
  readonly id: string;
  readonly label: string;
}

export interface SkillGroup {
  readonly index: string;
  readonly title: string;
  readonly skills: readonly string[];
}

export interface ExperienceHighlight {
  readonly before: string;
  readonly emphasis?: string;
  readonly after?: string;
}

export interface Experience {
  readonly period: string;
  readonly type: string;
  readonly role: string;
  readonly employer: string;
  readonly logo: string;
  readonly highlights: readonly ExperienceHighlight[];
  readonly tags: readonly string[];
}

export interface Project {
  readonly index: string;
  readonly kicker: string;
  readonly format?: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly image: string;
  readonly imageAlt: string;
  readonly previewLabel: string;
  readonly href: string;
  readonly action: string;
  readonly compact?: boolean;
}

export interface Education {
  readonly years: string;
  readonly qualification: string;
  readonly institution: string;
  readonly details: string;
  readonly score: string;
}

export const navigationLinks: readonly NavigationLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    index: '01',
    title: 'Backend development',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'API Gateway'],
  },
  {
    index: '02',
    title: 'Data & messaging',
    skills: ['SQL', 'Redis', 'Data processing', 'ELK Stack'],
  },
  {
    index: '03',
    title: 'Cloud & delivery',
    skills: ['AWS', 'Jenkins', 'CI/CD', 'OpenShift', 'Nginx'],
  },
  {
    index: '04',
    title: 'Frontend & languages',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'Python', 'HTML / CSS'],
  },
];

export const experience: readonly Experience[] = [
  {
    period: 'Current role',
    type: 'Full-time',
    role: 'Software Development Engineer',
    employer: 'Maveric Systems Limited',
    logo: 'assets/Images/m_Maveric-logo-optimized.webp',
    highlights: [
      {
        before:
          'Designed and developed Java / Spring Boot REST APIs integrated with Angular applications for global banking clients.',
      },
      {
        before: 'Refactored legacy services with SOLID principles, enabling ',
        emphasis: '20% faster feature rollouts.',
      },
      {
        before: 'Led migration of ',
        emphasis: '10+ microservices',
        after: ' for the Platform Security Gateway across APAC and EMEA.',
      },
      {
        before:
          'Built responsive Angular components and strengthened service validation, compliance, and data quality.',
      },
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'Angular', 'Jenkins'],
  },
  {
    period: 'Internship',
    type: 'Cloud engineering',
    role: 'Cloud Engineer (AWS)',
    employer: 'F13 Technologies',
    logo: 'assets/Images/f13tech_logo.jpg',
    highlights: [
      {
        before:
          'Worked with AWS EC2, SageMaker, and S3, and collaborated on service troubleshooting.',
      },
      {
        before:
          'Developed a cloud migration strategy for the Indian Railway System using AWS services.',
      },
    ],
    tags: ['AWS', 'EC2', 'S3', 'Cloud migration'],
  },
  {
    period: 'Internship',
    type: 'Analytics',
    role: 'Business Intelligence Analyst',
    employer: 'iNeuron Intelligence Pvt Ltd',
    logo: 'assets/Images/ineuron_logo.jpg',
    highlights: [
      {
        before:
          'Created a Python heart disease analysis model that identified a 45.87% prevalence in the analyzed dataset.',
      },
      {
        before:
          'Built a Power BI dashboard with seven data models and four interactive filter controls.',
      },
    ],
    tags: ['Python', 'Power BI', 'Data analysis'],
  },
  {
    period: 'Internship',
    type: 'Technical writing',
    role: 'Content Writer',
    employer: 'Eco Impulse Pvt Ltd.',
    logo: 'assets/Images/ecoimpulse_logo.png',
    highlights: [
      {
        before:
          'Researched robotic design systems and automation, and wrote product-focused content about SCR-01 robot architecture.',
      },
    ],
    tags: ['Research', 'Technical writing', 'Robotics'],
  },
];

export const projects: readonly Project[] = [
  {
    index: '01',
    kicker: 'PRODUCTIVITY',
    title: 'One Stop Tools',
    description: 'A collection of handy web utilities in one place.',
    tags: ['Angular', 'TypeScript'],
    image: 'assets/Images/toolbox.png',
    imageAlt: 'Preview of One Stop Tools',
    previewLabel: 'Visit One Stop Tools',
    href: 'https://onestoptools.netlify.app/',
    action: 'Visit project',
    compact: true,
  },
  {
    index: '02',
    kicker: 'DATA PLATFORM',
    format: 'WEB APPLICATION',
    title: 'Data Operations Software',
    description: 'A practical application for managing and processing large datasets efficiently.',
    tags: ['Java', 'Angular', 'Data processing'],
    image: 'assets/Images/dataopr.png',
    imageAlt: 'Preview of Data Operations Software',
    previewLabel: 'Visit Data Operations Software',
    href: 'https://dataoperations.netlify.app/',
    action: 'Explore project',
  },
  {
    index: '03',
    kicker: 'FINAL-YEAR PROJECT',
    format: 'RESEARCH & IMPLEMENTATION',
    title: 'Smart Authentication System',
    description:
      'An exploration of biometric and behavioral analysis for improved identity verification.',
    tags: ['Machine learning', 'Security'],
    image: 'assets/Images/smartauth.jpeg',
    imageAlt: 'Smart Authentication System project',
    previewLabel: 'Read the Smart Authentication System project thesis',
    href: 'https://drive.google.com/file/d/1FyGYk4h1M1qDpu1ZfsRxSi7uqugtJFJP/view?usp=share_link',
    action: 'Read the project thesis',
  },
  {
    index: '04',
    kicker: 'WEB APPLICATION',
    format: 'PRODUCTIVITY',
    title: 'Editing Software',
    description:
      'A browser-based editing platform with useful tools for creating and working with content.',
    tags: ['Angular', 'TypeScript'],
    image: 'assets/Images/editor.png',
    imageAlt: 'Preview of Editing Software',
    previewLabel: 'Visit Editing Software',
    href: 'https://editor360.netlify.app/',
    action: 'Visit project',
  },
  {
    index: '05',
    kicker: 'COMPUTER VISION',
    format: 'REAL-TIME DETECTION',
    title: 'Social Distancing Detector',
    description: 'A computer vision project for detecting and measuring distance between people.',
    tags: ['OpenCV', 'Computer vision'],
    image: 'assets/Images/socialdistancing.png',
    imageAlt: 'Preview of the Social Distancing Detector',
    previewLabel: 'View Social Distancing Detector on GitHub',
    href: 'https://github.com/Madhur-451/Social-Distancing-Detector',
    action: 'View on GitHub',
  },
  {
    index: '06',
    kicker: 'MACHINE LEARNING',
    title: 'Vehicle Price Prediction',
    description: 'A predictive model for estimating vehicle prices from market features.',
    tags: ['Python', 'Machine learning'],
    image: 'assets/Images/vehicleprice.png',
    imageAlt: 'Preview of Vehicle Price Prediction',
    previewLabel: 'Visit Vehicle Price Prediction',
    href: 'https://vehiclepriceprediction.pythonanywhere.com/',
    action: 'Visit project',
    compact: true,
  },
];

export const education: readonly Education[] = [
  {
    years: '2019 — 2023',
    qualification: 'B.E. in Computer Engineering',
    institution: 'Dhole Patil College of Engineering, Pune',
    details: 'Savitribai Phule Pune University · Top 5% of the university cohort',
    score: '9.22 CGPA',
  },
  {
    years: '2017 — 2019',
    qualification: 'Higher Secondary Certificate',
    institution: 'S.M. Joshi College, Pune',
    details: 'Physics, Chemistry, Mathematics & Computer Science',
    score: 'HSC',
  },
  {
    years: '2017',
    qualification: 'Secondary School Certificate',
    institution: 'JSPM’s Cygnet Public School, Pune',
    details: 'Science exhibitions, sports, and extracurricular activities',
    score: 'SSC',
  },
];
