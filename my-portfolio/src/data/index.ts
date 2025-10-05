import { firstScreenData, type FirstScreenData } from './firstScreen'
import { projectsData, type ProjectsData } from './projects'
import { contactsData, type ContactsData } from './contacts'
import { experienceData, type ExperienceData } from './experience'
import { aboutMeData, type AboutMeData } from './aboutMe'

export type Language = 'en' | 'ru'

export interface AppData {
  firstScreen: FirstScreenData
  experience: ExperienceData
  projects: ProjectsData
  aboutMe: AboutMeData
  contacts: ContactsData
}

export function getData(language: Language) {
  return {
    firstScreen: firstScreenData[language],
    experience: experienceData[language],
    aboutMe: aboutMeData[language],
    projects: projectsData[language],
    contacts: contactsData[language],
  }
}

export { firstScreenData, aboutMeData, projectsData, contactsData }
export type { FirstScreenData, AboutMeData, ProjectsData, ContactsData }
