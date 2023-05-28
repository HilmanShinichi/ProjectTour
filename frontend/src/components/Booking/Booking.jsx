import React, {useState} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    userId:'01', //later it will be dynamic
    userEmail:'example@gmail.com',
    fullname:'',
    phone:'',
    guestSize:1,
    bookAt:''
  })

// event untuk set credential saat submit booking
const handleChange = e => {
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
};

// unttuk mengatur penjumlahan total harga dan service fee
const serviceFee = 25000
const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)


// send data to the server
const handleClick = e => {
    e.preventDefault()

    navigate('/thank-you')
}

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          Rp {price} <span>/per Person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>{" "}
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* ========== booking form start =========== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ========== booking form end  =============*/}

      {/* ========== booking bottom =============*/}
      <div className="booking__bottom">
<ListGroup>
    <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-content-center gap-1">Rp {price} <i className="ri-close-line"></i> 1 person</h5>
            <span> Rp {price}</span>
    </ListGroupItem>
    <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span> Rp {serviceFee}</span>
    </ListGroupItem>
    <ListGroupItem className="border-0 px-0">
            <h5>Total</h5>
            <span> Rp {totalAmount}</span>
    </ListGroupItem>
</ListGroup>

<button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</button>
      </div>
    </div>
  );
};

export default Booking;
