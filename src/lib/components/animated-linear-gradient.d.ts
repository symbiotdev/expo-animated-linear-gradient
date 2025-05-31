import { LinearGradientProps } from 'expo-linear-gradient';
import { AnimatedGradientProps } from '../hooks/use-animated-gradient';
export type AnimatedLinearGradientProps = AnimatedGradientProps & Omit<LinearGradientProps, 'colors'> & {
    colors: string[];
};
export declare const AnimatedLinearGradient: (props: AnimatedLinearGradientProps) => import("react/jsx-runtime").JSX.Element;
