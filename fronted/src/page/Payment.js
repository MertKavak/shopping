import React, { useState } from "react";
import CheckOutSteep from "../components/CheckOutSteep";
import { useDispatch, useSelector } from "react-redux";
import { paymetMethot } from "../actions/cardAction";

function Payment() {
  const userPaymentMethot = useSelector((state) => state.cardItem);
  const { userMethot } = userPaymentMethot;
  const [payment, setPayment] = useState(userMethot);
  const distpatch = useDispatch();

  const handleSubmitMethol = (e) => {
    e.preventDefault();
    distpatch(paymetMethot(payment));
  };

  return (
    <div>
      <CheckOutSteep step1 step2 step3 />
      <form className="form" onSubmit={handleSubmitMethol}>
        <div>
          <h1>Odeme Yontemi</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              required
              value="Paypaal"
              name="paypaylMethod"
              onChange={(e) => setPayment(e.target.value)}
            ></input>
            <label htmlFor="paypal">Paypal</label>
          </div>
          <div>
            <input
              type="radio"
              id="strapi"
              value="Strapi"
              name="paypaylMethod"
              onChange={(e) => setPayment(e.target.value)}
            ></input>
            <label htmlFor="strapi">Strapi</label>
          </div>
          <div>
            <button className="btn" type="submit">
              Odeme
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
