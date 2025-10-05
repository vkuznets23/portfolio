import { firstScreenData, type FirstScreenData } from './firstScreen'
import { projectsData, type ProjectsData } from './projects'
import { contactsData, type ContactsData } from './contacts'
import { experienceData, type ExperienceData } from './Experience'
import { aboutMeData, type AboutMeData } from './aboutMe'

export type Language = 'en' | 'ru'

export interface AppData {
  firstScreen: FirstScreenData
  experience: ExperienceData
  projects: ProjectsData
  aboutMe: AboutMeData
  contacts: ContactsData
}

export const loadAppData = async (language: Language): Promise<AppData> => {
  const loadData = async <T>(data: T): Promise<T> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 100)
    })
  }

  const [firstScreen, experience, aboutMe, projects, contacts] =
    await Promise.all([
      loadData(firstScreenData[language]),
      loadData(experienceData[language]),
      loadData(aboutMeData[language]),
      loadData(projectsData[language]),
      loadData(contactsData[language]),
    ])

  return {
    firstScreen,
    experience,
    projects,
    aboutMe,
    contacts,
  }
}

export { firstScreenData, aboutMeData, projectsData, contactsData }
export type { FirstScreenData, AboutMeData, ProjectsData, ContactsData }
