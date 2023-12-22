// import { createPortal } from 'react-dom';

// import { useAtom } from 'jotai'
// import { themeAtom } from '../jotai'

import { useRef } from "react";

import useGsapList from '../gsap/useList'

const Demo = () => {

  // const [theme] = useAtom(themeAtom)
  // const isDark = theme === 'dark'

  const container = useRef();
  useGsapList({ item: '.list-handle' })

  return (
    <ul ref={container} className="article mx-auto text-base">
      <li className='list-handle'>
        <h3>
          <a className="link" href="https://spring.130011.xyz/" target="_blank" rel="noreferrer">React-spring 中文文档</a>
        </h3>
      </li>
    </ul>
  )
}

export default Demo