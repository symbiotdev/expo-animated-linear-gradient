import { jsx } from 'react/jsx-runtime';
import { Animated, Platform, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState, useMemo, useCallback, useEffect } from 'react';

const useAnimatedGradient = ({
  colors,
  duration = 300,
  webDirection
}) => {
  const ref = useRef({
    colors,
    index: 0
  });
  const animatedValue = useRef(new Animated.Value(ref.current.index)).current;
  const [outputRanges, setOutputRanges] = useState(colors.map((_, i) => [colors[i], colors[i]]));
  const appGradient = useMemo(() => outputRanges.map(outputRange => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange
  })), [animatedValue, outputRanges]);
  const webGradient = useMemo(() => {
    const direction = webDirection || '180deg';
    const vars = appGradient.reduce((obj, color, index) => Object.assign(Object.assign({}, obj), {
      [`--agc-${index}`]: color
    }), {});
    return Object.assign(Object.assign({}, vars), {
      background: `linear-gradient(${direction}, ${Object.keys(vars).map(name => `var(${name})`).join(', ')})`,
      transition: `background .${duration}s ease-in-out`
    });
  }, [appGradient, duration, webDirection]);
  const animatedChanges = useCallback(() => {
    const toValue = ref.current.index ? 0 : 1;
    ref.current.index = toValue;
    Animated.timing(animatedValue, {
      toValue,
      duration,
      useNativeDriver: false
    }).start();
  }, [animatedValue, duration]);
  const changeColors = useCallback(value => {
    const fromInit = ref.current.index === 0;
    setOutputRanges(prev => value.map(fromInit ? (color, index) => {
      var _a;
      return [((_a = prev[index]) === null || _a === void 0 ? void 0 : _a[0]) || prev[prev.length - 1][0], color];
    } : (color, index) => {
      var _a;
      return [color, ((_a = prev[index]) === null || _a === void 0 ? void 0 : _a[1]) || prev[prev.length - 1][1]];
    }));
    animatedChanges();
  }, [animatedChanges]);
  useEffect(() => {
    const newColors = [...colors];
    const minLength = Math.max(newColors.length, 2);
    if (minLength !== newColors.length) {
      const lastColor = newColors[newColors.length - 1];
      for (let i = 0; i <= minLength - newColors.length; i++) {
        newColors.push(lastColor);
      }
    }
    if (newColors.every((color, i) => ref.current.colors[i] === color)) {
      return;
    }
    ref.current.colors = newColors;
    changeColors(newColors);
  }, [changeColors, colors]);
  return {
    appGradient,
    webGradient,
    ref
  };
};

const ALinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedLinearGradient = props => {
  const {
    duration,
    webDirection,
    colors,
    style,
    children
  } = props;
  const {
    appGradient,
    webGradient
  } = useAnimatedGradient({
    colors,
    duration,
    webDirection
  });
  return Platform.OS === 'web' ? jsx(Animated.View, {
    style: [style, webGradient],
    children: children
  }) : jsx(ALinearGradient, Object.assign({}, props, {
    colors: appGradient
  }));
};

const AnimatedSchemedLinearGradient = props => {
  const {
    colors,
    scheme: propScheme
  } = props;
  const colorScheme = useColorScheme();
  const scheme = useMemo(() => {
    var _a;
    return (_a = propScheme !== null && propScheme !== void 0 ? propScheme : colorScheme) !== null && _a !== void 0 ? _a : 'light';
  }, [colorScheme, propScheme]);
  return jsx(AnimatedLinearGradient, Object.assign({}, props, {
    colors: colors[scheme]
  }));
};

export { AnimatedLinearGradient, AnimatedSchemedLinearGradient };
