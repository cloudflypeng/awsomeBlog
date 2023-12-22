import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TitleItem = ({ title, author, time }) => {

  const navigate = useNavigate();
  const toView = () => {
    navigate(`/view/${title}`)
  }

  return (
    <li className='list-handle' onClick={toView}>
      <h3 className="link mb-1">{title}</h3>
      <span className="opacity-50 text-xs">{author}--{time}</span>
    </li>
  )
}

export default TitleItem