import { useMemo } from 'react'
import Typograf from 'typograf'
import type { ExperienceType } from '../Components/Experience'

const tp = new Typograf({ locale: ['ru'] })
tp.enableRule('common/nbsp/afterShortWord')

const englishPrepositions = [
  'in',
  'on',
  'at',
  'by',
  'for',
  'with',
  'about',
  'to',
  'and',
  'of',
  'from',
  'as',
]

function applyEnglishHangingPrepositions(text: string) {
  return text.replace(
    new RegExp(`\\b(${englishPrepositions.join('|')})\\s`, 'gi'),
    '$1\u00A0'
  )
}

export function typografCombined(text: string, lang: 'ru' | 'en' = 'ru') {
  if (lang === 'ru') {
    return tp.execute(text)
  } else {
    return applyEnglishHangingPrepositions(text)
  }
}

export function useTypografCombined(text: string, lang: 'ru' | 'en' = 'ru') {
  return useMemo(() => typografCombined(text, lang), [text, lang])
}

export function useExperienceTypograf(
  experience: ExperienceType[],
  lang: 'ru' | 'en'
) {
  return useMemo(
    () =>
      experience.map((item) => ({
        ...item,
        name: typografCombined(item.name, lang),
        description: typografCombined(item.description, lang),
      })),
    [experience, lang]
  )
}
