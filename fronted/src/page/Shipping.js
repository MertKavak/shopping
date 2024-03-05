import React, { useState } from "react";
import CheckOutSteep from "../components/CheckOutSteep";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddressItem } from "../actions/cardAction";
import {  useNavigate } from "react-router-dom";

function Shipping() {
    const navigate = useNavigate();
  const distpatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const adress = useSelector((state) => state.cardItem);

  const { userAddress } = adress;
  console.log(userAddress);

  const handleSubmitValue = ({ nameSurname, country, city, address, Zip }) => {
    distpatch(AddressItem({ nameSurname, country, city, address, Zip }));
    navigate("/payment")
  };
  return (
    <div>
      <CheckOutSteep step1 step2 />
      <form className="form" onSubmit={handleSubmit(handleSubmitValue)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
          }}
        >
          <label style={{ color: "gray" }}> Ad Soyad:</label>
          <input
            defaultValue={userAddress.nameSurname}
            placeholder="Ad soyad giriniz."
            style={{ marginBottom: "1rem" }}
            className={errors.nameSurname && "borderError"}
            {...register("nameSurname", {
              required: "lutfen deger giriniz",
            })}
          />
          {errors.nameSurname && (
            <span style={{ color: "red" }}>{errors.nameSurname.message}</span>
          )}
          <label style={{ color: "gray" }}> Ülke:</label>
          <input
            defaultValue={userAddress.country}
            style={{ marginBottom: "1rem" }}
            placeholder="Ülke Giriniz."
            className={errors.country && "borderError"}
            {...register("country", {
              required: "lutfen deger giriniz",
            })}
          />
          {errors.country && (
            <span style={{ color: "red" }}>{errors.country.message}</span>
          )}

          <label style={{ color: "gray" }}> Şehir:</label>
          <input
            defaultValue={userAddress.city}
            style={{ marginBottom: "1rem" }}
            placeholder="Şehrinizi Giriniz."
            className={errors.city && "borderError"}
            {...register("city", {
              required: "lutfen deger giriniz",
            })}
          />
          {errors.city && (
            <span style={{ color: "red" }}>{errors.city.message}</span>
          )}
          <label style={{ color: "gray" }}> Adres:</label>

          <input
            defaultValue={userAddress.address}
            style={{ marginBottom: "1rem" }}
            placeholder="Adresinizi Giriniz."
            className={errors.address && "borderError"}
            {...register("address", {
              required: "lutfen deger giriniz",
            })}
          />
          {errors.address && (
            <span style={{ color: "red" }}>{errors.address.message}</span>
          )}

          <label style={{ color: "gray" }}> Posta Kodu:</label>
          <input
            defaultValue={userAddress.Zip}
            style={{ marginBottom: "1rem" }}
            placeholder="Posta kodu Giriniz."
            className={errors.Zip && "borderError"}
            {...register("Zip", {
              required: "lutfen deger giriniz",
            })}
          />
          {errors.Zip && (
            <span style={{ color: "red" }}>{errors.Zip.message}</span>
          )}

          <button className="btn" type="submit">
            Adresimi Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}

export default Shipping;
