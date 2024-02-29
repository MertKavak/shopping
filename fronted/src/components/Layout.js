import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="grid-container">
      <Header />
      <main>{children}</main>
      <footer className="row center">Mert Kavak</footer>
    </div>
  );
}

export default Layout;
