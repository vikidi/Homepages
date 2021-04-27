const defaultLanguage = {
  short: 'en',
  name: 'English'
}

export const languages = [
  {
    short: 'en',
    name: 'English'
  },
  {
    short: 'fi',
    name: 'Suomi'
  }
]

export const languageShorts = () => {
  return languages.map(l => l.short)
}

export const getByName = name => {
  return languages.filter(l => l.name === name)[0]
}

export default defaultLanguage