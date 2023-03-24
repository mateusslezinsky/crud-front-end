import React from "react";

import { ReactComponent as Logo } from "../../Logo.svg";

const LogoComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <a href="/">
            <Logo width={300} height={100}></Logo>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default LogoComponent;
