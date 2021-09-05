import React, { useState, useEffect } from 'react';
import logo from '../../../assets/img/product-packet.png';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../../../store/cartSlice';
import { FaHeart } from 'react-icons/fa';


const ProductDetail = () => {
  const favList = useSelector((state) => state.fav.value)
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    if(!product.price) product.price = 1800000;
    dispatch(add(product));
  }

  useEffect(() => {
    fetch(`https://reqres.in/api/unknown/${id}`).then(e => e.json())
      .then(
        e => {
          setProduct(e.data);
        }
      )
  }, [id]);

  return (
    <section className="section-product-detail">
      <div className="container">
        <div className="product-detail-wrap">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-card">
            <div className="product-image">
              <img  src={logo} alt="logo" />
              <span className={`product-fav ${favList.indexOf(parseInt(id)) >=0 ? 'active' : ''}`} ><FaHeart /></span>
            </div>
            <div>
              <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna</p>
              <p className="product-price">1.800.000đ</p>
              <button className="btn btn-hover" onClick={() => handleAddCart(product)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetail;
