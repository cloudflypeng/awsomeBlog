import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { themeAtom } from '.././jotai'

const Nav = () => {

  const [theme, setTheme] = useAtom(themeAtom)

  const handleSwitch = () => setTheme(theme == 'dark' ? 'light' : 'dark')

  return (
    <nav className="flex justify-between p-8 font-mono font-bold text-base z-50">
      <Link to="/" className="link">
        meanc
      </Link>
      <div className="flex gap-6">
        <Link to="/blog" className="link">blog</Link>
        <a className="link" href="https://github.com/cloudflypeng" target="_blank" rel="noreferrer">github</a>
        <span className="link" onClick={handleSwitch}>L/D</span>
      </div>
    </nav>
  )
}

export default Nav