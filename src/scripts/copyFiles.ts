import { PackageInfo } from 'types'

const copyFiles = async (packageInfo: PackageInfo) => {
  const { template } = packageInfo
  switch (template) {
    case 'library':
      break
    case 'express-service':
      break
    case 'react-app':
      break
    case 'expo-app':
      break
    case 'turbo-monorepo':
      break
    default:
      break
  }
}

export default copyFiles
