import { IconType } from 'react-icons';

export interface TechIconsRotatorProps {
  /** Array of icon components to cycle through */
  icons: IconType[];
  
  /** Size of the container */
  size?: 'small' | 'medium' | 'large';
  
  /** Additional classes to apply to the container */
  className?: string;
  
  /** Whether to apply shadow effect */
  shadow?: boolean;
  
  /** Time in milliseconds between transitions */
  transitionInterval?: number;
  
  /** Color of the icon (can be overridden by individual icon styling) */
  iconColor?: string;
}
