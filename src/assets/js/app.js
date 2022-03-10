'use strict';

let  icon = document.querySelector(".fa-moon");
let  logo = document.querySelector(".is-logo");
let darkMode = localStorage.getItem('darkMode');

// check for emabling dark darkMode
const enableDarkMode = () => {
  document.body.classList.add("dark-theme");
  // toggle image and icon
  logo.src = "./assets/images/logo-light.png";
  icon.className = 'fa fa-circle';
  localStorage.setItem('darkMode', "enabled");
}

const disableDarkMode = () => {
  // toggle image and icon
  document.body.classList.remove("dark-theme");
  logo.src = "./assets/images/logo.png";
  icon.className = 'fa fa-moon';
  localStorage.setItem('darkMode', null);
}

// calling when the icon is clicked on web format
// icon.addEventListener('click', function(){
//   // updating before checking darkMode
//   darkMode = localStorage.getItem('darkMode');
//   if (darkMode !== "enabled") {
//     enableDarkMode();
//   }
//   else {
//     disableDarkMode();
//   }
// });

// checking if the theme browser is switched or not
if (darkMode === 'enabled') {
  enableDarkMode();
}

// for mbl mblIcon
let  mblIcon = document.querySelector(".mbl-moon");
let  mblLogo = document.querySelector(".mbl-is-logo");

const enableMblDarkMode = () => {
  document.body.classList.add("dark-theme");
  // toggle image and icon
  mblLogo.src = "./assets/images/logo-light.png";
  mblIcon.className = 'fa fa-circle';
  localStorage.setItem('darkMode', "enabled");
}

const disableMblDarkMode = () => {
  // toggle image and icon
  document.body.classList.remove("dark-theme");
  mblLogo.src = "./assets/images/logo.png";
  mblIcon.className = 'fa fa-moon';
  localStorage.setItem('darkMode', null);
}

// calling when the icon is clicked on responsive format
// mblIcon.addEventListener('click', function(){
//   // updating before checking darkMode
//   darkMode = localStorage.getItem('darkMode');
//   if (darkMode !== "enabled") {
//     enableMblDarkMode();
//   }
//   else {
//     disableMblDarkMode();
//   }
// });

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

function callWhenClicked() {
  alert('its here yayyy');
  // navClick(), navSlide() 
}
