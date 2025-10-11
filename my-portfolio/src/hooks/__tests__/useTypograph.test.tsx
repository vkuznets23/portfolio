import { renderHook } from '@testing-library/react'
import typografCombined, {
  useTypografCombined,
  useExperienceTypograf,
  useFactsTypograf,
  useProjectsTypograf,
} from '../useTypograph'
import type { Experience } from '../../data/experience'
import type { Project } from '../../data/projects'

describe('typografCombined', () => {
  describe('Russian typography', () => {
    it('should return empty string for empty input', () => {
      expect(typografCombined('', 'ru')).toBe('')
    })

    it('should trim and normalize spaces', () => {
      expect(typografCombined('  много   пробелов  ', 'ru')).toBe(
        'много пробелов'
      )
    })

    it('should replace double hyphen with em dash', () => {
      expect(typografCombined('текст -- тире', 'ru')).toBe('текст — тире')
    })

    it('should replace hyphen between numbers with en dash', () => {
      expect(typografCombined('2020 - 2024', 'ru')).toBe('2020–2024')
      expect(typografCombined('2020-2024', 'ru')).toBe('2020–2024')
    })

    it('should replace straight quotes with Russian guillemets', () => {
      expect(typografCombined('текст "в кавычках"', 'ru')).toBe(
        'текст «в кавычках»'
      )
    })

    it('should replace three dots with ellipsis', () => {
      expect(typografCombined('текст...', 'ru')).toBe('текст…')
    })

    it('should add non-breaking space after short Russian words', () => {
      expect(typografCombined('я в школе', 'ru')).toBe('я\u00A0в\u00A0школе')

      expect(typografCombined('работал с командой', 'ru')).toBe(
        'работал с\u00A0командой'
      )
      expect(typografCombined('и это важно', 'ru')).toBe('и\u00A0это важно')
      expect(typografCombined('в компании', 'ru')).toBe('в\u00A0компании')
    })

    it('should handle complex text with multiple rules', () => {
      const input = 'Я работал в компании "Яндекс" с 2020 - 2024...'
      const expected =
        'Я\u00A0работал в\u00A0компании «Яндекс» с\u00A02020–2024…'
      expect(typografCombined(input, 'ru')).toBe(expected)
    })
  })

  describe('English typography', () => {
    it('should return empty string for empty input', () => {
      expect(typografCombined('', 'en')).toBe('')
    })

    it('should trim and normalize spaces', () => {
      expect(typografCombined('  many   spaces  ', 'en')).toBe('many spaces')
    })

    it('should replace double hyphen with em dash', () => {
      expect(typografCombined('text -- dash', 'en')).toBe('text — dash')
    })

    it('should replace hyphen between numbers with en dash', () => {
      expect(typografCombined('2020 - 2024', 'en')).toBe('2020–2024')
      expect(typografCombined('2020-2024', 'en')).toBe('2020–2024')
    })

    it('should replace straight quotes with smart quotes', () => {
      expect(typografCombined('text "in quotes"', 'en')).toBe(
        'text \u201Cin\u00A0quotes\u201D'
      )
    })

    it('should replace three dots with ellipsis', () => {
      expect(typografCombined('text...', 'en')).toBe('text…')
    })

    it('should replace apostrophes in contractions', () => {
      expect(typografCombined("don't", 'en')).toBe('don\u2019t')
      expect(typografCombined("it's", 'en')).toBe('it\u2019s')
    })

    it('should add non-breaking space after English prepositions', () => {
      expect(typografCombined('I am a developer', 'en')).toBe(
        'I\u00A0am a\u00A0developer'
      )
      expect(typografCombined('work in the company', 'en')).toBe(
        'work in\u00A0the\u00A0company'
      )
      expect(typografCombined('for the team', 'en')).toBe(
        'for\u00A0the\u00A0team'
      )
    })

    it('should handle complex text with multiple rules', () => {
      const input = 'I worked in the company "Google" from 2020 - 2024...'
      const expected =
        'I\u00A0worked in\u00A0the\u00A0company \u201CGoogle\u201D from\u00A02020–2024…'
      expect(typografCombined(input, 'en')).toBe(expected)
    })
  })
})

