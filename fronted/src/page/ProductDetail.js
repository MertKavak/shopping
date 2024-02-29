import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Raiting from "../components/Raiting";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../actions/productDetail";
import Loading from "../components/Loading";
import Error from "../components/Error";

function ProductDetail() {
  const { id } = useParams();
  const distpatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const [qty, setQty] = useState(1);
  const { loading, error, product } = productDetails;
  const navigate = useNavigate();
  useEffect(() => {
    distpatch(productDetail(id));
  }, [distpatch, id]);

  if (!product) {
    return  <div className="row top">{error && <Error variant="danger">{"Beklenmedik bir hata oluştu"}</Error>}</div>;
  }
  const handleCart = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <div className="row top" key={product._id}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="col-2">
            <img className="large" src={product.image} alt="#" />
          </div>
          <div className="col-1">
            <ul className="colum">
              <li>
                <h1>{product.title}</h1>
              </li>
              <li>
                <Raiting puan={product.raiting} />
              </li>
              <li>Fiyat:{product.price}</li>
              <li>Açıklama:{product.description}</li>
            </ul>
          </div>
          <div className="col-2">
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
                    {product.stok === 0 ? (
                      <>
                        <div>Adet</div>
                        <p className="danger">Ürün Tükendi</p>
                      </>
                    ) : null}
                  </div>
                </li>
                <li>
                  
                    <>
                      <div className="row">
                        <div>Adet</div>
                        {product.countInstock > 0 ? (
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInstock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        ) : null}
                      </div>
                      <button disabled={product.countInstock === 0 } onClick={handleCart} className={`btn ${product.countInstock === 0 ? "fail" : ""}`} >
                      {product.countInstock !== 0 ? 'Sepete Ekle' : 'Stok Yok'}
                      </button>
                    </>
                 
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      {error && <Error variant="danger">{"Beklenmedik bir hata oluştu"}</Error>}
    </div>
  );
}

export default ProductDetail;
