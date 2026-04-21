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
        image: '/photos/camagru.mp4?v=2',
        poster: '/photos/camagru_poster.webp',
      },
      {
        id: 2,
        name: 'IRC Server',
        description:
          'Implementation of an IRC (Internet Relay Chat) server written in C++. Supports multiple clients, channels, authentication and real-time messaging via TCP sockets following IRC protocol.',
        technologies: ['C++', 'TCP/IP', 'IRC Protocol'],
        github: 'https://github.com/vkuznets23/ft_irc',
        image: '',
        poster: '',
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
        image: '/photos/camagru.mp4?v=2',
        poster: '/photos/poster_portfolio.webp',
      },
      {
        id: 2,
        name: 'Сайт-портфолио',
        description:
          'Создан мультиязычный, доступный портфолио вебсайт с плавными анимациями, переключением темы и удобным интерфейсом. Также разработан собственный инструмент для типографики для проекта.',
        technologies: ['React', 'TypeScript', 'Vanilla CSS', 'Jest'],
        github: 'https://github.com/vkuznets23/portfolio',
        image: '/photos/portfolio.mp4?v=2',
        poster: '/photos/poster_portfolio.webp',
      },
      {
        id: 3,
        name: 'Taskly app [в процессе]',
        description:
          'рабочее пространство для управления задачами. Авторизация, канбан, таблицы, фильтры, поиск и тёмная тема',
        technologies: ['React', 'TypeScript', 'Vanilla CSS', 'Node.js'],
        github: 'https://github.com/vkuznets23/taskle',
        live: 'https://taskly-eosin-ten.vercel.app/',
        image: '/photos/taskly.mp4',
        poster: '/photos/taskly.webp',
      },
    ],
  },
}
