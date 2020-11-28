import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import websitepicture from "./WebsitesPicture.png";
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import { Link } from "react-scroll";


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />

        <div className="opening-section container-horizontal" id="section1">

          <div className="button-up" /> {/* For formatting consistency */}

          <div className="align-item-center text-center">

            <p class="fade-in-1">
              We at Innovate thank you for your time
            </p>
            <p class="fade-in-2">
              <br /><br />
              In an ever-changing world, we have to adapt daily to thrive and excel
            </p>
            <p class="fade-in-3">
              <br /><br />
              Advancing technology provides us countless opportunities for growth
            </p>
            <p class="fade-in-4">
              <br /><br />
              All that’s left now is for us to realize them
            </p>
            <p class="fade-in-5">
              <br /><br />
              You’ve taken the first step by trusting us at Innovate
            </p>
            <p class="fade-in-6">
              <br /><br />
              Now let us help you!
            </p>

          </div>


          <div className="button-down fade-in-button">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <DownCircleOutlined />
            </Link>

          </div>

        </div>



        <div className="section container-horizontal section-dark" id="section2">

          <div className="button-up">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              <UpCircleOutlined />
            </Link>
          </div>


          <div className="align-item-center content container-vertical">

            <div className="items-vertical text-center">
              <h1 style={{ color: "#87C5E1" }}>Website Design</h1>
              <h2>Simple</h2>
              <h2>Elegant</h2>
              <h2>Unique</h2>
            </div>

            <div className="items-vertical">
              <img height="100%" width="100%" src={websitepicture} usemap="#image-map" alt="Websites-Pic" />
            </div>




          </div>


          <div className="button-down">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <DownCircleOutlined />
            </Link>

          </div>












          {/* <div className="section-content container-horizontal" id="section2">            
              
            <div class="test2 center" style={{ height: "100%", width: "50%", float:"left" }}>
              <p>
              <h1>Website Design</h1>
              <h2>Elegant</h2>
              <h2>Unique</h2>
              <h2>Personal</h2>
              <h5>Click to find out more</h5>
              </p>
            </div>
          
            <div style={{ height: "100%", width: "40%", float:"right" }}>
              <p class="center">
              <img height="100%" width="100%" src={websitepicture} usemap="#image-map" alt="Websites-Pic"/>
              
              </p>
            </div>

          </div> */}
        </div>

        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={false}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={true}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default App;