import React from "react";
import { Link } from "react-scroll";


export default function LinkButton ({ section, LinkButtonObject }) {
  return (
    <div class="item fade-in-button" style={{ fontSize: "50px"}}>
        <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        >
        <DownCircleOutlined/>
        </Link>

    </div>
  }