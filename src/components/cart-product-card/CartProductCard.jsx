import { useContext } from 'react';

import PropTypes from 'prop-types';

import { CartContext } from '../../contexts/CartContext';

import './cartProductCard.scss';


const CartProductCard = ({image, price, id, quantity, name, description}) => {
    const {increaseQuantity, decreaseQuantity} = useContext(CartContext);
    return (
        <div className='product-card'>
            <div className='product-card__left'>
                <img src={image} alt="" width={120} height={120} />
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className='product-card__right'>
                <div className='product-card__btns'>
                    <button onClick={() => decreaseQuantity(id)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQuantity(id)}>+</button>
                </div>
                <p className='product-card__price'>{parseInt(price)}₽</p>
            </div>
        </div>
    )
}

CartProductCard.propTypes = {
    image: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    id: PropTypes.string,
    quantity: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
}

export default CartProductCard