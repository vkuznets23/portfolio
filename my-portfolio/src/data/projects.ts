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
      'Most of my Hive projects are written in C and aren’t related to web development. Here you’ll find projects that helped me build practical skills in frontend and backend architecture, state management, API integration, and developing production-ready applications with CI/CD pipelines.',
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
      // {
      //   id: 2,
      //   name: 'IRC Server',
      //   description:
      //     'Implementation of an IRC (Internet Relay Chat) server written in C++. Supports multiple clients, channels, authentication and real-time messaging via TCP sockets following IRC protocol.',
      //   technologies: ['C++', 'TCP/IP', 'IRC Protocol'],
      //   github: 'https://github.com/vkuznets23/ft_irc',
      //   image: '',
      //   poster: '',
      // },
      {
        id: 2,
        name: 'Wolt Frontend Assignment — Delivery Order Price Calculator',
        description:
          "A frontend take-home assignment built for Wolt's recruitment process. The task was to implement a delivery order price calculator — a form-based tool that computes the total delivery fee based on cart value, delivery distance, number of items, and time of order, following Wolt's specific pricing rules.",
        technologies: [
          'React',
          'TypeScript',
          'Vanilla CSS',
          'Jest',
          'Playwright',
        ],
        github: 'https://github.com/vkuznets23/woltFrontend2025',
        image: '/photos/wolt_assignment2025.mp4',
        poster: '/photos/wolt_assignment2025.webp',
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
        name: 'Задание на Frontend — Калькулятор стоимости доставки',
        description:
          "Задание на Frontend для Wolt's recruitment process. Задача была реализовать калькулятор стоимости доставки — инструмент на основе формы, который вычисляет общую стоимость доставки на основе стоимости корзины, расстояния доставки, количества товаров и времени заказа, следуя специфическим правилам ценообразования Wolt's.",
        technologies: [
          'React',
          'TypeScript',
          'Vanilla CSS',
          'Jest',
          'Playwright',
        ],
        github: 'https://github.com/vkuznets23/woltFrontend2025',
        image: '/photos/wolt_assignment2025.mp4',
        poster: '/photos/wolt_assignment2025.webp',
      },
    ],
  },
}
