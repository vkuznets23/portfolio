export interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  github: string
  live: string
  image: string
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
          'Pet project',
        ],
        github: 'https://github.com/yourusername/portfolio',
        live: 'https://yourportfolio.com',
        image: '/photos/camagru.gif',
      },
      {
        id: 2,
        name: 'Portfolio Website',
        description:
          'A modern, responsive portfolio website built with React, TypeScript, and CSS. Features include dynamic content loading, smooth animations, and mobile-first design.',
        technologies: ['React', 'TypeScript', 'CSS'],
        github: 'https://github.com/yourusername/portfolio',
        live: 'https://yourportfolio.com',
        image: '/photos/portfolio.png',
      },
      {
        id: 3,
        name: 'E-commerce Platform',
        description:
          'Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern web technologies.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/yourusername/ecommerce',
        live: 'https://yourecommerce.com',
        image: '/photos/pong.gif',
      },
    ],
  },
  ru: {
    description:
      'Большинство моих проектов в Hive были написаны на C и не связаны с фронтендом. Здесь вы увидите мои личные проекты, в которых я оттачивала навыки фронтенд-архитектуры, управления состоянием, работы с API и создания production-ready приложений с CI/CD.',
    projects: [
      {
        id: 1,
        name: 'Сайт-портфолио',
        description:
          'Современный, адаптивный сайт-портфолио, созданный с помощью React, TypeScript и CSS. Включает динамическую загрузку контента, плавные анимации и mobile-first дизайн.',
        technologies: ['React', 'TypeScript', 'CSS', 'Framer Motion'],
        github: 'https://github.com/yourusername/portfolio',
        live: 'https://yourportfolio.com',
        image: '/photos/portfolio.png',
      },
      {
        id: 2,
        name: 'E-commerce платформа',
        description:
          'Full-stack решение для электронной коммерции с аутентификацией пользователей, обработкой платежей и админ-панелью. Создано с использованием современных веб-технологий.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/yourusername/ecommerce',
        live: 'https://yourecommerce.com',
        image: '/photos/ecommerce.png',
      },
    ],
  },
}
