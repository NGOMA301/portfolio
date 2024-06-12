import React from "react";
import "./work.css";
import {
  FaRegClock,
  FaEnvelope,
  FaPhoneAlt,
  FaQuora,
  FaRegUser,
} from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaMessage } from "react-icons/fa6";
import { BiEnvelope } from "react-icons/bi";
function Work() {
  const [text] = useTypewriter({
    words: ["ngoma the one", "develop the development"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
  });
  return (
    <div className="container">
      <div className="div1">
        <p className="para1">
          <FaRegClock />
          Opening Hours: Mon-Sunday:7.00 AM-9.00 PM
        </p>
        <div className="divone1">
          <p className="icons">
            <FaQuora className="q" /> FAQ
          </p>
          <p className="icons"><FaMessage/> Report Portal</p>
          <p className="icons"><BiEnvelope/> WebMail</p>
        </div>
      </div>
      <div className="div2">
        <div className="paradiv2">
          <a href="">
            INKURURNZIZA <span className="span1">Orthopedic</span>{" "}
            <span className="span2">Specialized</span> Hospital Rwanda
          </a>
        </div>
        <div className="leftdivs">
          <div className="cont">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div className="desc">
              <h1 className="desc">MAIL TO US</h1>
              <p className="desc">info@gmail.com</p>
            </div>
          </div>
          <div className="cont">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div className="des">
              <h1 className="desc">CALL US FOR MORE DETAILS</h1>
              <p className="desc">+(250) 789 280 431</p>
            </div>
          </div>
          <div className="cont">
            <div className="icon">
              <FaRegUser />
            </div>
            <div className="desc one">
              <div className="desc">
              <h1 className="desc">OUR ADDRESS</h1>
              <p className="desc">Kigali - Gikondo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div3">
        <nav>
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">insights</a>
          <a href="">department</a>
          <a href="">media center</a>
          <a href="">partners</a>
          <a href="">doctor`s schedule</a>
          <a href="">contact us</a>
          <a href="">get started</a>
        </nav>
      </div>
      <div className="div4">
        <div className="content">
          <h2>
            <span className="at">at </span>INKURUNZIZA <br />{" "}
            <span className="name1">
              Orthopedic Specialized <br />
              Hospital Rwanda,
            </span>{" "}
            <br />
            we strive to serve <br />
            beyond our patients' <br />
            <span>
              {text}
              <Cursor />
            </span>
            <div className="divofpara">
              <p className="pa">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                sapiente, ratione molestiae similique facere magnam odio! Atque
                optio incidunt magnam molestias doloremque inventore libero
                magni? Architecto magnam provident error qui!
              </p>
              <button>Learn More</button>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Work;
