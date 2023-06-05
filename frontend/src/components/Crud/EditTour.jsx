import React, { useState, useContext, useEffect } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


import { BASE_URL } from "../../utils/config";

const EditTour = () => {
  const {id} = useParams()
 
    const { user } = useContext(AuthContext);
 
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [photo, setPhoto] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");

  const navigate = useNavigate();
 

useEffect(() => {
  getToursById();
},);



  const getToursById = async()=>{
    
    const res = await axios.get(`${BASE_URL}/tours/${id}`)
    setTitle(res.data.data.title)
    setCity(res.data.data.city)
    setAddress(res.data.data.address)
    setDistance(res.data.data.distance)
    setPhoto(res.data.data.photo)
    setDesc(res.data.data.desc)
    setPrice(res.data.data.price)
    setMaxGroupSize(res.data.data.maxGroupSize
      )
  }

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
        if (!user || user === undefined || user === null) {
            alert("Please sign in");
            navigate("/login");
          }else{
            await axios.put(`${BASE_URL}/tours/${id}`, {
              title,
              city,
              address,
              distance,
              photo,
              desc,
              price,
              maxGroupSize,
              role: user?.role
            },{
              withCredentials:true
            });
            navigate("/list/0");
          }

     
    } catch (error) {
      alert("Please sign in");
      navigate("/login");
    }
  };

  return (
    <div className="container ">
      <form onSubmit={handleSubmitUpdate}>
        <div class="mb-3">
          <label for="" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Distance
          </label>
          <input
            type="number"
            class="form-control"
            id=""
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Photo
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id=""
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            MaxGroupSize
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            value={maxGroupSize}
            onChange={(e) => setMaxGroupSize(e.target.value)}
          />
        </div>
        <Button type="submit" className="btn primary__btn bg-info ">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditTour;
