export interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  github: string
  live?: string
  image: string
  poster: string
}

export interface ProjectsData {
  description: string
  projects: Project[]
}

export const projectsData = {
  en: {
    description:
      'Most of my Hive projects are written in C and aren’t related to frontend development. Here, you’ll mainly find my pet projects, which helped me learn frontend architecture, state management, working with APIs, and building production-ready applications with CI/CD pipelines.',
    projects: [
      {
        id: 1,
        name: 'Camagru | Instagram clone',
        description:
          'Built from scratch with secure email-verified authentication, photo uploads/webcam shots, likes, comments, bookmarks, post editing, profile management, QR code sharing, user search, dark mode, and live chat.',
        technologies: [
          'Next.js',
          'TypeScript',
          'Vanilla CSS',
          'Playwright',
          'Jest',
        ],
        github: 'https://github.com/vkuznets23/camagru',
        live: 'https://camagru-tau.vercel.app/',
        image: '/photos/camagru.mov',
        poster: '/photos/camagru_poster.webp',
      },
      {
        id: 2,
        name: 'Portfolio Website',
        description:
          'Built a multilingual, accessible portfolio featuring smooth scroll animations, theme switching, and a user-friendly interface. Also developed a custom typography tool for the project. Deployed here.',
        technologies: ['React', 'TypeScript', 'Vanilla CSS', 'Jest'],
        github: 'https://github.com/vkuznets23/portfolio',
        image: '/photos/portfolio.mp4',
        poster: '/photos/poster_portfolio.webp',
      },
    ],
  },
  ru: {
    description:
      'Большинство моих проектов в Hive были написаны на C и не связаны с фронтендом. Здесь вы увидите мои личные проекты, в которых я оттачивала навыки фронтенд-архитектуры, управления состоянием, работы с API и создания production-ready приложений с CI/CD.',
    projects: [
      {
        id: 1,
        name: 'Camagru | клон Instagram',
        description:
          'Создан с нуля с безопасной аутентификацией через email, загрузкой фото/снимков с вебкамеры, лайками, комментариями, закладками, редактированием постов, управлением профилем, QR-кодами, поиском пользователей, темной темой и live chat.',
        technologies: [
          'Next.js',
          'TypeScript',
          'Vanilla CSS',
          'Playwright',
          'Jest',
        ],
        github: 'https://github.com/vkuznets23/camagru',
        live: 'https://camagru-tau.vercel.app/',
        image: '/photos/camagru.mov',
        poster: '/photos/poster_portfolio.webp',
      },
      {
        id: 2,
        name: 'Сайт-портфолио',
        description:
          'Создан мультиязычный, доступный портфолио вебсайт с плавными анимациями, переключением темы и удобным интерфейсом. Также разработан собственный инструмент для типографики для проекта.',
        technologies: ['React', 'TypeScript', 'Vanilla CSS', 'Jest'],
        github: 'https://github.com/vkuznets23/portfolio',
        image: '/photos/portfolio.mp4',
        poster: '/photos/poster_portfolio.webp',
      },
    ],
  },
}
