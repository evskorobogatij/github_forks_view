import Main from '@pages/Main'
import SearchResult from '@pages/SearchResult'
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={'/search'} element={<SearchResult />} />
      </Routes>
    </>
  )
}

export default App
