import { App, defaultTheme, ThemeObject } from 'vuepress';
import { path } from '@vuepress/utils';
import type { FleetThemeOptions } from '../shared';

export const VuepressThemeFleet = (options: FleetThemeOptions) => {
  return (): ThemeObject => {
    return {
      name: 'vuepress-theme-fleet',
      extends: defaultTheme(options),
      layouts: path.resolve(__dirname, '../client/layouts'),
      plugins: options.plugins || [],
    }
  }
}
