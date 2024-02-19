import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import cardProp from "../data/cardProp";
import axios from "axios";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errmessage, setErrmessage] = useState(false);
  const [errmessagetext, setErrmessagetext] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        const data = await axios.get("/api/productss");

        setData(data.data);
        setLoading(false);
        setErrmessage(false);
      } catch (error) {
        setErrmessagetext(error.message);
        setLoading(false);
        setErrmessage(true);
      }
    }
    getUser();
  }, []);
  return (
    <div className="row center">
      {loading ? <Loading /> : null}
      {errmessage && <Error variant="danger" >{"Beklenmedik bir hata oluştu"}</Error>}
      {data.map((item) => (
        <Link to={`/urun/${item._id}`} key={item._id}>
          <Products data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
