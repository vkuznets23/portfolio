export interface FirstScreenData {
  header: {
    line1: string
    options: {
      option1: string
      option2: string
      option3: string
    }
  }
  description: string
}

export const firstScreenData = {
  en: {
    header: {
      line1: "I'm a",
      options: {
        option1: 'Web\nDeveloper',
        option2: 'Career\nChanger',
        option3: 'Hive\nAlumnus',
      },
    },
    description:
      'I’m a full-stack developer with a background in UX/UI design. I love writing clean, easy-to-read, and maintainable code. I learn by doing, exploring new tools, and creating high-quality projects.',
  },
  ru: {
    header: {
      line1: 'Я —',
      options: {
        option1: 'ПО\nразработчик',
        option2: 'бывший\nдизайнер',
        option3: 'Hive\nвыпускница',
      },
    },
    description:
      'Я full-stack разработчик с опытом в UX/UI дизайне. Мне нравится писать чистый, понятный и поддерживаемый код, учиться на практике, изучать новые инструменты и создавать качественные проекты.',
  },
}
