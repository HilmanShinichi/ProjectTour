import React, {useEffect, useRef, useState} from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculatingAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from '../shared/Newsletter';
import useFetch from './../hooks/useFetch'
import { BASE_URL } from './../utils/config'

function TourDetails() {
  const { id } = useParams();
  const reviwMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  // fetch data dari api database
 const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)
  // destructure properti dari objek wisata
  const {
    photo,
    title, 
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculatingAvgRating(reviews);

  // format date 
  const options = { day: 'numeric', month: "long", year: "numeric" }

  // submit request to the server
const submitHandler = e => {
  e.preventDefault();
  const reviewText = reviwMsgRef.current.value;

}

// ketika tour scroll dengan sumbu x dan y
useEffect(() => {
  window.scrollTo(0,0)
},[tour])


  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className="text-center pt-5">Loading .........</h4>
          }
          {
            error && <h4 className="text-center pt-5">{error}</h4>
          }
         {
          !loading && !error && <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt="" />

              <div className="tour__info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-s-fill"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>{" "}
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>

                  <span>
                    <i className="ri-map-pin-user-fill"></i> {address}
                  </span>
                </div>

                <div className="tour__extra-details ">
                  <span>
                    <i className="ri-map-pin-2-line"> {city}</i>
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"> Rp {price} / per Person</i>
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line">  {distance} k/m
                    </i>
                  </span>
                  <span>
                    <i className="ri-group-line"> {maxGroupSize} People</i>
                  </span>
                </div>
                <div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
              </div>

              {/* ========= tour  reviews section start ======== */}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span onClick={() => setTourRating(1)}>
                      1 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      2 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      3 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      4 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      5 <i className="ri-star-s-fill"></i>
                    </span>
                  </div>

                  <div className="review__input">
                    <input type="text" ref={reviwMsgRef} placeholder="share your thoughts" required/>
                    <button
                      className="btn primary__btn text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className="user__reviews">
                  {reviews?.map((review) => (
                    <div className="review__item">
                      <img src={avatar} alt="" />

                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>Hilman</h5>
                            <p>
                              {new Date("05-28-2023").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            5 <i className="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <h6>Amazing tour</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
              {/* ========= tour  reviews section end ===========*/}
            </div>
          </Col>

          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
         }
        </Container>
      </section>
      <Newsletter/>
    </>
  );
}

export default TourDetails;
