import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header(props) {
    return (
    <div className="AppHeader">
        <Link to = "/">
        <img className="LogoHeader" src='/LOGO.png' />
        </Link>
    </div>
    );
  }