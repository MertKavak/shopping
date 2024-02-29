import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { user_signin } from "../actions/userAction";
import Error from "../components/Error";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const distpatch = useDispatch();
  const user = useSelector((state) => state.userSignin);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmits = ({ email, password }) => {
    distpatch(user_signin(email, password));
  };
  useEffect(() => {
    if (user.userInfo.token) {
      navigate("/");
    } else {
      setErrorMsg(user.error);
    }
  }, [user.userInfo.token, user.error, navigate]);
  useEffect(() => {
    setErrorMsg(user.error);
    // Reset error message when the component mounts
    return () => {
      setErrorMsg("");
    };
  }, [user.error]);
  return (
    <form className="form" onSubmit={handleSubmit(handleSubmits)}>
      <h1 style={{ textAlign: "center" }}>GİRİŞ YAP</h1>
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

        {user.error && <Error variant="danger">{user.error}</Error>}
      </div>
      <div>
        <button type="submit" className="btn">
          Giriş Yap
        </button>
      </div>

      <div>
        <p>
          Hesabınız yoksa <Link to={"/register"}>Kayıt ol</Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
