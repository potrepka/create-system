import { PackageInfo } from 'types'

const getDependencies = (packageInfo: PackageInfo, dev: boolean) => {
  const { template } = packageInfo
  if (dev) {
    switch (template) {
      case 'library':
        return []
      case 'express-service':
        return []
      case 'react-app':
        return []
      case 'expo-app':
        return []
      case 'turbo-monorepo':
        return [
          '@trivago/prettier-plugin-sort-imports',
          'concurrently',
          'husky',
          'prettier',
          'syncpack',
          'turbo',
        ]
      default:
        return []
    }
  } else {
    switch (template) {
      case 'library':
        return []
      case 'express-service':
        return []
      case 'react-app':
        return []
      case 'expo-app':
        return []
      case 'turbo-monorepo':
        return []
      default:
        return []
    }
  }
}

export default getDependencies
