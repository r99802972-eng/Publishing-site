export interface SubService {
  title: string;
  description: string;
  icon: string;
}

export interface WorkflowStep {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  title: string;
  heroTitle: string;
  cardsTitle: string;
  workflowPrefix?: string;
  workflowTitle: string;
  heroSubtitle: string;
  heroTag: string;
  heroClosing?: string;
  subServices: SubService[];
  workflowSteps?: WorkflowStep[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
  initials: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}
