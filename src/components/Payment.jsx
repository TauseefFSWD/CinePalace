import React from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Payment = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const movieTitle = query.get("title");
  const rentAmount = query.get("amount");

  return (
    <div>
      <Navbar />
      <div className="payment-container">
        <h1>Rent {movieTitle}</h1>
        <p>Amount: {rentAmount}</p>
        <p>Please enter your card details to complete the payment.</p>
        <form className="payment-form">
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              name="card-number"
              placeholder="1234 5678 9123 4567"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input
              type="text"
              id="expiry-date"
              name="expiry-date"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" required />
          </div>
          <div className="form-group">
            <button type="submit" className="confirm-button">
              Confirm Payment
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
