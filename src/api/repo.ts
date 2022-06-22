import { NotFoundRepo, RepoInfo } from 'interfaces/repo_info'

const isNotFoundRepo = (data: NotFoundRepo): data is NotFoundRepo =>
  (data as NotFoundRepo).message !== undefined

export const getRepoInfo = async (full_name: string) => {
  const res = await fetch(`https://api.github.com/repos/${full_name}`)
  const data = await res.json()
  if (!isNotFoundRepo(data)) return data as RepoInfo
  else throw new Error('Репозиторий не найден')
}
