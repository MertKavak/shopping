import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleClick = () => {
    console.log("Email:",email)
    console.log("Password",password);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 style={{ textAlign: "center" }}>GİRİŞ YAP</h1>
      <div>
        <label> Email:</label>
        <input type="email" placeholder="Email giriniz." value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label>Şifre:</label>
        <input type="password" placeholder="Şifre giriniz." value={password}  onChange={(event) => setPassword(event.target.value)}/>
      </div>
      <div>
        <button type="submit" className="btn" onClick={handleClick}>Giriş Yap</button>
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
