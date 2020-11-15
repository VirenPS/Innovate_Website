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
        
          {/* title="Section 1" */}
          {/* subtitle={dummyText} */}
          {/* dark={true} */}
          {/* id="section1" */}

        <div className={"section" + (false ? " section-dark" : "")}>
          <div className="section-content" id="section1" >
            <h1>"Section 1"</h1>
            <p>{dummyText}

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