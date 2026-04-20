export type EducationCategory = 'degree' | 'course' | 'certification'

export interface Experience {
  date: string
  name: string
  description?: string
  organization?: string
  link?: string
  category?: EducationCategory
}

export interface ExperienceData {
  header: string
  description: string
  workHeader: string
  educationHeader: string
  workExperience: Experience[]
  educationAndCourses: Experience[]
}

export const experienceData: Record<'en' | 'ru', ExperienceData> = {
  en: {
    header: 'Bio & Experience',
    description:
      'I didn’t grow up as a computer geek and never imagined working in tech. My journey blends Journalism and Design, before I transitioned into software development through Hive Helsinki — a peer-to-peer, project-based school where curiosity, ownership, and collaboration drive growth.',
    workHeader: 'Work experience',
    educationHeader: 'Education & courses',
    workExperience: [
      {
        date: 'Nov 2021 - Jun 2022',
        name: 'UX/UI designer at Func.',
        description:
          'Developed web and mobile applications in an Agile-like environment using no-code tools (applying CSS and blueprint code). Managed database configuration and structure. Participated in client meetings to align business requirements with technical solutions. Created interactive prototypes and conducted user testing to validate concepts before development. Managed app store submission and deployment processes.',
      },
    ],
    educationAndCourses: [
      {
        date: 'Sep 2018 - Jun 2021',
        name: "Bachelor's in Journalism",
        organization: 'PetrSU',
        category: 'degree',
      },
      {
        date: 'Apr 2024 - Oct 2025',
        name: 'Programming studies',
        organization: 'Hive Helsinki',
        category: 'course',
      },
      {
        date: 'Nov 2024 - Mar 2025',
        name: 'Full Stack Open',
        organization: 'University of Helsinki',
        link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/ca86731fd79104cef394d97e62a6777c',
        category: 'course',
      },
      {
        date: 'Aug 2025 - present',
        name: 'Vocational qualification in ICT',
        organization: 'Business Collage',
        category: 'degree',
      },
      {
        date: 'Jan 2025',
        name: 'Learning TypeScript',
        organization: 'Codecademy',
        link: 'https://www.codecademy.com/profiles/byte5932266809/certificates/56fb1e71303e37b643bb1905f31c8a09',
        category: 'course',
      },
      {
        date: 'Feb 2026',
        name: 'Learning Kotlin',
        organization: 'Codecademy',
        link: 'https://www.codecademy.com/profiles/byte5932266809/certificates/a549293c6e8d62a61ef1bec410b58162',
        category: 'course',
      },
      {
        date: '2025',
        name: 'Accessibility fundamentals',
        organization: 'Microsoft',
        link: 'https://learn.microsoft.com/en-gb/users/ViktoriiaKuznetsova-8317/achievements/82AR57DW?ref=https%3a%2f%2fwww.linkedin.com%2f',
        category: 'course',
      },
      {
        date: '2025',
        name: 'YKI test B1 level',
        organization: '',
        link: 'https://opintopolku.fi/koski/opinnot/32d456ac2f7a4dc5ba3bd56078208501',
        category: 'certification',
      },
    ],
  },
  ru: {
    header: 'Биография и опыт',
    description:
      'Я никогда не была компьютерным гиком и не мечатала работать в IT. Моя кареьера начиналась в журналистике и дизайне, а сейчас решила попробовать себя в роли разработчика, поступив в Hive Helsinki — школу с peer-to-peer подоходом, где прогресс движется любопытством и коллаборацией.',
    workHeader: 'Опыт работы',
    educationHeader: 'Образование и курсы',
    workExperience: [
      {
        date: 'Ноябрь 2021 - Июнь 2022',
        name: 'UX/UI дизайнер в Func.',
        description:
          'Разрабатывала веб- и мобильные приложения в Agile-подобной среде с использованием no-code инструментов. Настраивала и управляла структурой базы данных. Участвовала в клиентских встречах для согласования бизнес-требований и технических решений. Создавала интерактивные прототипы и проводила пользовательское тестирование для проверки гипотез перед разработкой. Осуществляла публикацию и деплой приложений в app stores.',
      },
    ],
    educationAndCourses: [
      {
        date: 'Сент 2018 - Июнь 2021',
        name: 'Бакалавр журналистики',
        organization: 'ПетрГУ',
        category: 'degree',
      },
      {
        date: 'Апр 2024 - Окт 2025',
        name: 'Программирование',
        organization: 'Hive Helsinki',
        category: 'course',
      },
      {
        date: 'Нояб 2024 - н.в.',
        name: 'Full Stack Open',
        organization: 'Университет Хельсинки',
        category: 'course',
      },
      {
        date: 'Авг 2025 - н.в.',
        name: 'Профессиональная квалификация в ICT',
        organization: 'Business Collage',
        category: 'degree',
      },
      {
        date: '2025',
        name: 'YKI тест, уровень B1',
        organization: '',
        category: 'certification',
      },
    ],
  },
}
