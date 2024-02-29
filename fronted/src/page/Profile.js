import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../actions/userAction";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userSignin);
  const distpatch = useDispatch();


  const handleSignout = () => {
  
    localStorage.removeItem("userInfo");
    distpatch(userLogout());

   
      navigate("/login")
    
  };

  
  return (
    <div className="row top">
      <div className="col-1">
        <div className="card">
          <h2 style={{ textAlign: "center" }}>Kullanıcı Bilgileri</h2>
          <ul>
            <li>
              <b>Kayıtlı Kullanıcı Adınız:</b> {user.userInfo.name}
            </li>
            <li>
              <b>Kayıtlı Email Adresiniz:</b> {user.userInfo.email}
            </li>
          </ul>

          <button onClick={handleSignout}  className="btn">{user.userInfo.name ? "Çıkış Yap" :"Giriş Yap"}</button>
        </div>
      </div>

      <div className="col-1">
        <div className="card">
          <h2 style={{ textAlign: "center" }}>Adres Bilgisi</h2>
          {"Kayıtlı Adres Varsa" ? "Veri Tabanındaki Adres" : null}

          <div>
            <ul style={{display:"flex",  justifyContent:"space-between"}}>
              <li>
                <label> İL:</label>
                <input type="name" placeholder="Şehir Giriniz." />
              </li>

              <li>
                <label> İLÇE:</label>
                <input type="name" placeholder="İlçe Giriniz." />
              </li>
              <li>
                <label> MAHALLE:</label>
                <input type="name" placeholder="mahalle Giriniz." />
              </li>
              <li>
                <label> SOKAK:</label>
                <input type="name" placeholder="sokak Giriniz." />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
