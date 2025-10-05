export interface Contact {
  id: number
  name: string
  value: string
  icon: string
  link: string
}

export interface ContactsData {
  header: string
  description: string
  contacts: Contact[]
}

export const contactsData = {
  en: {
    header: 'Get In Touch',
    description:
      "I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design. Feel free to reach out!",
    contacts: [
      {
        id: 1,
        name: 'Email',
        value: 'viktoria@example.com',
        icon: '📧',
        link: 'mailto:viktoria@example.com',
      },
      {
        id: 2,
        name: 'LinkedIn',
        value: 'linkedin.com/in/viktoria',
        icon: '💼',
        link: 'https://linkedin.com/in/viktoria',
      },
      {
        id: 3,
        name: 'GitHub',
        value: 'github.com/viktoria',
        icon: '🐙',
        link: 'https://github.com/viktoria',
      },
      {
        id: 4,
        name: 'Phone',
        value: '+358 40 123 4567',
        icon: '📱',
        link: 'tel:+358401234567',
      },
    ],
  },
  ru: {
    header: 'Свяжитесь со мной',
    description:
      'Я всегда открыта для обсуждения новых возможностей, творческих проектов или просто для разговора о технологиях и дизайне. Не стесняйтесь обращаться!',
    contacts: [
      {
        id: 1,
        name: 'Email',
        value: 'viktoria@example.com',
        icon: '📧',
        link: 'mailto:viktoria@example.com',
      },
      {
        id: 2,
        name: 'LinkedIn',
        value: 'linkedin.com/in/viktoria',
        icon: '💼',
        link: 'https://linkedin.com/in/viktoria',
      },
      {
        id: 3,
        name: 'GitHub',
        value: 'github.com/viktoria',
        icon: '🐙',
        link: 'https://github.com/viktoria',
      },
      {
        id: 4,
        name: 'Телефон',
        value: '+358 40 123 4567',
        icon: '📱',
        link: 'tel:+358401234567',
      },
    ],
  },
}
