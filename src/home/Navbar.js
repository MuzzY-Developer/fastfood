import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbar">
                  <div className="nv1">
                      <a href="#" className="imgburger"><img src="/images/Burger.svg" alt=""/></a>
                      <p>Доставка готовых блюд в Екатеринбурге</p>
                      <a className="nomer" href="">+7 (953) 601-96-14</a>
                      <img className="imgLogo1"    src="/images/Gostin%20Food.svg" alt=""/>
                      <img className="imgIcon" src="/images/Icon.svg" alt=""/>
                      <a  className="lichniy"  href="#">Личный кабинет</a>
                      <img className="imgIcon2" src="/images/Shopping-cart.svg" alt=""/>
                      <span className="bir">1</span>
                      <a  className="lichniy2"  href="#">Корзина</a>
                  </div>
                    <div className="nv2">
                        <p className="productTX">Продукция собственного производства</p>
                        <p className="minuta">до 60 минута</p>
                        <button className="dostavka">с доставкой</button>
                        <img  className="iconsoat" src="/images/Iconsoat.svg" alt=""/>
                        <img  className="imgnavbar" src="/images/fotonavbar1.png" alt=""/>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;