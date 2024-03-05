import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cardItem);
  const { cartItem } = cart;
  const user = useSelector((state) => state.userSignin);
  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          Shopping
        </Link>
      </div>
      <input placeholder="Arama yapınız"  />
      <div>
        <a href="/cart">
          Sepet
          <span>
            <i
              class="fa fa-shopping-cart"
              style={{ fontSize: "2rem", marginRight: "4px" }}
            ></i>
          </span>
          {cartItem.length > 0 && (
            <span className="badge">{cartItem.length}</span>
          )}
        </a>
        <Link to={user.userInfo.token ? "/profile" : "/register"}>
          {user.userInfo.name ? user.userInfo.name : "Üye Ol"}
          {/* <div className="profileMenu"><Link>Logout</Link> </div> */}
        </Link>
       
      </div>
    </header>
  );
}

export default Header;
