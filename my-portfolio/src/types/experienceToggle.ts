import type {
  EducationCategory as DataEducationCategory,
  Experience,
} from '../data/experience'

export type ToggleLanguage = 'ru' | 'en'

export type EducationFilterCategory = 'all' | DataEducationCategory

export type CategorizedExperience = Experience & {
  category: DataEducationCategory
}
