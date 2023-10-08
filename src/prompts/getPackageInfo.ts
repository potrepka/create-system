import enquirer from 'enquirer'
import { kebabCase } from 'lodash'
import {
  Choice,
  Host,
  License,
  PackageInfo,
  PackageManager,
  PackageTemplate,
} from 'types'

const LICENSE_CHOICES: Choice<License>[] = [
  { message: 'MIT', name: 'MIT' },
  { message: 'Apache 2.0', name: 'Apache-2.0' },
  { message: 'None', name: 'none' },
]

const TYPE_CHOICES: Choice<PackageTemplate>[] = [
  { message: 'Library', name: 'library' },
  { message: 'Service (Express)', name: 'express-service' },
  { message: 'App (React)', name: 'react-app' },
  { message: 'App (Expo)', name: 'expo-app' },
  { message: 'Monorepo (Turbo)', name: 'turbo-monorepo' },
]

const PACKAGE_MANAGER_CHOICES: Choice<PackageManager>[] = [
  { message: 'Bun', name: 'bun' },
  { message: 'Yarn', name: 'yarn' },
  { message: 'PNPM', name: 'pnpm' },
  { message: 'NPM', name: 'npm' },
]

const HOST_CHOICES: Choice<Host>[] = [
  { message: 'GitHub', name: 'github' },
  { message: 'Gist', name: 'gist' },
  { message: 'Bitbucket', name: 'bitbucket' },
  { message: 'GitLab', name: 'gitlab' },
  { message: 'None', name: 'none' },
]

const getPackageInfo = (): Promise<PackageInfo> =>
  enquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this package?',
      format: kebabCase,
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
      name: 'template',
      message: 'Which template would you like to use?',
      choices: TYPE_CHOICES,
    },
    {
      type: 'select',
      name: 'packageManager',
      message: 'Which package manager would you like to use?',
      choices: PACKAGE_MANAGER_CHOICES,
    },
    {
      type: 'select',
      name: 'host',
      message: 'Where will the repository be hosted?',
      choices: HOST_CHOICES,
    },
  ])

export default getPackageInfo
