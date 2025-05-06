import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Framsida from './pages/Framsida'
import Post from './pages/Post'
import OmOss from './pages/OmOss'
import Kontakt from './pages/Kontakt'
import TagList from './components/TagList'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Framsida />}/>
        <Route path='post/:id' element={<Post />}/>
        <Route path='om-oss' element={<OmOss/>}/>
        <Route path='kontakt' element={<Kontakt/>}/>
      </Routes>
      <TagList />
    </BrowserRouter>
  )
}

export default App
