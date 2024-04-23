import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';

import locationImg from '../../assets/images/location.png';
import userLogo from '../../assets/images/user-logo.png';
import siteLogo from '../../assets/images/site-logo.png'
import cartLogo from '../../assets/images/cart-logo.png'

import './header.scss'

const Header = () => {
    const {totalPrice} = useContext(CartContext);
    return (
        <header className='header'>
            <div className='header__info'>
                <div className='container header__info__container'>
                    <div className='header__info__inner-left'>
                        <div className='header__location'>
                            <img src={locationImg} alt="location Img" />
                            <select>
                                <option value="moscow">Mockow</option>
                                <option value="peterburg">Sankt-Peterburg</option>
                                <option value="volgograd">Volgograd</option>
                                <option value="kazan">kazan</option>
                            </select>
                        </div>
                        <p>
                            Проверить адрес
                        </p>
                        <p>
                            Среднее время доставки*: <span>00:24:19</span>
                        </p>
                    </div>
                    <div className='header__info__inner-right'>
                        <p>
                            Время работы: с 11:00 до 23:00
                        </p>
                        <button>
                            <img src={userLogo} alt="user logo" />
                            Войти в аккаунт
                        </button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='header__bottom'>
                    <Link to='/'>
                        <img src={siteLogo} alt="site logo" />
                    </Link>
                        <Link to='/cart'>
                    <button>
                        <img src={cartLogo} alt="cart logo" />
                        {totalPrice} ₽
                    </button>
                        </Link>
                </div>
            </div>
        </header>
    )
}

export default Header