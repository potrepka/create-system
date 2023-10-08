export type License = 'MIT' | 'Apache-2.0' | 'none'

export type PackageTemplate =
  | 'library'
  | 'express-service'
  | 'react-app'
  | 'expo-app'
  | 'turbo-monorepo'

export type PackageManager = 'bun' | 'yarn' | 'pnpm' | 'npm'

export type Host = 'github' | 'gist' | 'bitbucket' | 'gitlab' | 'none'

export type Choice<T> = {
  message: string
  name: T
}

export type PackageInfo = {
  name: string
  author: string
  license: License
  template: PackageTemplate
  packageManager: PackageManager
  host: Host
}

export type RepositoryInfo = {
  user?: string
  repo?: string
  gist?: string
}

export type PackageDescriptor = {
  private?: boolean
  name: string
  author: string
  repository?: string
  license?: Exclude<License, 'none'>
  scripts?: Record<string, string>
}
