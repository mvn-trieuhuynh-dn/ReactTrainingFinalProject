import React, { useState, useEffect } from 'react';
import productImg from '../../../assets/img/product-packet.png';
import { FaAngleRight, FaHeart } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from '../../../store/favSlice';
import { add } from '../../../store/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.value)
  const [products, setProducts] = useState([]);
  const pages = [1, 2];
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/products?page=${page}`).then(e => e.json())
      .then(
        e => {
          setProducts(e.data);
        }
      )
  }, [page]);

  function handleChangePage(number) {
    if (number >= pages[0] && number <= pages[pages.length - 1]) {
      setPage(number);
    }
  }

  const handleFav = (e, id) => {
    e.preventDefault();
    dispatch(toggle(id));
  }

  const handleAddCart = (product) => {
    if(!product.price) product.price = 1800000;
    dispatch(add(product));
  }

  return (
    <section className="section-product">
      <div className="container">
        <h2 className="section-title">Products</h2>
        <ul className="product-list row">
          {
            products.map(product => (
              <li className="product-item col-4" key={product.id}>
                <div className="product-wrap">
                  <Link to={`/product/${product.id}`} className="product-image">
                    <img src={productImg} />
                    <span className={`product-fav ${favList.indexOf(product.id) >=0 ? 'active' : ''}`} onClick={(event) => handleFav(event, product.id)}><FaHeart /></span>
                  </Link>
                  <div className="product-card">
                    <h4 className="product-name">{product.name} ({product.year})</h4>
                    <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna</p>
                  </div>
                  <button className="product-btn btn-hover" onClick={() => handleAddCart(product)}><FaCartPlus /></button>
                </div>
              </li>
            )
            )
          }
        </ul>
        <ul className="pagination">
          <li className="page-item" onClick={() => handleChangePage(pages[0])}>
            <span className={page === pages[0] ? "page-link txt-gray" : "page-link pointer"}>
              <i className=""><FaAngleDoubleLeft /></i>
            </span>
          </li>
          <li className="page-item" onClick={() => handleChangePage(page - 1)}>
            <span className={page === pages[0] ? "page-link txt-gray" : "page-link pointer"}>
              <i className=""><FaAngleLeft /></i>
            </span>
          </li>
          {
            pages.map(item =>
              <li className="page-item pointer" onClick={() => handleChangePage(item)} key={item}>
                <span className={page === item ? "page-link link-text active" : "page-link link-text"}>{item}</span>
              </li>
            )
          }
          <li className="page-item" onClick={() => handleChangePage(page + 1)}>
            <span className={page === pages[pages.length - 1] ? "page-link txt-gray" : "page-link pointer"}>
              <i className=""><FaAngleRight /></i>
            </span>
          </li>
          <li className="page-item" onClick={() => handleChangePage(pages[pages.length - 1])}>
            <span className={page === pages[pages.length - 1] ? "page-link txt-gray" : "page-link pointer"}>
              <i className=""><FaAngleDoubleRight /></i>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Products;
