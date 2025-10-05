export type AboutMeData = {
  header: string
  description: string
  facts: { fact: string }[]
}

export const aboutMeData = {
  en: {
    header: 'Who am I beyond coding\nand studying?',
    description:
      'Since it’s hard to sum myself up in only a few words, I thought I’d share some fun facts instead — they’ll give you a better idea of who I am',
    facts: [
      {
        fact: 'I’m really into Japanese culture. I’ve been to Japan once, but I want to explore it more and more. Maybe one day I’ll even start learning Japanese.',
      },
      {
        fact: 'I love taking round mirror selfies. If I see one, there’s no way I can just walk past it.',
      },
      {
        fact: 'I’m a huge dog lover. One day I’d love to have my own doodle, but for now I just ask to pet dogs on the street or beg my friends to bring their dogs to events.',
      },
      {
        fact: 'I have a collection of funny handmade mugs',
      },
      {
        fact: 'I’m into film photography. Once I brought a disposable camera on a trip, and since then I haven’t been able to stop.',
      },
      {
        fact: 'Sometimes I knit or crochet, mostly as a way to relax',
      },
      {
        fact: 'I love rewatching The Office. Every Halloween and Christmas, I make it a tradition to watch the themed episodes. I’m kinda a fan of the show, I even have a LEGO set at home.',
      },
      {
        fact: 'My wardrobe is 99% black clothes — I just feel the best in black.',
      },
      {
        fact: 'I have a travel ritual: hunting down photo booths in every city and bringing home silly strips of memories',
      },
      {
        fact: 'My short name is Vika which means “problem” in Finnish but I’m not gonna cause any problems =^__^=',
      },
    ],
  },
  ru: {
    header: 'Кто я, кроме кодирования\nи изучения?',
    description:
      'Так как трудно себя описать всего в нескольких словах, я решила поделиться некоторыми забавными фактами — они дадут вам лучшее представление о себе',
    facts: [],
  },
}
