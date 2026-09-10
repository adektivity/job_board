import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <section>
      <div>
        <div>
          <h3>Job Board</h3>
          <p>
            Experience reliable, efficient and customized logistics solutions
            designed to move your goods safely and on time bt air, sea, or land
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <div>
            <ul>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Features</Link>
              </li>
              <li>
                <Link>Latest News</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Support</h3>
          <div>
            <ul>
              <li>
                <Link>FAQ's</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms and Conditions</Link>
              </li>
              <li>
                <Link>Community</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Contact Info</h3>
          <div>
            <ul>
              <li>
                <FaLocationDot /> 1st floor, akobo ibadan.
              </li>
              <li>
                <IoMail /> pediforte@gmail.com
              </li>
              <li>
                <BsFillTelephoneFill /> +234 913 923 8801
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
