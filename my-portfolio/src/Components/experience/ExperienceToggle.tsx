import { useMemo, useState } from 'react'
import type { Experience } from '../../data/experience'
import type {
  CategorizedExperience,
  EducationFilterCategory,
  ToggleLanguage,
} from '../../types/experienceToggle'
import EducationFilterTabButton from './EducationFilterTabButton'
import EducationLinkedCard from './EducationLinkedCard'
import EducationShowMoreButton from './EducationShowMoreButton'
import EducationStaticCard from './EducationStaticCard'

type ExperienceToggleProps = {
  items: Experience[]
  language: ToggleLanguage
  header: string
}

const CATEGORY_ORDER: EducationFilterCategory[] = [
  'all',
  'degree',
  'course',
  'certification',
]

const CATEGORY_LABELS: Record<
  ToggleLanguage,
  Record<EducationFilterCategory, string>
> = {
  en: {
    all: 'All',
    degree: 'Degree',
    course: 'Course',
    certification: 'Certification',
  },
  ru: {
    all: 'Все',
    degree: 'Степень',
    course: 'Курс',
    certification: 'Сертификат',
  },
}

export default function ExperienceToggle({
  items,
  language,
  header,
}: ExperienceToggleProps) {
  const [activeCategory, setActiveCategory] =
    useState<EducationFilterCategory>('all')
  const [isExpanded, setIsExpanded] = useState(false)

  const categorizedItems: CategorizedExperience[] = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        // Category is the source of truth from the data layer.
        category: item.category || 'course',
      })),
    [items],
  )

  const countByCategory = useMemo(() => {
    const counts: Record<EducationFilterCategory, number> = {
      all: categorizedItems.length,
      degree: 0,
      course: 0,
      certification: 0,
    }

    categorizedItems.forEach((item) => {
      counts[item.category] += 1
    })

    return counts
  }, [categorizedItems])

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return categorizedItems

    return categorizedItems.filter((item) => item.category === activeCategory)
  }, [activeCategory, categorizedItems])

  const visibleItems = useMemo(
    () => (isExpanded ? filteredItems : filteredItems.slice(0, 4)),
    [filteredItems, isExpanded],
  )

  const canShowMore = filteredItems.length > 4

  const labels = CATEGORY_LABELS[language]

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
          {CATEGORY_ORDER.map((category) => (
            <EducationFilterTabButton
              key={category}
              label={labels[category]}
              count={countByCategory[category]}
              isActive={activeCategory === category}
              onSelect={() => {
                setActiveCategory(category)
                setIsExpanded(false)
              }}
            />
          ))}
        </div>
      </div>

      <div className="education-list-block">
        <div className="toggleAll" role="list">
          {visibleItems.map((item, index) =>
            item.link ? (
              <EducationLinkedCard
                key={`${item.name}-${index}`}
                item={item}
                chipLabel={labels[item.category]}
              />
            ) : (
              <EducationStaticCard
                key={`${item.name}-${index}`}
                item={item}
                chipLabel={labels[item.category]}
              />
            ),
          )}
        </div>
        {canShowMore && (
          <EducationShowMoreButton
            isExpanded={isExpanded}
            language={language}
            onToggle={() => setIsExpanded((prev) => !prev)}
          />
        )}
      </div>
    </>
  )
}
