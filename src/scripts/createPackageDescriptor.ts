import { mkdirSync, writeFileSync } from 'fs'
import getPackageDescriptor from 'helpers/getPackageDescriptor'
import stringify from 'helpers/stringify'
import { join } from 'path'
import getPackageInfo from 'prompts/getPackageInfo'
import getRepositoryInfo from 'prompts/getRepositoryInfo'

const createPackageDescriptor = async () => {
  const packageInfo = await getPackageInfo()
  const repositoryInfo = await getRepositoryInfo(packageInfo)
  const packageDescriptor = getPackageDescriptor(packageInfo, repositoryInfo)
  const { name } = packageInfo
  mkdirSync(name)
  writeFileSync(join(name, 'package.json'), stringify(packageDescriptor))
  return packageInfo
}

export default createPackageDescriptor
