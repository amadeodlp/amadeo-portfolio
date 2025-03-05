import { pageBackgrounds } from '@/utils/imageUtils';

// Define valid page types
export type PageType = keyof typeof pageBackgrounds;

export interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  backgroundImages?: string[];
  secondaryBackgroundImages?: string[];
  pageType?: PageType;
  contactForm?: React.ReactNode;
}
