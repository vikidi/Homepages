// TODO: translations for language names?

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

export const getByName = name => {
  return languages.filter(l => l.name === name)[0]
}

const defaultLanguage = {
  short: 'en',
  name: 'English'
}

export default defaultLanguage