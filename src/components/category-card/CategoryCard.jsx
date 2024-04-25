import PropTypes  from 'prop-types';

import './categoryCard.scss';

const CategoryCard = ({name, image, hoverImage}) => {
  return (
    <a href={`#${name}`} className='category__card'> 
        <img className='imag' src={image} alt={name} />
        <img className='imagH' src={hoverImage} alt={name} />
        <p>{name}</p>
    </a>
  )
}

CategoryCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    hoverImage: PropTypes.string,
}

export default CategoryCard