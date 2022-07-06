import { App, defaultTheme, DefaultThemeOptions, ThemeObject } from 'vuepress';
export default (options: DefaultThemeOptions) => {
  return (app: App): ThemeObject => {
    return {
      name: 'vuepress-theme-wssio',
      extends: defaultTheme(options),
    }
  }
}
