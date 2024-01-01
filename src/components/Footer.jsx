import React from "react";
import "../css components/footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footerDiv">
        <div id="footer1">
          <h3>Contact us</h3>
          <p>Address: omet, consetetur sadipscing elitr, sed diam</p>
          <p>Email: eirmod tempor invidunt ut labore, et dolore</p>
          <p>Phone no: 123456789</p>
        </div>
        <div id="footer2">
          <h3>Follow us</h3>
          <div id="followUSIcons">
            <p>
                <a href="/">
                    <i class="ri-facebook-box-fill"></i>
                </a>
            </p>
            <p>
                <a href="">
                    <i class="ri-linkedin-box-fill"></i>
                </a>
            </p>
            <p>
                <a href="">
                    <i class="ri-instagram-line"></i>
                </a>
            </p>
            <p>
                <a href="">
                    <i class="ri-twitter-fill"></i>
                </a>
            </p>
            <p>
                <a href="">
                    <i class="ri-youtube-fill"></i>
                </a>
            </p>
          </div>
        </div>
        <div id="footer3">
          <h3>Head Office</h3>
          <p>
            {" "}
            <i class="ri-map-pin-fill"></i> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sequi facere, doloribus iure amet nemo
            impedit.
          </p>
          <p>
            {" "}
            <i class="ri-timer-line"></i> Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p>
            {" "}
            <i class="ri-timer-line"></i> Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p>
            {" "}
            <i class="ri-train-line"></i> Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
