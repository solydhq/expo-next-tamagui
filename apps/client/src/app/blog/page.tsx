'use client'

import { BlogPost, CenterView } from '@my/ui'

const content = `Tamagui Design Kit is a powerful tool for building modern, responsive, and themeable user interfaces with ease. Designed for React and React Native, it enables developers to create cross-platform applications seamlessly. The kit provides a robust set of prebuilt components, including stacks, buttons, forms, and text, all leveraging a shared design system. Tamagui emphasizes performance with features like automatic atomic CSS extraction and optimized rendering. Its theming capabilities allow effortless customization across light and dark modes. With support for animations, accessibility, and dynamic layouts, Tamagui Design Kit empowers developers to build visually appealing, highly maintainable, and consistent UIs efficiently.`

export default function Home() {
  return (
    <BlogPost title="Example" imageUrl="https://tamagui.dev/figma.png" content={content} />
  )
}