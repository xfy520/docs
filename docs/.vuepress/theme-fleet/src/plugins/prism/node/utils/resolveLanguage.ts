import * as languages from './languages';
import type { PrismHighlightLanguage } from '../../../../shared';

type LanguagesMap = Record<string, PrismHighlightLanguage>

let languagesMap: LanguagesMap


const getLanguagesMap = (): LanguagesMap => {
  if (!languagesMap) {
    languagesMap = Object.values(languages).reduce((result, item) => {
      item.aliases.forEach((alias) => {
        result[alias] = item
      })
      return result
    }, {})
  }

  return languagesMap
}


export default (info: string): PrismHighlightLanguage => {
  const alias = info.match(/^([^ :[{]+)/)?.[1] || 'text'

  return (
    getLanguagesMap()[alias] ?? {
      name: alias,
      ext: alias,
      aliases: [alias],
    }
  )
}
