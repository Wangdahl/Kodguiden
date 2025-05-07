import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Framsida from './pages/Framsida'
import Post from './pages/Post'
import OmOss from './pages/OmOss'
import Kontakt from './pages/Kontakt'
import TagList from './components/TagList'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Sidebar/>
      <main className='
        row-start-2
        col-start-2
        m-5
        mt-10
        overflow-y-auto
      '>
        <Routes>
          <Route path='/' element={<Framsida />}/>
          <Route path='post/:id' element={<Post />}/>
          <Route path='om-oss' element={<OmOss/>}/>
          <Route path='kontakt' element={<Kontakt/>}/>
        </Routes>
      </main>
      <TagList/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
