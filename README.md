<div align="center">
  <a href="https://www.symbiot.dev/">
    <img alt="Logo" src="https://github.com/symbiotdev/expo-animated-linear-gradient/blob/main/brand_logo.png" width="100px" />
  </a>
  <h1>Expo Animated Linear Gradient 🎨 🚀</h1>

  <div align="center">
    <img alt="NPM downloads" src="https://img.shields.io/npm/dw/@symbiot.dev/expo-animated-linear-gradient?logo=npm&label=npm&cacheSeconds=3600"/>
    <img alt="NPM version" src="https://img.shields.io/npm/v/@symbiot.dev/expo-animated-linear-gradient?logo=npm&label=npm&cacheSeconds=3600"/>
    <img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/@symbiot.dev/expo-animated-linear-gradient?label=size&cacheSeconds=3600"/>
    <img alt="Typescript" src="https://img.shields.io/static/v1?label=&message=TS&color=blue"/>
  </div>
</div>

> A lightweight and flexible animated linear gradient component for **React Native** and **Expo**, compatible with **iOS**, **Android**, and **Web**. Built on top of [expo-linear-gradient](https://www.npmjs.com/package/expo-linear-gradient), this component provides smooth and customizable animated transitions, perfect for enhancing UI with modern, visually appealing gradient effects.

___

## [✨ **Key Features**](#features)

🌈 **Smooth Animated Gradients** – Create eye-catching linear gradients with seamless animated transitions to enhance visual appeal.

🎨 **Customizable Colors and Directions** – Fully control gradient colors, animation duration and direction.

🧠 **Minimal and Efficient** – Built on top of `expo-linear-gradient` with zero native linking and minimal overhead.

🔧 **Expo-First Integration** – No extra setup needed in managed Expo projects — just install and go.

🚀 **Cross-Platform Compatibility** – Works flawlessly with:

- **React Native CLI**
- **Expo**
- **Expo Go**
- **React Native Web** for full browser support

___

## [👩🏿‍💻 **Installation**](#installation)

```bash
npm install @symbiot.dev/expo-animated-linear-gradient expo-linear-gradient
# or
yarn add @symbiot.dev/expo-animated-linear-gradient expo-linear-gradient
```

___

## [🚀 Usage](#usage)

### `AnimatedLinearGradient`

| Prop           | Type                  | Default  | Description                                                     |
|----------------|-----------------------|----------|-----------------------------------------------------------------|
| `colors`       | `string[]`            | —        | Array of colors used in the gradient animation.                 |
| `duration`     | `number`              | `300`    | Duration (in ms) between colors changes.                        |
| `webDirection` | `string`              | `'0deg'` | CSS direction for gradients on the web in `deg`.                |
| ...            | `LinearGradientProps` | —        | Inherits all props from `expo-linear-gradient` except `colors`. |

#### ✨ Example

```tsx
import { AnimatedLinearGradient } from '@symbiot.dev/expo-animated-linear-gradient';
// ... other deps

const blackWhite = {
  dark: ['#000000', '#000000', '#000000'],
  light: ['#FFFFFF', '#FFFFFF', '#FFFFFF']
};

export default function App() {
  const [colors, setColors] = useState(blackWhite.dark);

  return (
    <AnimatedLinearGradient
      colors={colors}
      style={StyleSheet.absoluteFillObject}
    >
      <Pressable onPress={() => setColors(blackWhite.light)}>
        <Text>Press me</Text>
      </Pressable>
    </AnimatedLinearGradient>
  );
}
```

### `AnimatedSchemedLinearGradient`

| Prop           | Type                       | Default   | Description                                                     |
|----------------|----------------------------|-----------|-----------------------------------------------------------------|
| `colors`       | `Record<Scheme, string[]>` | —         | Object with `light` and `dark` color arrays.                    |
| `duration`     | `number`                   | `300`     | Duration (in ms) of each gradient transition cycle.             |
| `webDirection` | `string`                   | `'0deg'`  | CSS direction for gradients on the web in `deg`.                |
| `scheme`       | `'light'` \| `'dark'`      | `'light'` | Determines which color scheme to use.                           |
| ...            | `LinearGradientProps`      | —         | Inherits all props from `expo-linear-gradient` except `colors`. |

#### ✨ Example

```tsx
import { AnimatedSchemedLinearGradient } from '@symbiot.dev/expo-animated-linear-gradient';
// ... other deps


const blackWhite = {
  dark: ['#000000', '#000000', '#000000'],
  light: ['#FFFFFF', '#FFFFFF', '#FFFFFF']
};

const colorful = {
  dark: ['#063D60', '#1E6D51', '#2B4669'],
  light: ['#E6F8FA', '#E8F5E9', '#F9F2FF']
};

export default function App() {
  const [colors, setColors] = useState(blackWhite);

  return (
    <AnimatedSchemedLinearGradient
      colors={colors}
      style={StyleSheet.absoluteFillObject}
    >
      <Pressable onPress={() => setColors(colorful)}>
        <Text>Press me</Text>
      </Pressable>
    </AnimatedSchemedLinearGradient>
  );
}
```

___

### [🌐 **Platform Support**](#support)

- ✅ iOS
- ✅ Android
- ✅ Web
- ✅ Expo & Expo Go

---

### [📦 **Bundle Size**](#size)

Lightweight and fast — see actual size on [Bundlephobia](https://bundlephobia.com/package/@symbiot.dev/expo-animated-linear-gradient).

---

### [💬 Contributing](#contributing)

Contributions welcome! Feel free to open issues, discussions, or suggestions.

---

### [🌟 Who's Using This?](#usage)

Using `expo-animated-linear-gradient` in your app or product?  
Feel free to share your project — it might be featured in this section!

> ✉️ Open pull request, or reach out directly to get included.

___

### [🚀 Got Ideas or Gaps to Fill?](#ideas)

Know of existing libraries or functionality that could be improved?  
Have an idea for something completely new?

**Symbiot** is ready to take on the challenge — feedback, feature requests, or collaboration ideas are always welcome!

> 🧠 Let’s build better tools together. Start the conversation or contact via [email](mailto:info@symbiot.dev).

___

### [🧾 License](#license)

MIT — Made with ❤️ by [Symbiot](https://symbiot.dev)

