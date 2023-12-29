import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TitleItem = ({ title, author, time }) => {

  const navigate = useNavigate();
  const toView = () => {
    navigate(`/view/${title}`)
  }

  return (
    <li className='list-handle my-5' onClick={toView}>
      <h3 className="link inline mb-1">{title}</h3>
      <div className="opacity-50 text-xs pl-6">{author}--{time}</div>
    </li>
  )
}

export default TitleItem