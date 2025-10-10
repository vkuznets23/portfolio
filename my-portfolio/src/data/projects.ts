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
          'A fully responsive portfolio website showcasing my development skills with smooth scroll animations and interactive elements. Built with modern React patterns, TypeScript for type safety, and custom CSS animations. Features include a mobile-first design, dark/light theme toggle, multi-language support, and optimized performance.',
        technologies: ['React', 'TypeScript', 'Vanilla CSS'],
        github: 'https://github.com/vkuznets23/portfolio',
        image: '/photos/portfolio.mov',
        poster: '/photos/poster_portfolio.webp',
      },
      {
        id: 3,
        name: 'ft_transcendence | pong game',
        description:
          "A multiplayer Pong game built as part of 42 school's project. Features user authentication, matchmaking system, tournament mode as well as 1:1 mode, game cusomization and AI opponent. Built with modern web technologies including WebSocket for real-time communication, secure authentication, and responsive design.",
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Jest'],
        github: 'https://github.com/yourusername/ecommerce',
        image: '',
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
          'Сайт-портфолио, который демонстрирует мои навыки в разработке с плавными анимациями и интерактивными элементами. Создан с использованием современных React-паттернов, TypeScript для безопасности типов и собственных анимаций CSS. Функциональные возможности включают адаптивную верстку, переключатель темной/светлой темы, поддержку нескольких языков и оптимизированную производительность.',
        technologies: [
          'React',
          'TypeScript',
          'Vanilla CSS',
          'Playwright',
          'Jest',
        ],
        github: 'https://github.com/vkuznets23/portfolio',
        image: '/photos/portfolio.mov',
        poster: '/photos/poster_portfolio.webp',
      },
      {
        id: 3,
        name: 'ft_transcendence | понг игра',
        description:
          'Мультиплеерная понг-игра, созданная в рамках проекта школы 42. Функции включают аутентификацию пользователей, систему матчей, турнирный режим, а также режим 1:1, настройку игры (размер ракетки, уровень сложности) и ИИ-противника. Создана с использованием современных веб-технологий, включая WebSocket для чата в реальном времени, безопасную аутентификацию и адаптивную верстку.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Jest'],
        github: 'https://github.com/yourusername/ecommerce',
        image: '',
        poster: '/photos/poster_portfolio.webp',
      },
    ],
  },
}
