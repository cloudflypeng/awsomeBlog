import { HashRouter, Routes, Route } from 'react-router-dom';

import { useAtom } from 'jotai';
import { themeAtom } from './jotai';

import Home from './home/index';
import Demo from './demo';

import Nav from './nav';
import BlogList from './blog';
import Article from './blog/detail';
import WorkList from './worklist';

function App() {
  const [theme] = useAtom(themeAtom);

  return (
    <div className={theme + ' min-h-full'}>
      <div className={`bg-base min-h-screen flex flex-col`}>
        <HashRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<BlogList />} />
            <Route path='/demo' element={<Demo />} />
            <Route path='/view/:mdTitle' element={<Article />} />
            {/* 暂时 */}
            <Route path='/worklist' element={<WorkList />} />
          </Routes>
        </HashRouter>
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
