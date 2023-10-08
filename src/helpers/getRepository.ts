import { Host, RepositoryInfo } from 'types'

const getRepository = (host: Host, repositoryInfo: RepositoryInfo) => {
  const { user, repo, gist } = repositoryInfo
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
}

export default getRepository
