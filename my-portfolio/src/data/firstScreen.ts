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
        option1: 'Software\nDeveloper',
        option2: 'Career\nChanger',
        option3: 'Student\nat Hive',
      },
    },
    description:
      'I started in UX/UI, but one day decided to dive into software development. I love learning by doing, exploring new tools, and building high-quality projects. For me, code is about clarity, joy, and creating something others can build upon',
  },
  ru: {
    header: {
      line1: 'Я —',
      options: {
        option1: 'софт-разработчик',
        option2: 'бывший\nдизайнер',
        option3: 'студент\nшколы Hive',
      },
    },
    description:
      'Я начинала в UX/UI, но однажды решила погрузиться в разработку ПО. Я люблю учиться на практике, изучать новые инструменты и создавать качественные проекты. Для меня код это про читаемость и удовольствие',
  },
}
