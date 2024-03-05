import React from "react";

function CheckOutSteep(props) {
  return (
    <div className="row check-step">
      <div className={props.step1 ? "active" : ""}>Uyelik</div>
      <div className={props.step2 ? "active" : ""}>Siparis Adresi</div>
      <div className={props.step3 ? "active" : ""}>Odeme Yontemi</div>
      <div className={props.step4 ? "active" : ""}>Siparis Vermek</div>
    </div>
  );
}

export default CheckOutSteep;
