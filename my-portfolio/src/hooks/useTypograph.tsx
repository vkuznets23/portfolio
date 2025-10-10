import { useMemo } from 'react'
import type { Experience } from '../data/experience'
import type { Project } from '../data/projects'

const englishPrepositions = [
  'in',
  'on',
  'at',
  'by',
  'for',
  'with',
  'about',
  'to',
  'of',
  'from',
  'as',
  'a',
  'an',
  'the',
  'and',
  'I',
  'or',
  'my',
]

const russianShortWords = [
  'в',
  'к',
  'с',
  'на',
  'по',
  'от',
  'за',
  'для',
  'о',
  'у',
  'и',
  'а',
  'но',
  'или',
  'об',
  'я',
]

function applyEnglishTypography(text: string) {
  if (!text) return ''

  // Убираем лишние пробелы
  let result = text.replace(/\s+/g, ' ').trim()

  // Тире вместо дефиса
  result = result.replace(/--/g, '—')
  // Среднее тире для диапазонов, только когда числа по бокам
  result = result.replace(/(\d)\s*-\s*(\d)/g, '$1–$2')

  // Висячие предлоги — добавляем неразрывный пробел
  const pattern = new RegExp(`\\b(${englishPrepositions.join('|')})\\s+`, 'gi')
  result = result.replace(pattern, (_, p1) => `${p1}\u00A0`)

  // умные кавычки
  result = result.replace(/"([^"]+)"/g, '“$1”')

  // апострофы
  result = result.replace(/(\w)'(\w)/g, '$1’$2')

  // многоточие
  result = result.replace(/\.{3}/g, '…')

  return result
}

function applyRussianTypography(text: string) {
  if (!text) return ''

  let result = text.replace(/\s+/g, ' ').trim()

  // Длинное тире вместо двойного дефиса
  result = result.replace(/--/g, '—')
  // Среднее тире для диапазонов чисел: 10-20 → 10–20
  result = result.replace(/(\d)\s*-\s*(\d)/g, '$1–$2')

  // Висячие предлоги
  const shortWordsPattern = new RegExp(
    `(^|\\s)(${russianShortWords.join('|')})(\\s+)`,
    'gi'
  )

  result = result.replace(
    shortWordsPattern,
    (_, before, word) => `${before}${word}\u00A0`
  )

  // Умные кавычки
  result = result.replace(/"([^"]+)"/g, '«$1»')

  // Многоточие
  result = result.replace(/\.{3}/g, '…')

  return result
}

export default function typografCombined(
  text: string,
  lang: 'ru' | 'en' = 'ru'
) {
  if (!text) return ''

  if (lang === 'ru') {
    return applyRussianTypography(text)
  } else {
    return applyEnglishTypography(text)
  }
}

export function useTypografCombined(text: string, lang: 'ru' | 'en' = 'ru') {
  return useMemo(() => typografCombined(text, lang), [text, lang])
}

export function useExperienceTypograf(
  experience: Experience[],
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

export function useFactsTypograf(
  facts: string[] | undefined,
  lang: 'ru' | 'en'
) {
  return useMemo(() => {
    if (!facts) return []
    return facts.map((text) => typografCombined(text, lang))
  }, [facts, lang])
}

export function useProjectsTypograf(projects: Project[], lang: 'ru' | 'en') {
  return useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        name: typografCombined(project.name, lang),
        description: typografCombined(project.description, lang),
      })),
    [projects, lang]
  )
}
