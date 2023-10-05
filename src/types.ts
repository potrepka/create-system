export type PackageType =
  | 'library'
  | 'express-service'
  | 'react-app'
  | 'expo-app'
  | 'turbo-monorepo'

export type Host = 'github' | 'gist' | 'bitbucket' | 'gitlab' | 'none'

export type License = 'MIT' | 'Apache-2.0' | 'none'

export type Choice<T> = {
  message: string
  name: T
}

export type PackageInfo = {
  name: string
  author: string
  host: Host
  type: PackageType
  license: License
}

export type RepositoryInfo = {
  user?: string
  repo?: string
  gist?: string
}
