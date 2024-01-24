
import PropTypes from 'prop-types';

const MenuBar = (props) => {

  return (
    <span className='card-base border-base min-h-10 px-8  flex items-center gap-4 inline-block rounded-full  inline bottom-0' >
      {props.children}
    </span >
  )
}

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuBar