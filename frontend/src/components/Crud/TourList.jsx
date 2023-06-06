import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { AuthContext } from "../../context/AuthContext";

import { BASE_URL } from "../../utils/config";
import { Link, useNavigate, useParams } from "react-router-dom";

const TourList = () => {
  const { user } = useContext(AuthContext);
  const {id} = useParams()

  const [tours, setTour] = useState([]);

  useEffect(() => {
    getTours();
  },[]);
  const navigate = useNavigate();

  const getTours = async () => {
    const res = await axios.get(`${BASE_URL}/tours?page=${id}`);
    setTour(res.data.data);
  };

  const deleteTour = async (id) => {
    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
        navigate("/login");
      } else {
        await axios.delete(`${BASE_URL}/tours/${id}`, {
          withCredentials: true,
        });
        getTours();
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container">
      <Button className="btn primary__btn bg-success mt-4" href="/add">
        Add new tour
      </Button>
      <Button className="btn primary__btn bg-info mt-4 ms-3" href="/listpayment">
        History Payment
      </Button>
      <table className="table mt-5">
        <thead className="bg-light">
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Title</th>
            <th scope="col">Address</th>
            <th scope="col">distance</th>
            <th scope="col">price</th>
            <th scope="col">MaxGroupSize</th>
            <th scope="col">Photo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr key={tour._id}>
              <th>{index + 1}</th>
              <th>{tour.title}</th>
              <th>{tour.address}</th>
              <th>{tour.distance}</th>
              <th>{tour.price}</th>
              <th>{tour.maxGroupSize}</th>
              <th>{tour.photo}</th>
              <th>
                <Link to={`/edit/${tour._id}`} className="btn primary__btn">
                  Edit
                </Link>
                <Button
                  onClick={() => deleteTour(tour._id)}
                  className="btn primary__btn bg-danger ms-2"
                >
                  Delete
                </Button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Button href='/list/0'>1</Button>
      <Button href='/list/1' className="ms-2">2</Button>
    </div>
  );
};

export default TourList;
