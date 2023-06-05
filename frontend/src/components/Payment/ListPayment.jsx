import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const ListPayment = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    getPayment();
  },[]);

  const getPayment = async () => {
    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
        navigate("/login");
      } else {
        const res = await axios.get(`${BASE_URL}/payment`, {
          withCredentials: true,
        });
        setPayment(res.data.data);
        
      }
    } catch (error) {}
  };


  return (
    <div className="container mt-5">
      <table class="table">
        <thead className="bg-secondary">
          <tr>
            <th scope="col">No</th>
            <th scope="col">No Transaction</th>
            <th scope="col">Bank</th>
            <th scope="col">Nominal</th>
            <th scope="col">Phone</th>
            <th scope="col">Photo Url</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {payment.map((payments, index) => (
            <tr key={payments._id}>
              <th>{index + 1}</th>
              <th>{payments.transaksi}</th>
              <th>{payments.bank}</th>
              <th>{payments.nominal}</th>
              <th>{payments.phone}</th>
              <th>{payments.photo}</th>
              <th>{payments.payAt}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPayment;
