export type FirstScreenHeaderOptions = {
  option1: string
  option2: string
  option3: string
}

export type FirstScreenSection = {
  header: {
    line1: string
    options: FirstScreenHeaderOptions
  }
  description: string
}
