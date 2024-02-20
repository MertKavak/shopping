import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productActions";

const Home = () => {
  const distpatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, product, loading } = productList;

  console.log(loading);

  useEffect(() => {
    distpatch(listProduct());
  }, []);
  return (
    <div className="row center">
      {loading ? <Loading /> : null}
      {error && <Error variant="danger">{"Beklenmedik bir hata oluştu"}</Error>}
      {product.map((item) => (
        <Link to={`/urun/${item._id}`} key={item._id}>
          <Products data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
