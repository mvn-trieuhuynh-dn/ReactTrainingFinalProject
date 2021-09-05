import { Link } from 'react-router-dom';
import HeroBnaner from './../../../components/HeroBanner';
import product from '../../../assets/img/product-packet.png';
import { useEffect, useState } from 'react';

const Home = () => {
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
  
  return (
    <div>
      <HeroBnaner />
      <section className="section-product">
        <div className="container">
          <h2 className="section-title">List Product</h2>
          <ul className="product-list row">
            {
              products.map(e => (
                <li className="product-item col-4" key={e.id}>
                  <div className="product-wrap">
                    <Link to="/products" className="product-image">
                      <img src={product} />
                    </Link>
                    <div className="product-card">
                      <h4 className="product-name">{e.name}</h4>
                      <p>Year: {e.year}</p>
                      <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna</p>
                    </div>
                  </div>
                </li>
              )
              )
            }
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
