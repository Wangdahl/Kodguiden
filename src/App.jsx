import { useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Framsida from './pages/Framsida'
import Post from './pages/Post'
import OmOss from './pages/OmOss'
import Kontakt from './pages/Kontakt'
import TagList from './components/TagList'
import Footer from './components/Footer'

function App() {
  const [isFiltersOpen, setFiltersOpen] = useState(false)
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header/>
      {(isHome && <button
        onClick={() => setFiltersOpen(prev => !prev)}
        className='
          flex
          flex-row
          items-center
          justify-center
          gap-2
          lg:hidden 
          fixed 
          right-0 
          top-1/2 
          transform -translate-y-1/2 z-50 p-2 
          bg-green-800 
          text-green-50
          leading-tight
          h-25
          rounded-l-full
        '>
          <i className={`fa-solid ${isFiltersOpen ? 'fa-xmark' : 'fa-angle-left'}`}></i>
          <i className="fa-solid fa-filter"></i>
      </button>)}
      <Sidebar />
      <main className='
        lg:row-start-2
        lg:col-start-2
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
      <TagList
        isOpen={isFiltersOpen}
        onClose={() => setFiltersOpen(false)}
        className={`
          lg:row-start-2 lg:col-start-3 mr-5 mt-10 max-w-[350px]
          fixed inset-y-0 right-0 w-80 bg-transparent z-40 
          transform transition-transform duration-300
          ${isFiltersOpen ? 'translate-x-0' : 'translate-x-[110%]'}
          lg:relative lg:translate-x-0 lg:inset-auto lg:mr-5 lg:mt-5
        `}
      />
      {/* Overlay to close drawers (mobile only) */}
      {(isFiltersOpen) && (
        <div
          onClick={() => {
            setFiltersOpen(false)
          }}
          className="fixed inset-0 bg-black/10 z-30 lg:hidden"
        />
      )}
      <Footer />
    </>
  )
}

export default App
