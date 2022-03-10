import logo from '../assets/images/logo.png'
import {toggleNav} from '../assets/js/app';
import React from 'react'

const Header = () => {
  // responsive navigation
  let burger = document.querySelector('.burger');
  let nav = document.querySelector('.is-navbar-wrapper');
  let navLinks = document.querySelectorAll('.is-navbar-wrapper ul li');

  const toggleNav = function() {
    nav.classList.toggle('active');
    document.body.classList.toggle("fixed-position");
    // burger animation
    burger.classList.toggle('active');
  }

  const navSlide = () => {
    burger.addEventListener('click', toggleNav);
  }

  const navClick = () => {
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', toggleNav);
    });
  }

  function callToggle(){
    navClick();
    navSlide(); 
  }
  
  return (
    <header className="header-wrapper">
      <nav className="is-nav-menu">
        <div className="container-fluid">
          <div className="is-navbar">
            {/* navbar content */}
            <div className="is-navbar-content is-nav-wrapper">
              <ul className="nav navbar-nav nav-menu is-content is-content-links">
                <li className="nav-item active"><a href="">home</a></li>
                <li className="nav-item"><a href="#work">work</a></li>
                <li className="nav-item"><a href="#contact">contact</a></li>
              </ul>
            </div>
            {/* navbar image */}
            <a href="/" title="Israel Sunuwar" className="is-navbar-content">
              {/* <img src="./assets/images/logo.png" alt="logo" className="is-logo" /> */}
              <img src={logo} className="is-logo"/>
            </a>
            {/* social navbar */}
            <div className="is-navbar-content">
              <ul className="nav social-nav is-content is-content-social">
                <li><a href="https://discord.gg/vBHU8Ras" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord" aria-hidden="true"></i></a></li>
                <li><a href="https://www.instagram.com/isunuwa/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/isunuwa/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" aria-hidden="true"></i></a></li>
                <li><a href="https://www.behance.net/israelsunuwar" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/in/israel-sunuwar/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className="responsive-nav">
        <div className="container-fluid">
          <div className="is-res-navbar">
            {/* burger menu */}
            <div className="is-nav-header-wrapper">
              <a href="/" title="Israel Sunuwar" className="is-navbar-content">
                {/* <img src="./assets/images/logo.png" alt="logo" className="mbl-is-logo" /> */}
                <img src={logo} className="mbl-is-logo" />
              </a>
              <div className="burger-outer-div">
                <div className="burger-wrapper">
                  <div className="burger" onClick={callToggle}>
                    <div className="line1"></div>
                    <div className="line3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* navbar content */}
            <div className="is-navbar-wrapper">
              <div className="is-res-navbar-content is-nav-wrapper">
                <ul className="nav navbar-nav nav-menu is-content is-content-links">
                  <li className="nav-item">
                    <i className="mbl-moon far fa-moon" aria-hidden="true"></i>
                  </li>
                  <li className="nav-item"><a href="">home</a></li>
                  <li className="nav-item"><a href="#work">work</a></li>
                  <li className="nav-item"><a href="#contact">contact</a></li>
                </ul>
              </div>
              {/* social navbar */}
              <div className="is-res-navbar-content">
                <ul className="nav social-nav is-content is-content-social">
                  <li><a href="https://discord.gg/vBHU8Ras" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/isunuwa/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="https://github.com/isunuwa/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.behance.net/israelsunuwar" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/israel-sunuwar/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header