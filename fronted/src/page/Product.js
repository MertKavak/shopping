import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import cardProp from "../data/cardProp";
import Raiting from "../components/Raiting";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../actions/productDetail";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Product() {
  const { id } = useParams();
  const distpatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    distpatch(productDetail(id));
  }, [distpatch, id]);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <div className="row top" key={product._id}>
      {loading ? <Loading /> : null}
      {error && <Error variant="danger">{"Beklenmedik bir hata oluştu"}</Error>}
      <div className="col-2">
        <img className="large" src={product.image} alt="#" />
      </div>
      <div className="col-1">
        <ul className="colum">
          <li>
            <h1>{product.title}</h1>
          </li>
          <li>
            <Raiting puan={product.puan} />
          </li>
          <li>Fiyat:{product.price}</li>
          <li>Açıklama:{product.description}</li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Fiyat</div>
                <div className="price">{product.price} TL</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Adet</div>
                {product.stok > 0 ? (
                  <p className="succes">{product.stok}</p>
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
