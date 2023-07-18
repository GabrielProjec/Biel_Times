import React from "react";

import ListMenu from "../../assets/list.svg";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "rgb(32,45,105)",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white fs-3" href="/">
            BIEL-TIMES
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src={ListMenu}
              alt="Link do Menu"
              style={{
                width: "40px",
                border: "none",
              }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link text-white fs-4"
                  aria-current="page"
                  href="/"
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/health">
                  Health
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white fs-4" href="/science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/techonology">
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
