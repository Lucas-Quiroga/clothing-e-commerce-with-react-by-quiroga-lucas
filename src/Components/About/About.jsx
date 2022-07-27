import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import profilePhoto from "../../assets/profile.jpeg";
import dialog from "../../assets/dialogo.jpg";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinerC">
          <h2>Loading...</h2>
          <ClipLoader color={"#000000"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="aboutContainer">
          <h1 style={{ color: "black" }}>
            In this section I will tell you about my experience in react, but I
            am still learning.
          </h1>
          <br />
          <br />
          <img
            data-aos="fade-right"
            className="imgProfile"
            src={profilePhoto}
            alt=""
            srcset=""
          />
          <img data-aos="fade-left" className="imgDialog" src={dialog} alt="" />
        </div>
      )}
    </>
  );
};

export default About;
