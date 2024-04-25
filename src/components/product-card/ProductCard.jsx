import { useContext } from 'react';

import PropTypes from 'prop-types';

import { CartContext } from '../../contexts/CartContext';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import './productCard.scss';

const ProductCard = ({ id, filter, image, name, description, price }) => {
    const { addToCart, cartProducts, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const productInCart = cartProducts.find(el => el.id === id);
    return (
        <div className='productCard'>
            {filter === "" ? <></> : <span className='productCard__span'>{filter}</span>}

            <div className='productCard__img-box'>
                <LazyLoadImage src={image} alt='name' />
            </div>
            <div className='productCard__infos'>
                <h2 className='productCard__title'>{name}</h2>
                <p className='productCard__text'>{description}</p>
                <div className='productCard__inner-box'>
                    {productInCart ?
                        <div className='productCard__btns'>
                            <button onClick={() => decreaseQuantity(id)}>-</button>
                            <span>{productInCart.quantity}</span>
                            <button onClick={() => increaseQuantity(id)}>+</button>
                        </div>
                        :
                        <button onClick={() => addToCart(id)} className='productCard__btn'>
                            Выбрать
                        </button>
                    }

                    <p className='productCard__price'>
                        от {price} ₽
                    </p>
                </div>
            </div>
        </div>
    )
}
ProductCard.propTypes = {
    id: PropTypes.string,
    filter: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
}
export default ProductCard