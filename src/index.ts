import enquirer from 'enquirer'

type Type =
  | 'typescript-library'
  | 'express-service'
  | 'react-app'
  | 'expo-app'
  | 'turbo-monorepo'

type License = 'mit' | 'apache-2.0' | 'none'

type TypeChoice = {
  message: string
  name: Type
}

type LicenseChoice = {
  message: string
  name: License
}

type Info = {
  name: string
  type: Type
  license: License
}

const TYPE_CHOICES: TypeChoice[] = [
  { message: 'Library (TypeScript)', name: 'typescript-library' },
  { message: 'Service (Express)', name: 'express-service' },
  { message: 'App (React)', name: 'react-app' },
  { message: 'App (Expo)', name: 'expo-app' },
  { message: 'Monorepo (Turbo)', name: 'turbo-monorepo' },
]

const LICENSE_CHOICES: LicenseChoice[] = [
  { message: 'MIT', name: 'mit' },
  { message: 'Apache 2.0', name: 'apache-2.0' },
  { message: 'None', name: 'none' },
]

const getInfo = (): Promise<Info> =>
  enquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the package name?',
    },
    {
      type: 'select',
      name: 'type',
      message: 'What is the package type?',
      choices: TYPE_CHOICES,
    },
    {
      type: 'input',
      name: 'author',
      message: 'Who is the author?',
    },
    {
      type: 'select',
      name: 'license',
      message: 'Under which license will the package be published?',
      choices: LICENSE_CHOICES,
    },
  ])

const createTypescriptLibrary = (info: Info) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = info
}

const createExpressService = (info: Info) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = info
}

const createReactApp = (info: Info) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = info
}

const createExpoApp = (info: Info) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = info
}

const createTurboMonorepo = (info: Info) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = info
}

const createSystem = async () => {
  const info = await getInfo()
  switch (info.type) {
    case 'typescript-library':
      createTypescriptLibrary(info)
      break
    case 'express-service':
      createExpressService(info)
      break
    case 'react-app':
      createReactApp(info)
      break
    case 'expo-app':
      createExpoApp(info)
      break
    case 'turbo-monorepo':
      createTurboMonorepo(info)
      break
    default:
      break
  }
}

export default createSystem
