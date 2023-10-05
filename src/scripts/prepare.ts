import enquirer from 'enquirer'
import { mkdirSync, writeFileSync } from 'fs'
import stringify from 'helpers/stringify'
import { kebabCase } from 'lodash'
import { join } from 'path'
import { PackageInfo, RepositoryInfo } from 'types'

const getRepositoryInfo = (packageInfo: PackageInfo): Promise<RepositoryInfo> =>
  enquirer.prompt([
    {
      type: 'input',
      name: 'user',
      message: 'What is the user or organization name?',
      skip: !['github', 'bitbucket', 'gitlab'].includes(packageInfo.host),
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is the repository name?',
      skip: !['github', 'bitbucket', 'gitlab'].includes(packageInfo.host),
    },
    {
      type: 'input',
      name: 'gist',
      message: 'What is the gist ID?',
      skip: !['gist'].includes(packageInfo.host),
    },
  ])

const prepareSystem = async (packageInfo: PackageInfo) => {
  const { name: rawName, author, host, license } = packageInfo
  const name = kebabCase(rawName)
  mkdirSync(name)
  const repositoryInfo = await getRepositoryInfo(packageInfo)
  const { user, repo, gist } = repositoryInfo
  const repository = (() => {
    switch (host) {
      case 'github':
      case 'bitbucket':
      case 'gitlab':
        return `${host}:${user}/${repo}`
      case 'gist':
        return `${host}:${gist}`
      default:
        return undefined
    }
  })()
  const packageDescriptor = {
    ...(repository === 'none' && { private: true }),
    name,
    author,
    ...(repository !== 'none' && { repository }),
    ...(license !== 'none' && { license }),
  }
  writeFileSync(join(name, 'package.json'), stringify(packageDescriptor))
}

export default prepareSystem
