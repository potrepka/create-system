import enquirer from 'enquirer'
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

export default getRepositoryInfo
