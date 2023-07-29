import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {<a href="#home">home</a>}
  {<a href="#projects">projects</a>}
  {<a href="#about">about</a>}
  </nav>;
}

export default NavBar;
