import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import CartProductCard from "../../components/cart-product-card/CartProductCard"

import send from '../../assets/images/send.png'

import './cart.scss';

const Cart = () => {
  const { cartProducts, totalPrice } = useContext(CartContext);
  return (
    <section className="cart">
      <div className="container cart__products">
        <h1 className="cart__products__title">Ваш заказ</h1>
        {cartProducts.map(el => {
          return <CartProductCard key={el.id} {...el} />
        })}

        {
          cartProducts.length !== 0 ? <div className="cart__promo">
            <div>
              <label htmlFor="promo">
                <input type="promo" placeholder="Промокод" />
                <button>
                  <img src={send} alt="send" />
                </button>
              </label>
            </div>
            <h1 className="cart__products__price">
              Итого: {totalPrice} ₽
            </h1>
          </div> :
            <h1>
              Здесь ничего нет
            </h1>
        }

      </div>
    </section>
  )
}

export default Cart