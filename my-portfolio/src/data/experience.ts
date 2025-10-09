export interface Experience {
  date: string
  name: string
  description: string
}

export interface ExperienceData {
  header: string
  description: string
  experience: Experience[]
}

export const experienceData = {
  en: {
    header: 'Bio & Experience',
    description:
      'I didn’t grow up as a computer geek and never imagined working in tech. My journey blends Journalism and Design, before I transitioned into software development through Hive Helsinki — a peer-to-peer, project-based school where curiosity, ownership, and collaboration drive growth.',
    experience: [
      {
        date: 'Sep 2018 - Jun 2021',
        name: "Bachelor's in Journalism",
        description:
          'Developed strong research and analytical skills, able to gather, verify, and synthesize complex information. Skilled in storytelling and audience-focused communication, adapting style for different platforms and media.Gained understanding of media ethics, information verification, and critical thinking',
      },
      {
        date: 'Nov 2021 - Jun 2022',
        name: 'UX/UI designer at Func.',
        description:
          'Built apps and websites in an Agile-like environment using no-code tools. Applied custom CSS and JavaScript to enhance functionality and design. Managed database setup. Handled app store publishing and deployment',
      },
      {
        date: 'Apr 2024 - October 2025',
        name: 'Hive Helsinki 🇫🇮',
        description:
          'Developed solo and group projects in C, programmed from scratch or using minimal libraries. Gained foundational knowledge in C++ basics. Completed a web development project, applying front-end and back-end concepts. Participated in a mentorship program, collaborating with a mentor to build Camagru, deepening understanding of front-end development, API integration, state management, and building production-ready projects',
      },
      {
        date: 'Nov 2024 - present',
        name: 'Full Stack Open by University of Helsinki 🇫🇮',
        description:
          'Completed comprehensive full-stack web development training focusing on modern JavaScript, React, Redux, NodeJS, and Express. Gained hands-on experience with REST APIs, GraphQL, and database integration (MongoDB, PostgreSQL). Learned state management, component architecture, and hooks in React. Practiced testing, CI/CD pipelines, and deployment of production-ready applications.Explored TypeScript, async programming, and best practices for scalable web apps',
      },
    ],
  },
  ru: {
    header: 'Биография и опыт',
    description:
      'Я никогда не была компьютерным гиком и не мечатала работать в IT. Моя кареьера начиналась в журналистике и дизайне, а сейчас решила попробовать себя в роли разработчика, поступив в Hive Helsinki — школу с peer-to-peer подоходом, где прогресс движется любопытством и коллаборацией.',
    experience: [
      {
        date: 'Сентябрь 2018 - Июнь 2021',
        name: 'Бакалавр журналистики',
        description:
          'Развила сильные навыки исследования и анализа, умею собирать, проверять и синтезировать сложную информацию. Опыт в сторителлинге и коммуникации, адаптация стиля под разные платформы и медиа. Получила понимание медийной этики, проверки информации и критического мышления.',
      },
      {
        date: 'Ноябрь 2021 - Июнь 2022',
        name: 'UX/UI дизайнер в Func.',
        description:
          'Создавала приложения и сайты в среде, похожей на Agile, используя no-code инструменты. Применяла кастомный CSS и JavaScript для улучшения функциональности и дизайна. Настраивала базы данных. Отвечала за публикацию и деплой приложений в App Store.',
      },
      {
        date: 'Апрель 2024 - Октябрь 2025',
        name: 'Hive Helsinki 🇫🇮',
        description:
          'Разрабатывала проекты самостоятельно и в группах на C, писала программы с нуля или с минимальными библиотеками. Получила базовые знания C++. Реализовала веб-проект, применяя фронтенд и бэкенд концепции. Участвовала в менторской программе, сотрудничая с наставником над Camagru, углубляя понимание фронтенда, интеграции API, управления состоянием и создания проектов готовых к продакшну.',
      },
      {
        date: 'Ноябрь 2024 - настоящее время',
        name: 'Full Stack Open от Университета Хельсинки 🇫🇮',
        description:
          'Прошла полный курс по full-stack веб-разработке с упором на современный JavaScript, React, Redux, NodeJS и Express. Получен практический опыт работы с REST API, GraphQL и интеграцией баз данных (MongoDB, PostgreSQL). Изучено управление состоянием, архитектура компонентов и хуки в React. Практиковалось тестирование, CI/CD и деплой production-ready приложений. Изучен TypeScript, асинхронное программирование и лучшие практики для масштабируемых веб-приложений.',
      },
    ],
  },
}
