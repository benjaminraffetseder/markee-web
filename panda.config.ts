import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import { button } from '~/recipes/button'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    '@park-ui/panda-preset',
    createPreset({
      accentColor: 'grass',
      grayColor: 'olive',
      borderRadius: 'sm',
    }),
  ],
  theme: {
    extend: {
      recipes: {
        button,
      },
    },
  },
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
})
