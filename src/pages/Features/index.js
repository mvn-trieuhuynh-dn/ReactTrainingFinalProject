import React, {Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../core/PrivateRoute';

const ProductDetail = lazy(() => import('./ProductDetail'));
const AboutUs = lazy(() => import('./AboutUs'));
const Products = lazy(() => import('./Products'));
const Home = lazy(() => import('./Home'));
const Cart = lazy(() => import('./Cart'));

const Features = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <PrivateRoute path="/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/cart">
            <Cart />
          </PrivateRoute>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default Features;
