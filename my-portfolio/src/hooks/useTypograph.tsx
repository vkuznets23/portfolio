import { useMemo } from 'react'
import type { Experience } from '../data/experience'
import type { Project } from '../data/projects'

const russianPrepositions = [
  'в',
  'на',
  'по',
  'для',
  'от',
  'как',
  'до',
  'за',
  'во',
  'у',
  'с',
  'к',
  'о',
  'об',
  'из',
  'со',
  'ко',
]

const englishPrepositions = [
  'in',
  'I',
  'on',
  'at',
  'by',
  'for',
  'with',
  'about',
  'to',
  'of',
  'C',
  'a',
  'my',
  'from',
  'as',
]

function applyEnglishHangingPrepositions(text: string) {
  const escapedPrepositions = englishPrepositions.map((prep) =>
    prep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  )

  return text.replace(
    new RegExp(`(^|\\s)(${escapedPrepositions.join('|')})\\s+`, 'gi'),
    '$1$2\u00A0'
  )
}

function applyingRussianHangingPrepositions(text: string) {
  const escapedPrepositions = russianPrepositions.map((prep) =>
    prep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  )

  let result = text

  result = result.replace(/(^|\s)в\s+/gi, '$1в\u00A0')

  result = result.replace(
    new RegExp(
      `(^|\\s)(${escapedPrepositions.filter((p) => p !== 'в').join('|')})\\s+`,
      'gi'
    ),
    '$1$2\u00A0'
  )

  return result
}

function applyRussianTypography(text: string) {
  let result = text

  result = applyingRussianHangingPrepositions(result)

  result = result.replace(/(\d+)\s*-\s*(\d+)/g, '$1–$2')

  result = result.replace(/"([^"]*)"/g, '«$1»')
  result = result.replace(/'([^']*)'/g, '«$1»')

  result = result.replace(/\s+([,.!?;:])/g, '$1')

  result = result.replace(/([,.!?;:])([^\s])/g, '$1 $2')

  return result
}

function applyEnglishTypography(text: string) {
  let result = text

  result = applyEnglishHangingPrepositions(result)

  result = result.replace(/(\d+)\s*-\s*(\d+)/g, '$1–$2')

  result = result.replace(/\s+([,.!?;:])/g, '$1')

  result = result.replace(/([,.!?;:])([^\s])/g, '$1 $2')

  return result
}

export default function typografCombined(
  text: string,
  lang: 'ru' | 'en' = 'ru'
) {
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
