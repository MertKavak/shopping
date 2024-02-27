import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Products from "../components/Products";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productActions";

const Home = () => {
  const distpatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { error, product, loading } = productList;

  console.log(product);
  const navigate = useNavigate();

  useEffect(() => {
    distpatch(listProduct());
  }, []);

  const handleCart = (id) => {
    navigate(`/cart/${id}?qty=${1}`);
  };

  return (
    <div className="row center">
      {loading ? (
        <Loading />
      ) : (
        product &&
        product.product &&
        product.product.map((item) => (
          <Products data={item} handleCart={() => handleCart(item._id)} />
        ))
      )}
      {error && <Error variant="danger">{"Beklenmedik bir hata oluştu"}</Error>}
    </div>
  );
};

export default Home;
