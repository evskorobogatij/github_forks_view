
export interface OwnerInfo {
  login: string
    avatar_url: string
}
export interface RepoInfo {
  name: string
  full_name: string
  owner: OwnerInfo
  forks: number
  stargazers_count: number
  description: string
  fork: boolean
  forks_url: string
}

export interface NotFoundRepo {
  message: string
  documentation_url: string
}

export type ReposList = Array<RepoInfo>