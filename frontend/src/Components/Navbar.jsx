import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import StaggeredMenu from "./StraggeredMenu";

export default function Navbar() {
  
  // Straggered Menu Stuff 

  const menuItems = [
    { label: 'Migrate', ariaLabel: 'Navigate to Migrate page', link: '/migrate' },
    { label: 'Work', ariaLabel: 'Navigate to Work page', link: '/work' },
    { label: 'Study', ariaLabel: 'Navigate to Study page', link: '/study' },
    { label: 'Visa', ariaLabel: 'Navigate to Visa page', link: '/visa' },
    { label: 'Coaching', ariaLabel: 'Navigate to Coaching page', link: '/coaching' },
    { label: 'About Us', ariaLabel: 'Navigate to About page', link: '/about' },
  ];

  const socialItems = [
    { label: 'Facebook', link: 'https://facebook.com' },
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];
  function Page() {
    window.scrollTo(0, 0);
  }

  function CloseToggle() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler.offsetParent !== null) {
      navbarToggler.click();
    }
  }
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-custom py-lg-3 py-md-2 py-2">
        {/* <button
          className="navbar-toggler ms-2 px-1 py-0 border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        
        <div className="d-lg-none" style={{ position: 'fixed', top: 0, right: 0, zIndex: 9999 }}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={true}
            menuButtonColor="#1d4e50"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#1d4e50', '#36948c']}
            accentColor="#36948c"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
        </div>

        <Link
          className="navbar-brand ms-lg-4 mx-auto mx-lg-4 d-flex align-items-center"
          to="/"
        >
          <img
          className="logo"
            style={{ borderRadius: "12px",
             }}
            src={process.env.PUBLIC_URL + "/Logo.png"}
            alt="Vidya Education Abroad"
            height="70"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-1 gap-md-2 gap-lg-3 mb-2 mb-lg-0 mx-auto">
            <li className="nav-item linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link text-nowrap fs-5 nav-link-custom"
                to="/migrate"
              >
                Migrate
              </Link>
            </li>
            <li className="nav-item linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link text-nowrap fs-5 nav-link-custom"
                to="/work"
              >
                Work
              </Link>
            </li>
            <li className="nav-item text-nowrap fs-5 linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link nav-link-custom"
                to="/study"
              >
                Study
              </Link>
            </li>
            <li className="nav-item text-nowrap fs-5 linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link nav-link-custom"
                to="/visa"
              >
                Visa
              </Link>
            </li>
            <li className="nav-item text-nowrap fs-5 linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link nav-link-custom"
                to="/coaching"
              >
                Coaching
              </Link>
            </li>
            <li className="nav-item text-nowrap fs-5 linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link nav-link-custom"
                to="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
          <button
            className="lmbtn text-nowrap mx-2 ms-md-3 mx-lg-3 fs-6 fs-md-5 d-md-inline-block d-none"
            type="submit"
          >
            <Link
              onClick={() => {
                Page();
                CloseToggle();
              }}
              className="nav-link text-white"
              to="/visit">
              Read more
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
}
