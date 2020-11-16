import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App" class="clearfix">
        <Navbar />

        <div className="section">
          <div className="section-content center-vertical center-horizontal" id="section1">
            
            <p class="fade-in-1">
              We at Innovate thank you for your time. 
            </p>
            
            <p class="fade-in-2">
              <br/><br/>
              In an ever-changing world, we grow and adapt daily to thrive and excel.
            </p>
            
            <p class="fade-in-3">
            <br/><br/>
              Developing technology provides countless opportunities for growth.
            </p>
            
            <p class="fade-in-4">
            <br/><br/>
              All that’s left now is for us to realize them.
            </p>
            
            <p class="fade-in-5">
            <br/><br/>
              You’ve taken the first step by trusting us at Innovate.
            </p>
            
            <p class="fade-in-6">
            <br/><br/>
              Now let us help you.
            </p>
            
          </div>
        </div>

        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={true}
          id="section2"
        />
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