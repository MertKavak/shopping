import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AddCard, DeleteCard } from "../actions/cardAction";
import Error from "../components/Error";

function CardScreen() {
  const navigation = useNavigate()
  const { id } = useParams();
  const { search } = useLocation();
  const qtyUrl = new URLSearchParams(search).get("qty");
  const qty = qtyUrl ? Number(qtyUrl) : 1;

  const distpatch = useDispatch();
  const cart = useSelector((state) => state.cardItem);
  const { cartItem } = cart;

  useEffect(() => {
    if (id) {
      distpatch(AddCard(id, qty));
    }
  }, [distpatch, id, qty]);

  const deleteItemHandle = (id) => {
    distpatch(DeleteCard(id));
  };

  const addForm = () => {
    navigation('/shipping')
  };
  return (
    <div className="row top">
      <div className="col-1">
        <h2>Sepet</h2>
        {cartItem.length === 0 ? (
          <>
            <p>
              Ürün Seçimi için <Link to="/"> Ürünler sayfasına </Link>gidiniz.
            </p>
            <Error variant="danger">{"Sepetinizde Ürün Bulunmamaktadır"}</Error>
          </>
        ) : (
          <ul>
            <li>
              {cartItem.map((item) => (
                <div key={item.product} className="row mb card">
                  <div
                    style={{
                      display: "flex",
                      flex: 0.3,
                      alignItems: "flex-start",
                    }}
                  >
                    <img
                      style={{ width: "8rem ", height: "8rem" }}
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      alignItems: "flex-start",
                    }}
                  >
                    <h3>{item.name}</h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: 0.6,
                      alignItems: "flex-start",
                    }}
                  >
                   <b>Fiyat:</b> <span style={{color:"gray"}}>{item.price} TL</span> 
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: 0.2,
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <select
                      value={item.qty}
                      onChange={(e) => {
                        distpatch(
                          AddCard(item.product, Number(e.target.value))
                        );
                      }}
                    >
                      {[...Array(item.countInstock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                 <div style={{marginRight:"1rem"}}>
                 <b>Tutar:</b> <span style={{color:"gray"}}>{(item.price * item.qty).toFixed(2)} TL</span> 
                 </div>
                  <div>
                    <button
                      type="button"
                      className="btn danger"
                      onClick={() => deleteItemHandle(item.product)}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        )}
      </div>
      <div className="col-2">
        <div className="card">
          <div className="card-body">
            <ul>
              <li><b>Toplam</b><span style={{color:"gray"}}>({cartItem.reduce((a, b) => a + b.qty, 0)} ürün)</span></li>
              <li>
                <b>{cartItem.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2)} TL</b>
                
              </li>
              <li>
                <button disabled={cartItem.length === 0} onClick={addForm} className="btn">
                  Sepeti Onayla
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardScreen;
