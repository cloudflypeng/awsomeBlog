import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useAtom } from 'jotai'
import { themeAtom } from './jotai'


import Home from './home/index'
import Demo from './demo'

import Nav from './nav'
import BlogList from './blog'
import Article from './blog/detail'

function App() {

  const [theme] = useAtom(themeAtom)



  return (
    <div className={theme + ' h-full'}>
      <div className={`bg-base h-full flex flex-col`}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/view/:mdTitle" element={<Article />} />
          </Routes>
        </BrowserRouter>
        {/* <Home /> */}
      </div>
    </div>
  )
}

export default App
