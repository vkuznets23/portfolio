import { useMemo } from 'react'
import Typograf from 'typograf'

const tp = new Typograf({ locale: ['ru'] })
tp.enableRule('common/nbsp/afterShortWord')

export function useTypograf(text: string, lang: 'ru' | 'en' = 'ru') {
  return useMemo(() => (lang === 'ru' ? tp.execute(text) : text), [text, lang])
}

export function typografText(text: string, lang: 'ru' | 'en' = 'ru') {
  return lang === 'ru' ? tp.execute(text) : text
}