describe('useTypografCombined', () => {
  it('should return typographed text', () => {
    const { result } = renderHook(() =>
      useTypografCombined('текст "в кавычках"', 'ru')
    )
    expect(result.current).toBe('текст «в кавычках»')
  })

  it('should recompute when text changes', () => {
    const { result, rerender } = renderHook(
      ({ text, lang }) => useTypografCombined(text, lang),
      { initialProps: { text: 'первый текст', lang: 'ru' as const } }
    )

    expect(result.current).toBe('первый текст')

    rerender({ text: 'второй "текст"', lang: 'ru' as const })
    expect(result.current).toBe('второй «текст»')
  })

  it('should recompute when language changes', () => {
    const { result, rerender } = renderHook(
      ({ text, lang }: { text: string; lang: 'ru' | 'en' }) =>
        useTypografCombined(text, lang),
      { initialProps: { text: '"test"', lang: 'en' as 'ru' | 'en' } }
    )

    expect(result.current).toBe('\u201Ctest\u201D')

    rerender({ text: '"test"', lang: 'ru' })
    expect(result.current).toBe('«test»')
  })

  it('should use memoization and not recompute if props are the same', () => {
    const { result, rerender } = renderHook(
      ({ text, lang }) => useTypografCombined(text, lang),
      { initialProps: { text: 'test', lang: 'en' as const } }
    )

    const firstResult = result.current
    rerender({ text: 'test', lang: 'en' as const })
    const secondResult = result.current

    expect(firstResult).toBe(secondResult)
  })
})

describe('useExperienceTypograf', () => {
  const mockExperience: Experience[] = [
    {
      date: '2020-2024',
      name: 'Разработчик в компании',
      description: 'Работал с командой...',
    },
    {
      date: '2018-2020',
      name: 'Junior разработчик',
      description: 'Учился и развивался...',
    },
  ]

  it('should apply typography to experience items', () => {
    const { result } = renderHook(() =>
      useExperienceTypograf(mockExperience, 'ru')
    )

    expect(result.current[0].name).toBe('Разработчик в\u00A0компании')
    expect(result.current[0].description).toBe('Работал с\u00A0командой…')
    expect(result.current[0].date).toBe('2020-2024') // date should remain unchanged

    expect(result.current[1].name).toBe('Junior разработчик')
    expect(result.current[1].description).toBe('Учился и\u00A0развивался…')
  })

  it('should apply English typography when lang is en', () => {
    const englishExperience: Experience[] = [
      {
        date: '2020-2024',
        name: 'Developer in the company',
        description: 'Worked with the team...',
      },
    ]

    const { result } = renderHook(() =>
      useExperienceTypograf(englishExperience, 'en')
    )

    expect(result.current[0].name).toBe('Developer in\u00A0the\u00A0company')
    expect(result.current[0].description).toBe(
      'Worked with\u00A0the\u00A0team…'
    )
  })

  it('should recompute when experience or language changes', () => {
    const { result, rerender } = renderHook(
      ({ exp, lang }: { exp: Experience[]; lang: 'ru' | 'en' }) =>
        useExperienceTypograf(exp, lang),
      { initialProps: { exp: mockExperience, lang: 'ru' as 'ru' | 'en' } }
    )

    const firstResult = result.current

    rerender({ exp: mockExperience, lang: 'en' })
    expect(result.current).not.toBe(firstResult)
  })

  it('should preserve other properties', () => {
    const { result } = renderHook(() =>
      useExperienceTypograf(mockExperience, 'ru')
    )

    expect(result.current[0].date).toBe('2020-2024')
    expect(result.current[1].date).toBe('2018-2020')
  })
})

