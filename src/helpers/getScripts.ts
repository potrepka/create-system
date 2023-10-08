import { PackageInfo } from 'types'

const getRepository = (packageInfo: PackageInfo) => {
  const { template, packageManager } = packageInfo
  switch (template) {
    case 'library':
      return {}
    case 'express-service':
      return {}
    case 'react-app':
      return {}
    case 'expo-app':
      return {}
    case 'turbo-monorepo':
      return {
        build: 'turbo run build',
        clean: 'turbo run clean && rm -rf node_modules',
        dev: 'turbo run dev',
        lint: 'turbo run lint',
        'lint:format':
          'prettier --cache --check "**/*.{js,ts,tsx,md,mdx,json}"',
        'lint:packages': `concurrently ${packageManager}:lint:packages:*`,
        'lint:packages:format': 'syncpack format',
        'lint:packages:mismatches': 'syncpack list-mismatches',
        'lint:packages:semver': 'syncpack lint-semver-ranges',
        prepare: 'husky install',
        start: 'turbo run start',
        test: 'turbo run test',
      }
    default:
      return undefined
  }
}

export default getRepository
