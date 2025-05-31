import { Animated, ViewStyle } from 'react-native';
export type AnimatedGradientProps = {
    duration?: number;
    webDirection?: string;
};
export declare const useAnimatedGradient: ({ colors, duration, webDirection, }: AnimatedGradientProps & {
    colors: string[];
}) => {
    appGradient: [Animated.AnimatedInterpolation<string>, Animated.AnimatedInterpolation<string>];
    webGradient: ViewStyle;
    ref: import("react").RefObject<{
        colors: string[];
        index: number;
    }>;
};
