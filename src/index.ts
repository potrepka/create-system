import enquirer from 'enquirer'
import createExpoApp from 'scripts/expo'
import createExpressService from 'scripts/express'
import createLibrary from 'scripts/library'
import lintSystem from 'scripts/lint'
import prepareSystem from 'scripts/prepare'
import createReactApp from 'scripts/react'
import createTurboMonorepo from 'scripts/turbo'
import { Choice, Host, License, PackageInfo, PackageType } from 'types'

const TYPE_CHOICES: Choice<PackageType>[] = [
  { message: 'Library', name: 'library' },
  { message: 'Service (Express)', name: 'express-service' },
  { message: 'App (React)', name: 'react-app' },
  { message: 'App (Expo)', name: 'expo-app' },
  { message: 'Monorepo (Turbo)', name: 'turbo-monorepo' },
]

const HOST_CHOICES: Choice<Host>[] = [
  { message: 'GitHub', name: 'github' },
  { message: 'Gist', name: 'gist' },
  { message: 'Bitbucket', name: 'bitbucket' },
  { message: 'GitLab', name: 'gitlab' },
  { message: 'None', name: 'none' },
]

const LICENSE_CHOICES: Choice<License>[] = [
  { message: 'MIT', name: 'MIT' },
  { message: 'Apache 2.0', name: 'Apache-2.0' },
  { message: 'None', name: 'none' },
]

const getPackageInfo = (): Promise<PackageInfo> =>
  enquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this package?',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Who is the author of this package?',
    },
    {
      type: 'select',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: LICENSE_CHOICES,
    },
    {
      type: 'select',
      name: 'type',
      message: 'Which template would you like to use?',
      choices: TYPE_CHOICES,
    },
    {
      type: 'select',
      name: 'host',
      message: 'Where will the repository be hosted?',
      choices: HOST_CHOICES,
    },
  ])

const createSystem = async () => {
  const info = await getPackageInfo()
  await prepareSystem(info)
  switch (info.type) {
    case 'library':
      await createLibrary(info)
      break
    case 'express-service':
      await createExpressService(info)
      break
    case 'react-app':
      await createReactApp(info)
      break
    case 'expo-app':
      await createExpoApp(info)
      break
    case 'turbo-monorepo':
      await createTurboMonorepo(info)
      break
    default:
      break
  }
  await lintSystem()
}

export default createSystem