describe('useFactsTypograf', () => {
  const mockFacts = [
    'Я работал в компании...',
    'Участвовал в проекте "Система"',
    'Изучал новые технологии -- React, TypeScript',
  ]

  it('should apply typography to facts array', () => {
    const { result } = renderHook(() => useFactsTypograf(mockFacts, 'ru'))

    expect(result.current[0]).toBe('Я\u00A0работал в\u00A0компании…')
    expect(result.current[1]).toBe('Участвовал в\u00A0проекте «Система»')
    expect(result.current[2]).toBe(
      'Изучал новые технологии — React, TypeScript'
    )
  })

  it('should return empty array for undefined facts', () => {
    const { result } = renderHook(() => useFactsTypograf(undefined, 'ru'))

    expect(result.current).toEqual([])
  })

  it('should handle empty array', () => {
    const { result } = renderHook(() => useFactsTypograf([], 'ru'))

    expect(result.current).toEqual([])
  })

  it('should apply English typography when lang is en', () => {
    const englishFacts = [
      'I worked in the company...',
      'Participated in the project "System"',
    ]

    const { result } = renderHook(() => useFactsTypograf(englishFacts, 'en'))

    expect(result.current[0]).toBe('I\u00A0worked in\u00A0the\u00A0company…')
    expect(result.current[1]).toBe(
      'Participated in\u00A0the\u00A0project \u201CSystem\u201D'
    )
  })

  it('should recompute when facts or language changes', () => {
    const { result, rerender } = renderHook(
      ({ facts, lang }: { facts: string[]; lang: 'ru' | 'en' }) =>
        useFactsTypograf(facts, lang),
      { initialProps: { facts: mockFacts, lang: 'ru' as 'ru' | 'en' } }
    )

    const firstResult = result.current

    rerender({ facts: mockFacts, lang: 'en' })
    expect(result.current).not.toBe(firstResult)
  })
})

describe('useProjectsTypograf', () => {
  const mockProjects: Project[] = [
    {
      id: 1,
      name: 'Проект "Портфолио"',
      description: 'Сделал портфолио -- личный сайт...',
      technologies: ['React', 'TypeScript'],
      github: 'https://github.com/test',
      image: 'test.jpg',
      poster: 'test_poster.jpg',
    },
    {
      id: 2,
      name: 'Еще один проект',
      description: 'Работал с командой',
      technologies: ['Vue'],
      live: 'https://example.com',
      github: 'https://github.com/test2',
      image: 'test2.jpg',
      poster: 'test2_poster.jpg',
    },
  ]

  it('should apply typography to project name and description', () => {
    const { result } = renderHook(() => useProjectsTypograf(mockProjects, 'ru'))

    expect(result.current[0].name).toBe('Проект «Портфолио»')
    expect(result.current[0].description).toBe(
      'Сделал портфолио — личный сайт…'
    )

    expect(result.current[1].name).toBe('Еще один проект')
    expect(result.current[1].description).toBe('Работал с\u00A0командой')
  })

  it('should preserve other properties', () => {
    const { result } = renderHook(() => useProjectsTypograf(mockProjects, 'ru'))

    expect(result.current[0].id).toBe(1)
    expect(result.current[0].image).toBe('test.jpg')
    expect(result.current[0].technologies).toEqual(['React', 'TypeScript'])
    expect(result.current[0].github).toBe('https://github.com/test')

    expect(result.current[1].live).toBe('https://example.com')
  })

  it('should apply English typography when lang is en', () => {
    const englishProjects: Project[] = [
      {
        id: 1,
        name: 'Project "Portfolio"',
        description: 'Created a portfolio -- personal website...',
        technologies: ['React'],
        github: 'https://github.com/test',
        image: 'test.jpg',
        poster: 'test_poster.jpg',
      },
    ]

    const { result } = renderHook(() =>
      useProjectsTypograf(englishProjects, 'en')
    )

    expect(result.current[0].name).toBe('Project \u201CPortfolio\u201D')
    expect(result.current[0].description).toBe(
      'Created a\u00A0portfolio — personal website…'
    )
  })

  it('should recompute when projects or language changes', () => {
    const { result, rerender } = renderHook(
      ({ projects, lang }: { projects: Project[]; lang: 'ru' | 'en' }) =>
        useProjectsTypograf(projects, lang),
      { initialProps: { projects: mockProjects, lang: 'ru' as 'ru' | 'en' } }
    )

    const firstResult = result.current

    rerender({ projects: mockProjects, lang: 'en' })
    expect(result.current).not.toBe(firstResult)
  })

  it('should handle empty projects array', () => {
    const { result } = renderHook(() => useProjectsTypograf([], 'ru'))

    expect(result.current).toEqual([])
  })
})
