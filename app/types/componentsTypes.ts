import { IconTree, IconType } from 'react-icons';

export interface ProjectType {
  startDate: string;
  endDate: string;
  heading: string;
  description: string;
  image: string;
  techUsed: string[];
  demoLink: string;
  gitHubLink: string;
  imageOnRight: boolean;
}

export interface ExperienceType {
  title: string;
  sequence: number;
  companyName: string;
  startDate: string;
  rolesAndResponsibility: string[];
}

export interface SocialLinkType {
  title: string;
  link: string;
  sequence: number;
  icon: IconType;
}
