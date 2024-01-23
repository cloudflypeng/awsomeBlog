// import { createPortal } from 'react-dom';
// import Spline from '@splinetool/react-spline';

import { useAtom } from 'jotai'
import { themeAtom } from '../jotai'

import { BLOG_MENU } from './blogmune'
import TitleItem from './title-item'

import useGsapList from '../gsap/useList'


const BlogList = () => {

  // const [theme] = useAtom(themeAtom)
  // const isDark = theme === 'dark'

  useGsapList({ item: '.list-handle' })

  return (
    <div className="relative grow w-full flex justify-center text-base font-mono mt-20 z-10">
      <section className="w-3/4 md:w-2/5 z-1">
        <h3>Stay Hungry Stay Foolish</h3>
        {BLOG_MENU.map(art => {
          return <TitleItem key={art.title} {...art} />
        })}
      </section>
      {/* portal the bg Spline, so that can use different Spline in every part  */}
    </div>
  )
}

export default BlogList