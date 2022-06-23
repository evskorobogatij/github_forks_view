export interface OwnerInfo {
  login: string
  avatar_url: string
}
export interface RepoInfo {
  id: number
  name: string
  full_name: string
  owner: OwnerInfo
  forks: number
  stargazers_count: number
  description: string
  fork: boolean
  forks_url: string
  html_url: string
}

export interface NotFoundRepo {
  message: string
  documentation_url: string
}

export type ReposList = Array<RepoInfo>
