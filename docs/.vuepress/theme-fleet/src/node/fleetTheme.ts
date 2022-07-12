import { defaultTheme } from '@vuepress/theme-default';
import type { Theme } from '@vuepress/core';
import { path } from '@vuepress/utils';
import type { FleetThemeOptions } from '../shared';

export const VuepressThemeFleet = (options: FleetThemeOptions) => {
  return (): Theme => {
    return {
      name: 'vuepress-theme-fleet',
      extends: defaultTheme(options),
      // layouts: path.resolve(__dirname, '../client/layouts'),
      plugins: options.plugins || [],
    }
  }
}
