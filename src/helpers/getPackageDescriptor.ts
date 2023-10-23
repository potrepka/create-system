import getRepository from 'helpers/getRepository'
import getScripts from 'helpers/getScripts'
import { PackageInfo, RepositoryInfo } from 'types'

const getPackageDescriptor = (
  packageInfo: PackageInfo,
  repositoryInfo: RepositoryInfo,
) => {
  const { name, author, license, template, packageManager, host } = packageInfo
  const repository = getRepository(host, repositoryInfo)
  const scripts = getScripts(packageInfo)
  return {
    ...(repository === 'none' && { private: true }),
    name,
    author,
    ...(license !== 'none' && { license }),
    ...(repository !== 'none' && { repository }),
    scripts,
    ...(template === 'turbo-monorepo' &&
      // TODO: Create pnpm-workspace.yaml for pnpm
      packageManager !== 'pnpm' && {
        workspaces: ['apps/*', 'packages/*'],
      }),
  }
}

export default getPackageDescriptor
