import React, {useContext, useState} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./../../styles/payment.css";
import axios from "axios";

import { BASE_URL } from "../../utils/config";

export const Payment = () => {
    const { user } = useContext(AuthContext);
    


    const [transaksi, setTransaksi] = useState("");
    const [bank, setBank] = useState("");
    const [nominal, setNominal] = useState("");
    const [phone, setPhone] = useState("");
    const [photo, setPhoto] = useState("");
    const [payAt, setPayAt] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!user || user === undefined || user === null) {
                alert("Please sign in");
                navigate("/login");
              }else{
                await axios.post(`${BASE_URL}/payment`, {
                  transaksi,
                  bank,
                  nominal,
                  phone,
                  photo,
                  payAt,
                },{
                  withCredentials:true
                });
                alert('payment success')
                navigate("/thank-you");
              }
    
         
        } catch (error) {
          alert("Please sign in");
          navigate("/login");
        }
      };
    

  return (
    <>
      <div class="payment__container">
        <div class="payment__screen">
          <div class="screen__content">
            <form class="payment__login" onSubmit={handleSubmit}>
              <div class="payment__login__field">
                <i class="payment__login__icon ri-wallet-line"></i>
                <input
                  type="number"
                  class="payment__login__input"
                  value={transaksi}
            onChange={(e) => setTransaksi(e.target.value)}
                  placeholder="no transaction"
                />
              </div>
              <div class="payment__login__field">
                <i class="payment__login__icon ri-bank-line"></i>
                <input
                  type="text"
                  class="payment__login__input"
                  value={bank}
            onChange={(e) => setBank(e.target.value)}
                  placeholder="Bank"
                />
              </div>
              <div class="payment__login__field">
                <i class="payment__login__icon ri-money-dollar-circle-line"></i>
                <input
                  type="number"
                  class="payment__login__input"
                  value={nominal}
            onChange={(e) => setNominal(e.target.value)}
                  placeholder="nominal"
                />
              </div>
              <div class="payment__login__field">
                <i class="payment__login__icon ri-phone-line"></i>
                <input
                  type="number"
                  class="payment__login__input"
                  value={phone}
            onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div class="payment__login__field">
                <i class="payment__login__icon ri-image-line"></i>
                <input
                  type="text"
                  class="payment__login__input"
                  value={photo}
            onChange={(e) => setPhoto(e.target.value)}
                  placeholder="image url"
                />
              </div>
              <div class="payment__login__field">
                <i class="payment__login__icon ri-calendar-line"></i>
                <input
                  type="date"
                  class="payment__login__input"
                  value={payAt}
            onChange={(e) => setPayAt(e.target.value)}
                  placeholder="Pay Date"
                />
              </div>
              <button class="button payment__login__submit">
                <span class="button__text m-auto">Pay</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
