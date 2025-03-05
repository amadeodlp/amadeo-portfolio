export interface AnimatedBackgroundProps {
  images: string[];
  currentImageIndex: number;
  isTransitioning: boolean;
  secondaryImages?: string[];
}
