import React from 'react';
import productImg from '../../../assets/img/product-packet.png';
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, dec, remove } from '../../../store/cartSlice';

const Cart = () => {
  let totalMoney = 0;
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.value);
  const cartList = useSelector((state) => state.cart.value);
  cartList.map(product => {
    return totalMoney += parseInt(product.price)*parseInt(product.total)
  });
  return (
    <section className="section-product">
      <div className="container">
        <h2 className="section-title">Your Cart</h2>
        <ul className="product-list row">
          {
            cartList.map(product => (
              <li className="product-item col-4" key={product.id}>
                <div className="product-wrap">
                  <Link to={`/product/${product.id}`} className="product-image">
                    <span className="wrap-fav-couter">
                      {!!product.total && <span>x{product.total}</span>}
                    </span>
                    <img alt="product" src={productImg} />
                    <span className={`product-fav ${favList.indexOf(product.id) >=0 ? 'active' : ''}`}><FaHeart /></span>
                  </Link>
                  <div className="product-card">
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna</p>
                    <p className="product-price">{product.price}$</p>
                  </div>
                  <div className="actions">
                    <button className="product-btn btn-hover" onClick={() => dispatch(add(product))}> + </button>
                    <button className="product-btn btn-hover" onClick={() => dispatch(dec(product))}> - </button>
                    <button className="product-btn btn-hover remove" onClick={() => dispatch(remove(product))}> X </button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        {!!totalMoney &&
          <div className="total-payment">
            <h5 className="total-money">Total: {totalMoney}$</h5>
            <button className="btn btn-hover">Payment</button>
          </div>
        }
      </div>
    </section>
  );
}
export default Cart;
