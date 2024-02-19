import React from "react";
import { Link } from 'react-router-dom';
import Products from './Products';
import cardProp from '../data/cardProp';

const Home = () => {
  return (
    <div className="row center">
      {cardProp.map((item) => (
        <Link to={`/urun/${item._id}`} key={item._id}>
          <Products data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Home;