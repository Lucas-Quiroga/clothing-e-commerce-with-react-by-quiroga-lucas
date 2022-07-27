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
  const [dialogue, setDialogue] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const nextDialog = () => {
    setDialogue(!dialogue);
  };

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
        <div className="dialogee">
          {dialogue ? (
            <div className="aboutContainer">
              <br />
              <img
                data-aos="fade-right"
                className="imgProfile"
                src={profilePhoto}
                alt=""
              />
              <div className="img_text">
                <img
                  data-aos="fade-left"
                  className="imgDialog"
                  src={dialog}
                  alt=""
                />
                <p data-aos="fade-left" className="p_about">
                  Hi, my experience with react was very good! <br />I found it a
                  very useful tool when developing!
                  <br />
                  <br />I really liked the idea of being able to reuse
                  components.
                  <br />
                  <button onClick={nextDialog}>next</button>
                </p>
              </div>

              <p data-aos="fade-left" className="p_about"></p>
            </div>
          ) : (
            <div className="aboutContainer">
              <br />
              <img
                data-aos="fade-right"
                className="imgProfile"
                src={profilePhoto}
                alt=""
              />
              <div className="img_text">
                <img
                  data-aos="fade-left"
                  className="imgDialog"
                  src={dialog}
                  alt=""
                />
                <p data-aos="fade-left" className="p_about">
                  I will continue to learn this Javascript library to create
                  better user interfaces.
                  <br />
                  <br />
                  <button onClick={nextDialog}>back</button>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default About;
