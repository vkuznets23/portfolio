import { useMemo, useState } from 'react'
import type {
  EducationCategory as DataEducationCategory,
  Experience,
} from '../data/experience'

type EducationCategory = 'all' | 'degree' | 'course' | 'certification'

type ExperienceToggleProps = {
  items: Experience[]
  language: 'ru' | 'en'
  header: string
}

type CategorizedExperience = Experience & {
  category: DataEducationCategory
}

export default function ExperienceToggle({
  items,
  language,
  header,
}: ExperienceToggleProps) {
  const [activeCategory, setActiveCategory] = useState<EducationCategory>('all')

  const categorizedItems: CategorizedExperience[] = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        // Category is the source of truth from the data layer.
        category: item.category || 'course',
      })),
    [items],
  )

  const countByCategory = useMemo(
    () => ({
      all: categorizedItems.length,
      degree: categorizedItems.filter((item) => item.category === 'degree')
        .length,
      course: categorizedItems.filter((item) => item.category === 'course')
        .length,
      certification: categorizedItems.filter(
        (item) => item.category === 'certification',
      ).length,
    }),
    [categorizedItems],
  )

  const filteredItems = useMemo(
    () =>
      categorizedItems.filter(
        (item) => activeCategory === 'all' || item.category === activeCategory,
      ),
    [activeCategory, categorizedItems],
  )

  const labels: Record<EducationCategory, string> =
    language === 'en'
      ? {
          all: 'All',
          degree: 'Degree',
          course: 'Course',
          certification: 'Certification',
        }
      : {
          all: 'Все',
          degree: 'Степень',
          course: 'Курс',
          certification: 'Сертификат',
        }

  const categoryOrder: EducationCategory[] = [
    'all',
    'degree',
    'course',
    'certification',
  ]

  return (
    <>
      <div className="education-header-row">
        <h2 className="education-section-title">{header}</h2>
        <div
          className="education-filter"
          role="tablist"
          aria-label={
            language === 'en' ? 'Education categories' : 'Категории образования'
          }
        >
          {categoryOrder.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`education-filter-button ${
                activeCategory === category ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {labels[category]} ({countByCategory[category]})
            </button>
          ))}
        </div>
      </div>

      <div className="toggleAll" role="list">
        {filteredItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="education-card"
            role="listitem"
            aria-label={`${language === 'en' ? 'Education item' : 'Элемент образования'} ${index + 1}: ${item.name}`}
          >
            <div className="education-card-top">
              <h4 className="education-card-title">{item.name}</h4>
              <span className="education-card-date">{item.date}</span>
            </div>
            {item.organization && (
              <p className="education-card-subtitle">{item.organization}</p>
            )}
            <span className="education-card-chip">{labels[item.category]}</span>
          </div>
        ))}
      </div>
    </>
  )
}
