import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import websitepicture from "./WebsitesPicture.png";
import downarrow from "./DownArrow.png"

class App extends Component {
  render() {
    return (
      <div className="App" class="clearfix">
        <Navbar />

        <div className="section">
          <div className="opening-section-content center-vertical center-horizontal" id="section1">
            
            <p class="fade-in-1">
              We at Innovate thank you for your time
            </p>
            
            <p class="fade-in-2">
              <br/><br/>
              In an ever-changing world, we have to adapt daily to thrive and excel
            </p>
            
            <p class="fade-in-3">
            <br/><br/>
              Advancing technology provides countless opportunities for growth
            </p>
            
            <p class="fade-in-4">
            <br/><br/>
              All that’s left now is for us to realize them
            </p>
            
            <p class="fade-in-5">
            <br/><br/>
              You’ve taken the first step by trusting us at Innovate
            </p>
            
            <p class="fade-in-6">
            <br/><br/>
              Now let us help you
            </p>
            
          </div>
        </div>

        <div className="section" >
          
          <div class="section-content center-vertical center-horizontal section-dark"  id="section2">
          
          <div class="test center-horizontal" style={{ height: "100%", width: "50%", float:"left" }}>
          #left content in here

          </div>
          
          <div class="test" style={{ height: "50%", width: "40%", float:"right" }}>

          <img height="100%" width="100%" src={websitepicture} usemap="#image-map" alt="Websites-Pic"/>
          {/* <map id="image-map" name="image-map">
          <area target="" alt="Google" title="Google" href="https://www.google.co.uk/" coords="-1,-1,590,1,587,127,179,128,179,316,0,317" shape="poly"/>
          <area target="" alt="Apple_Store" title="Apple_Store" href="https://www.apple.com/uk/" coords="177,454,179,129,772,130,772,226,325,225,325,456" shape="poly"/>
          <area target="" alt="Innovate_Website" title="Innovate_Website" href="http://localhost:3000/" coords="326,227,910,229,908,604,326,604" shape="poly"/>
          </map> */}
          

        </div>
        </div>
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