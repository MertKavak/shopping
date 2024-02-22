import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");


  const handleClick = () => {
    console.log(email,password,repassword );
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 style={{ textAlign: "center" }}>KAYIT OL</h1>
      <div>
        <label> Email:</label>
        <input type="email" placeholder="Email giriniz." value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label>Şifre:</label>
        <input type="password" placeholder="Şifre giriniz." value={password}  onChange={(event) => setPassword(event.target.value)}/>
      </div>
      <div>
        <label>Şifre Tekrarı:</label>
        <input type="password" placeholder="Şifrenizi tekrar giriniz." value={repassword} onChange={(event) => setRepassword(event.target.value)}  />
      </div>
      <div>
        <button type="submit" className="btn" onClick={handleClick}>Kayıt Ol</button>
      </div>
      <div>
        <p>
        Hesabınız varsa <Link to={"/login"}>Giriş yap</Link>
        </p>
        
      </div>
    </form>
  );
}

export default Register;
