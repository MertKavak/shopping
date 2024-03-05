import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../actions/userAction";
import { useForm } from "react-hook-form";
// import { addressItem } from "../actions/addressAction";

function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const user = useSelector((state) => state.userSignin);
  const distpatch = useDispatch();

  const handleSignout = () => {
    localStorage.removeItem("userInfo");
    distpatch(userLogout());

    navigate("/login");
  };

  // const handleAddressSubmit = ({ nameSurname, city, address }) => {
  //   distpatch(addressItem(nameSurname, city, address));
  //   console.log("hata varmı", nameSurname,city,address);
  // };

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

          <button onClick={handleSignout} className="btn">
            {user.userInfo.name ? "Çıkış Yap" : "Giriş Yap"}
          </button>
        </div>
      </div>

      {/* <div className="col-1">
        <div className="card">
          <form onSubmit={handleSubmit(handleAddressSubmit)}>
            <h2 style={{ textAlign: "center" }}>Adres Bilgisi</h2>
            {"Kayıtlı Adres Varsa" ? "Veri Tabanındaki Adres" : null}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <label style={{color:"gray"}}> Ad Soyad:</label>
              <input
                placeholder="Ad soyad giriniz."
                style={{ marginBottom: "1rem" }}
                className={errors.nameSurname && "borderError"}
                {...register("nameSurname", {
                  required: "lutfen deger giriniz",
                })}
              />
              {errors.nameSurname && (
                <span style={{ color: "red" }}>
                  {errors.nameSurname.message}
                </span>
              )}

              <label style={{color:"gray"}}> Şehir:</label>
              <input
                style={{ marginBottom: "1rem" }}
                placeholder="Şehrinizi Giriniz."
                className={errors.city && "borderError"}
                {...register("city", {
                  required: "lutfen deger giriniz",
                })}
              />
              {errors.city && (
                <span style={{ color: "red" }}>
                  {errors.city.message}
                </span>
              )}
              <label style={{color:"gray"}}> Adres:</label>

              <input
                style={{ marginBottom: "1rem" }}
                placeholder="Adresinizi Giriniz."
                className={errors.address && "borderError"}
                {...register("address", {
                  required: "lutfen deger giriniz",
                })}
              />
              {errors.address && (
                <span style={{ color: "red" }}>
                  {errors.address.message}
                </span>
              )}
              <div style={{ textAlign: "right" }}>
                <button className="btn" style={{ width: "50%" }} type="submit">
                  Adresimi Kaydet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default Profile;
