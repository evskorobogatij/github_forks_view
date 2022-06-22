import { NotFoundRepo, RepoInfo, ReposList } from 'interfaces/repo_info'

const isNotFoundRepo = (data: NotFoundRepo): data is NotFoundRepo =>
  (data as NotFoundRepo).message !== undefined

export const getRepoInfo = async (full_name: string) => {
  const res = await fetch(`https://api.github.com/repos/${full_name}`)
  const data = await res.json()
  if (!isNotFoundRepo(data)) return data as RepoInfo
  else throw new Error('Репозиторий не найден')
}


export const getRepoForks = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  if(Array.isArray(data)) return data as ReposList
  else throw new Error('Ошибка получения форков')
}