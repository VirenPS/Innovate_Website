import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";

// import {contentsSection1, contentsSection2, contentsSection3, contentsSection4, contentsSection5} from "./TextContents";

class App extends Component {
  render() {
    return (
      <div className="App" class="clearfix">
        <Navbar />
        
          {/* title="Section 1" */}
          {/* subtitle={textContents} */}
          {/* dark={true} */}
          {/* id="section1" */}

        <div className={"section" + (false ? " section-dark" : "")}>
          <div className="section-content" id="section1" >
            <h1>Hello Piyush</h1>
            <p>"HIII"</p>
          </div>
        </div>

        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;