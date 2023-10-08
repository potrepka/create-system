import { execa } from 'execa'
import { PackageInfo } from 'types'

const installDependency = async (
  dependency: string,
  packageInfo: PackageInfo,
  isDevelopment: boolean,
) => {
  const { name, packageManager } = packageInfo
  await execa(
    packageManager,
    [
      'add',
      isDevelopment ? '-D' : '',
      '-E',
      packageManager === 'pnpm' ? '-C' : '--cwd',
      name,
      dependency,
    ].filter(Boolean),
    { stdio: 'inherit' },
  )
}

export default installDependency
