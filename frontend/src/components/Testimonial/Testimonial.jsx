import React from "react";
//Slider pada React Slick adalah komponen library React untuk tampilan multi-item carousel. Properti slider dapat dikonfigurasi secara dinamis
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        setting: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }, 
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          voluptatem? Atque cumque eum doloribus cupiditate eaque natus, ex
          error qui soluta quae consectetur laudantium modi!
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Ivan Mufid</h6>
              <p>Customer</p>
            </div>
          </div>
        </p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          voluptatem? Atque cumque eum doloribus cupiditate eaque natus, ex
          error qui soluta quae consectetur laudantium modi!
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Andri Purwanto</h6>
              <p>Customer</p>
            </div>
          </div>
        </p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          voluptatem? Atque cumque eum doloribus cupiditate eaque natus, ex
          error qui soluta quae consectetur laudantium modi!
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Ahlakul Karim</h6>
              <p>Customer</p>
            </div>
          </div>
        </p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          voluptatem? Atque cumque eum doloribus cupiditate eaque natus, ex
          error qui soluta quae consectetur laudantium modi!
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Irma Mayasari</h6>
              <p>Customer</p>
            </div>
          </div>
        </p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          voluptatem? Atque cumque eum doloribus cupiditate eaque natus, ex
          error qui soluta quae consectetur laudantium modi!
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Ahlakul Karim</h6>
              <p>Customer</p>
            </div>
          </div>
        </p>
      </div>
    </Slider>
  );
};

export default Testimonial;
