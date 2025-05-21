import { AnimatedGradientProps } from '@symbiot/react-native-hooks';
import { LinearGradientProps } from 'expo-linear-gradient';
export type AnimatedLinearGradientProps = AnimatedGradientProps & Omit<LinearGradientProps, 'colors'> & {
    colors: string[];
};
export declare const AnimatedLinearGradient: (props: AnimatedLinearGradientProps) => import("react/jsx-runtime").JSX.Element;
