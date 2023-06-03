import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

import { BASE_URL } from "../../utils/config";

const TourList = () => {
  const [tours, setTour] = useState([]);

  useEffect(() => {
    getTours();
  }, []);

  const getTours = async () => {
    const res = await axios.get(`${BASE_URL}/tours?page=1`);
    setTour(res.data.data);
  };

  return (
    <div className="container">
      <table className="table mt-5">
        <thead className="bg-light">
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Title</th>
            <th scope="col">Address</th>
            <th scope="col">distance</th>
            <th scope="col">price</th>
            <th scope="col">MaxGroupSize</th>
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
              <th>
                <Button className="btn primary__btn">Edit</Button>
                <Button className="btn primary__btn bg-danger">Delete</Button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourList;
