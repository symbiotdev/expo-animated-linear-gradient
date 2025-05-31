import { LinearGradientProps } from 'expo-linear-gradient';
import { AnimatedGradientProps } from '../hooks/use-animated-gradient';
export type Scheme = 'dark' | 'light';
export type AnimatedSchemedLinearGradientProps = AnimatedGradientProps & Omit<LinearGradientProps, 'colors'> & {
    duration?: number;
    scheme?: Scheme;
    colors: Record<Scheme, string[]>;
};
export declare const AnimatedSchemedLinearGradient: (props: AnimatedSchemedLinearGradientProps) => import("react/jsx-runtime").JSX.Element;
