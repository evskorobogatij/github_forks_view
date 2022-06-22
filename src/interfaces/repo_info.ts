export interface RepoInfo {
  name: string
  full_name: string
  owner: {
    login: string
    avatar_url: string
  }
  forks: number
  stargazers_count: number
  description: string
  fork: boolean
}

export interface NotFoundRepo {
  message: string
  documentation_url: string
}

export type ReposList = Array<RepoInfo>