//import React from 'react'
// import './styleswitcher.css'

// export default function styleswitcher() {

//   const setDarkMode = () => {
//     localStorage.setItem('theme', "dark");
//     document.querySelector("body").setAttribute('data-theme', 'dark')
//   };
//   const setLightMode = () => {
//     localStorage.setItem('theme', "white");
//     document.querySelector("body").setAttribute('data-theme', 'light')
//   };
//   const toggleTheme = (e) => {
//     if (e.target.checked) setDarkMode();
//     else setLightMode();

//   }

//   if (localStorage.getItem("theme") === "dark") {
//     setDarkMode();
//   } else if (localStorage.getItem("theme") === "white") {
//     setLightMode();
//   }




//   return (
//     <div className='style-switcher'>
//       <div id='icon' className='day-night s-icon'>
//         <label className="switch">
//           <input type="checkbox" onChange={toggleTheme} />
//           <span className="slider round"></span>
//         </label>

//       </div>
//     </div>
//   )
// }
