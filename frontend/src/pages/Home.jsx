import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";

import Subtitle from "../shared/Subtitle";

const Home = () => {
  return (
    <>
      {/* ========= Section Asset HeroImg Start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating {" "} <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum sunt dolores cum optio quas, deleniti pariatur eveniet nemo blanditiis in, obcaecati vel dolor natus animi tenetur veritatis veniam illum!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= Section Asset HeroImg End ======== */}
    </>
  );
};

export default Home;
