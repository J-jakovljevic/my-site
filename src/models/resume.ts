export type Experience = {
  year: string;
  role: string;
  company: string;
  location: string;
  period?: string;
  focus?: string;
  context?: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  outlineDot?: boolean;
};

export type Project = {
  title: string;
  company: string;
  domain: string;
  period: string;
  description: string;
  technologies: string[];
  link?: string;
};

export type PipelineStage = {
  title: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export type Testimonial = {
  quote: string[];
  name: string;
  title: string;
  source?: string;
};
