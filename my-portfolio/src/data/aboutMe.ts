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
    header: 'Кто я, если не пишу код\nи не учусь?',
    description:
      'Мне трудно найти слова, чтобы описать себя в нескольких словах, поэтому я решила поделиться некоторыми забавными фактами, которые помогут познакомиться со мной поближе',
    facts: [
      {
        fact: 'Я очень увлекаюсь японской культурой. Я была в Японии однажды, но хотела бы ездить туда ещё и ещё. Может однажды я даже начну учить японский.',
      },
      {
        fact: 'Я люблю делать селфи в круглые зеркала и не могу пройти мимо если вижу одно.',
      },
      {
        fact: 'Я обожаю собак! Я бы хотела завести дудля когда-нибудь, а пока я довальствуюсь временем, проведенным с собаками друзей и прохожих.',
      },
      {
        fact: 'У меня есть коллекция смешных хендмейд чашек.',
      },
      {
        fact: 'Я увлекаюсь плёночной фотографией. Однажды я купили одноразовую камеру в путешествие и с тех пор не могу остановиться.',
      },
      {
        fact: 'Иногда я вяжу, чтобы расслабиться.',
      },
      {
        fact: 'Я люблю пересматривать "The Office". В Рождество и Хеллоуин я пересматриваю тематические эпизоды (это традиция). Можно сказать, что я фанат - у меня даже есть лего по сериалу.',
      },
      {
        fact: 'Моя одежда на 99% чёрная. Мне кажется чёрный легче всего сочетать',
      },
      {
        fact: 'У меня есть традиция в путешествиях: искать в новом городе фото будку, чтобы принести домой забавные снимки.',
      },
      {
        fact: 'Короткая форма моего имени по-фински значит "проблема" (vika), но обещаю, проблем я не доставлю =^__^=',
      },
    ],
  },
}
