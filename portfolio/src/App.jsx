import React from "react";
import "./App.css";
import GaneshhImage from "./assets/ganeshh.png";
import MyImage from "./assets/me.jpeg";
import EImage from "./assets/shop.png";
import ManaliImage from "./assets/trip.png";
import UserImage from "./assets/profile.png";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHome,
  FaUserCircle,
  FaTools,
  FaCode,
  FaAddressCard,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div id="home">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
          id="navbar"
        >
          <div id="nav-name">
            {" "}
            <p id="ganesh">
              GANESH <span style={{ color: "#F97316" }}>. </span>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            id="nav"
          >
            <a href="#home">
              <FaHome className="nav-icon" />
              HOME
            </a>

            <a href="#about">
              <FaUserCircle className="nav-icon" />
              ABOUT
            </a>

            <a href="#skill">
              <FaTools className="nav-icon" />
              SKILLS
            </a>

            <a href="#project">
              <FaCode className="nav-icon" />
              PROJECTS
            </a>

            <a href="#contact">
              <FaAddressCard className="nav-icon" />
              CONTACT
            </a>
          </motion.div>
        </motion.div>

        <div id="info">
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            id="info-left"
          >
            <p>Hey,I'm Ganesh👋🏻</p>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.5 }}
            >
              <span style={{ color: "#F97316" }}>Front</span>end
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.5 }}
            >
              Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I'm Front Developer based in India, I'll help you build beautiful
              websites your users will love.
            </motion.p>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5, delay: 0.5 }}
              viewport={{ once: true }}
              href="#contact"
              className="btnText"
            >
              Get In Touch ➔
            </motion.a>
            <button
              className="btnText-1"
              onClick={() =>
                window.open("https://github.com/ganeshhavsarmol", "_blank")
              }
            >
              <a>Git Hub</a>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            id="image"
            style={{
              backgroundImage: `url(${GaneshhImage})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          viewport={{ once: true }}
          id="about"
        >
          <div className="about">
            <h4>About me</h4>
            <p id="aboutText">
              I'm passionate about creating digital solutions
            </p>
            <p>
              with 1+ years of experience in web development, I help businesses
              and individuals bring their ideas to life through clean,
              efficient,and user-friendly code.
            </p>
          </div>
          <div
            id="myImage"
            style={{
              backgroundImage: `url(${MyImage})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          viewport={{ once: true }} id="skill">
          <div id="skills">
            <h4>SKILLS</h4>
          </div>

          <div className="skill">
            <motion.div
              initial={{ opacity: 0, y: -400 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 10,
                duration: 2,
                delay: 1,
              }}
              drag
              dragConstraints={{
                left: -100,
                right: 900,
                top: -200,
                bottom: 200,
              }}
              viewport={{ once: true }}
              className="skill-icon"
            >
              {/* <h3>HTML</h3> */}
              <h1>
                {" "}
                <FaHtml5 style={{ color: "F54927" }} />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -400 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 10,
                duration: 2,
                delay: 1,
              }}
              drag
              dragConstraints={{
                left: -300,
                right: 800,
                top: -200,
                bottom: 200,
              }}
              viewport={{ once: true }}
              className="skill-icon"
            >
              {/* <h3>CSS</h3> */}
              <h1>
                <FaCss3Alt style={{ color: "2965F1" }} />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -400 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 10,
                duration: 2,
                delay: 1,
              }}
              drag
              dragConstraints={{
                left: -400,
                right: 600,
                top: -200,
                bottom: 200,
              }}
              viewport={{ once: true }}
              className="skill-icon"
            >
              {/* <h3>Git</h3> */}
              <h1>
                {" "}
                <FaGitAlt style={{ color: "F1502F" }} />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -400 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 10,
                duration: 2,
                delay: 1,
              }}
              drag
              dragConstraints={{
                left: -600,
                right: 500,
                top: -200,
                bottom: 200,
              }}
              viewport={{ once: true }}
              className="skill-icon"
            >
              {/* <h3>GitHub</h3> */}
              <h1>
                {" "}
                <FaGithub style={{ color: "24292E" }} />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -400 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 10,
                duration: 2,
                delay: 1,
              }}
              drag
              dragConstraints={{
                left: -700,
                right: 300,
                top: -200,
                bottom: 200,
              }}
              viewport={{ once: true }}
              className="skill-icon"
            >
              {/* <h3>React JS</h3> */}
              <h1>
                {" "}
                <FaReact style={{ color: "61DBFB" }} />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -400 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 10,
                duration: 2,
                delay: 1,
              }}
              drag
              dragConstraints={{
                left: -800,
                right: 100,
                top: -200,
                bottom: 200,
              }}
              viewport={{ once: true }}
              className="skill-icon"
            >
              {/* <h3>JavaScript</h3> */}
              <h1>
                {" "}
                <FaJs style={{ color: "F0DB4F" }} />
              </h1>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 1 }}
          id="project"
        >
          {" "}
          <h1 style={{ fontSize: "90px" }}>Projects</h1>
        </motion.div>
        <div id="projects">
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            id="pro-2"
          >
            <a
              href="https://travel-page-manali.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                // zIndex: 2,
                color: "white",
                // boxShadow:" 0 5px 10px #555" ,
                background: "black",
                padding: "8px 16px",
                borderRadius: "20px",
                textDecoration: "none",
                fontSize: "10px",
              }}
            >
              View Project 👆🏻
            </a>
            <img
              style={{ borderRadius: "10px", objectFit: "contain" }}
              src={ManaliImage}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </motion.div>
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            id="pro-2"
          >
            <a
              href="https://shopping-webstore.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                // zIndex: 2,
                color: "white",
                // boxShadow:" 0 8px 20px #555" ,
                background: "black",
                padding: "8px 16px",
                borderRadius: "20px",
                textDecoration: "none",
                fontSize: "10px",
              }}
            >
              View Project 👆🏻
            </a>
            <img
              style={{ borderRadius: "10px", objectFit: "contain" }}
              src={EImage}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </motion.div>

          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            id="pro-2"
          >
            <a
              href="https://live-userlist.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                // zIndex: 2,
                color: "white",
                // boxShadow:" 0 8px 20px #555" ,
                background: "black",
                padding: "8px 16px",
                borderRadius: "20px",
                textDecoration: "none",
                fontSize: "10px",
              }}
            >
              View Project 👆🏻
            </a>
            <img
              style={{ borderRadius: "10px", objectFit: "contain" }}
              src={UserImage}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 1 }}
          id="contact"
        >
          <h1 style={{ fontSize: "90px" }}>Let’s Connect</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 1 }}
          id="ganeshh"
        >
          <div id="touch">
            <h2 style={{ fontSize: "50px" }}>
              Work With <span style={{ color: "#F97316" }}>Me</span>
            </h2>
            <div id="my-contact">
              <p>
                Got an idea? Let’s bring it to life with clean code and creative
                design.
              </p>

              <div className="contact-info">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                  alt=""
                  width="40px"
                />
                <b>
                  <span>avsarmolganesh93@gmail.com</span>
                </b>
              </div>
              <div className="contact-info">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/17556/17556154.png"
                  alt=""
                  width="40px"
                />
                <b>
                  <span>+91 93229 78542</span>
                </b>
              </div>
              <div className="contact-info">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/854/854878.png"
                  alt=""
                  width="40px"
                />
                <b>
                  <span>Chikhli,Buldhana</span>
                </b>
              </div>

              <div id="logo">
                <h1>Follow Me :</h1>
                <a
                  style={{ width: "50px", borderRadius: "100%" }}
                  href="https://github.com/ganeshhavsarmol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                    width={"50px"}
                    alt=""
                  />
                </a>
                <a
                  style={{ width: "50px", borderRadius: "100%" }}
                  href="https://www.linkedin.com/in/ganesh-avsarmol-7a24b542a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                    width={"50px"}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="your-contact">
            {" "}
            <div
              style={{
                padding: "20px",
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <img
                style={{ objectFit: "cover" }}
                src="https://cdn-icons-png.flaticon.com/128/1933/1933005.png"
                width={"60px"}
                height={"60px"}
                alt=""
              />
              <p>
                {" "}
                <span style={{ fontSize: "35px" }}>Send a Message.</span> <br />
                I usually reply within 24 hours.
              </p>
            </div>
            <div style={{ padding: "10px", textAlig: "center" }}>
              <input
                type="text"
                name=""
                id="your-name"
                placeholder=" 🧑🏻‍💼 Your Name"
              />
              <input
                type="text"
                name=""
                id="your-email"
                placeholder="✉️ Your Email"
              />
              <textarea
                id="bio"
                rows="5px"
                cols="40px"
                placeholder="Write Your Message ..."
              ></textarea>
              <button className="send">Send Message </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
