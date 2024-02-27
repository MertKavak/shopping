import React from "react";
import Raiting from "./Raiting";
import { Link } from "react-router-dom";

function Products({ data, handleCart }) {
  console.log(data.image);

  return (
    <div className="card" key={data._id}>
      <Link to={`/product/${data._id}`} key={data._id}>
        <img className="m" src={data.image} alt="#" />
      </Link>
      <div className="card-body">
        <a>{data.title}</a>
        <Raiting puan={data.raiting} />
        <div className="price">{data.price}</div>
      </div>
      <button
        disabled={data.countInstock === 0}
        onClick={handleCart}
        className={`btn ${data.countInstock === 0 ? "fail" : ""}`}
      >
        {data.countInstock !== 0 ? 'Sepete Ekle' : 'Stok Yok'}
      </button>
    </div>
  );
}

export default Products;
