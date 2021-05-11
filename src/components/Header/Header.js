import React from "react";
import "./Header.css"

function Header() {
  return (
    <>
      {/* <h1>Hello</h1>
      <p>I'm Slim Amdouni</p> */}
      <header>
        <img className='himg'
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="logo-docplanner"
        />
        <ul>
          <li>About us </li>
          <li>Career</li>
          <li>Departement</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
