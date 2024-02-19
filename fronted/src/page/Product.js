import React from "react";
import { useParams } from "react-router-dom";
import cardProp from "../data/cardProp";
import Raiting from "../components/Raiting";

function Product() {
  const { id } = useParams();
  const data = cardProp.find((item) => item._id.toString() === id);
  console.log(data);
  if (!data) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <div className="row top" key={data._id}>
      <div className="col-2">
        <img className="large" src={data.image} alt="#" />
      </div>
      <div className="col-1">
        <ul className="colum">
          <li>
            <h1>{data.title}</h1>
          </li>
          <li>
            <Raiting puan={data.puan} />
          </li>
          <li>
           Fiyat:{data.price}
          </li>
          <li>
           Açıklama:{data.description}
          </li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Fiyat</div>
                <div className="price">{data.price} TL</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Adet</div>
                {data.stok > 0 ? (
                  <p className="succes">{data.stok}</p>
                ) : (
                  <p className="danger">Ürün Tükendi</p>
                )}
              </div>
            </li>
          </ul>
          <button className="btn">Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
