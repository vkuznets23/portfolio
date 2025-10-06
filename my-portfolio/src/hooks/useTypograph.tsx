import { useMemo } from 'react'
import Typograf from 'typograf'
import type { Experience } from '../data/experience'
import type { Project } from '../data/projects'

const tp = new Typograf({ locale: ['ru'] })
tp.enableRule('common/nbsp/afterShortWord')

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
  return text.replace(
    new RegExp(`\\b(${englishPrepositions.join('|')})\\s`, 'gi'),
    '$1\u00A0'
  )
}

export default function typografCombined(
  text: string,
  lang: 'ru' | 'en' = 'ru'
) {
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
