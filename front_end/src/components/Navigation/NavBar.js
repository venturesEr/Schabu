import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import logo from "../../Assets/android-chrome-144x144.png"

export default class Navbar extends React.Component {
  render() {
    return (
      // prettier-ignore
      <>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img src={logo} width="30" height="30" class="d-inline-block align-top m-l-50" alt=""/>
          <span className="m-l-10">Schabu</span>
        </a>
      </nav>
      </>
    );
  }
}
