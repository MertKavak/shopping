import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../actions/userAction";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const distpatch = useDispatch();
  const userReg = useSelector((state) => state.userRegisterIn);
  const navigate = useNavigate();

  const handleSubmits = ({ name, email, password }) => {
    distpatch(userRegister(name, email, password));
    navigate("/login");
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleSubmits)}>
      <h1 style={{ textAlign: "center" }}>KAYIT OL</h1>
      <div>
        <label> Isim:</label>
        <input
          className={errors.name && "borderError"}
          {...register("name", {
            required: "lutfen deger giriniz",
          })}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>
      <div>
        <label> Email:</label>
        <input
          className={errors.email && "borderError"}
          {...register("email", {
            required: "lutfen deger giriniz",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Lutfen gecerli email adresi giriniz",
            },
          })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>
      <div>
        <label>Şifre:</label>
        <input
          className={errors.password && "borderError"}
          {...register("password", {
            required: "lutfen deger giriniz",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
              message: "Lutfen gecerli sifre giriniz",
            },
          })}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
      </div>
      <div>
        <label>Şifre Tekrarı:</label>
        <input
          className={errors.comfirmPassword && "borderError"}
          {...register("comfirmPassword", {
            required: "lutfen deger giriniz",
            validate: (value) =>
              value === watch("password") || "Şifreler uyuşmuyor",
          })}
        />
        {errors.comfirmPassword && (
          <span style={{ color: "red" }}>{errors.comfirmPassword.message}</span>
        )}
      </div>
      <div>
        <button type="submit" className={`btn `}>
          Kayıt Ol
        </button>
      </div>
      <div>
        <p>
          Hesabınız varsa{" "}
          <Link forceRefresh={true} to={"/login"}>
            Giriş yap
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Register;
