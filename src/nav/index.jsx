import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { themeAtom } from '.././jotai'

const Nav = () => {

  const [theme, setTheme] = useAtom(themeAtom)

  const handleSwitch = () => setTheme(theme == 'dark' ? 'light' : 'dark')

  return (
    <nav className="flex justify-between items-center p-6 font-mono font-bold text-base z-50">
      <Link to="/" className="link" >
        <span className='text-xl'>
          meanc
        </span>
      </Link>
      <div className="flex gap-6">
        <Link to="/blog" className="link">blog</Link>
        <Link to="/demo" className="link">demo</Link>
        <span className="link" onClick={handleSwitch}>L/D</span>
      </div>
    </nav>
  )
}

export default Nav