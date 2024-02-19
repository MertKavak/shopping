import React from "react";
import Raiting from "./Raiting";

function Products({data}) {
    console.log(data.image);
  return (
    <div className="card" key={data._id}>
      <a>
        <img className="m" src={data.image} alt="#" />
      </a>
      <div className="card-body">
        <a>{data.title}</a>
        <Raiting puan={data.puan}/>
        <div className="price">{data.price}</div>
      </div>
    </div>
  );
}

export default Products;
