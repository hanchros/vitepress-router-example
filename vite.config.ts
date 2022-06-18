import type { UserConfigExport } from 'vite'

import { defineConfig } from 'vite'
import { join } from 'path'

export default (): UserConfigExport =>
  defineConfig({
    resolve: {
      alias: {
        '~': join(__dirname, './.vitepress/theme/'),
      },
      extensions: ['.js', '.ts', '.vue', '.pcss', '.css'],
    },
  })
