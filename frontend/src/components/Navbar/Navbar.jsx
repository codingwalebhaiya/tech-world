
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import { useNavigate } from "react-router-dom";


// const Navbar = () => {

//   const navigate = useNavigate();

//   return (
//     <nav className="flex justify-between w-[100%]  fixed top-0 left-0 items-center z-10 pl-[10%] pr-[10%] ">
//       <img src={logo} alt="logo" className="w-[100px]" />
//       <ul className=" flex items-center justify-center gap-4 font-serif text-white ">
//         <li className="cursor-pointer"><Link to="/" >Home</Link></li>
//         <li className="cursor-pointer"><Link to="/courses">Courses</Link></li>
//         <li className="cursor-pointer"><Link to="/about">About Us</Link></li>
//         <li className="cursor-pointer"><Link to="/contact">Contact Us</Link></li>
//       </ul>
//       <ul className="flex items-center justify-center gap-3">
//         <div>
//           <img src={"/"} alt="searchbar" />
//         </div> 
        
//         <li>

       
//           <div
//             className="bg-blue-500 px-4 py-1.5 rounded-md
//        text-white font-semibold hover:bg-blue-800 cursor-pointer "
//           >
//            <button onClick={() => navigate("/login")} >Login</button>
//           </div>
//         </li>
//         <li>
//           <div
//             className="bg-slate-700 px-4 py-1.5 rounded-md
//        text-white font-semibold hover:bg-blue-950  cursor-pointer "
//           >
//           <button onClick={() => navigate("/register")} >Register</button>
//           </div> 
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


























import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full fixed top-0 left-0 z-10 p-4 ">
      <img src={logo} alt="logo" className="w-24" />
      <ul className="hidden md:flex items-center justify-center gap-4 font-serif text-white">
        <li className="cursor-pointer"><Link to="/">Home</Link></li>
        <li className="cursor-pointer"><Link to="/courses">Courses</Link></li>
        <li className="cursor-pointer"><Link to="/about">About Us</Link></li>
        <li className="cursor-pointer"><Link to="/contact">Contact Us</Link></li>
      </ul>
      <ul className="hidden md:flex items-center justify-center gap-3">
        <li>
          <div className="bg-blue-500 px-4 py-1.5 rounded-md text-white font-semibold hover:bg-blue-800 cursor-pointer">
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        </li>
        <li>
          <div className=" bg-slate-700 px-4 py-1.5 rounded-md text-white font-semibold hover:bg-blue-950 cursor-pointer">
            <button onClick={() => navigate("/register")}>Register</button>
          </div>
        </li>
      </ul>
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center justify-center gap-4 p-4 text-white">
          <li className="cursor-pointer" onClick={toggleMobileMenu}><Link to="/">Home</Link></li>
          <li className="cursor-pointer" onClick={toggleMobileMenu}><Link to="/courses">Courses</Link></li>
          <li className="cursor-pointer" onClick={toggleMobileMenu}><Link to="/about">About Us</Link></li>
          <li className="cursor-pointer" onClick={toggleMobileMenu}><Link to="/contact">Contact Us</Link></li>
          <li className="w-full">
            <div
              className="bg-blue-500 px-4 py-1.5 rounded-md text-white font-semibold hover:bg-blue-800 cursor-pointer text-center w-full"
              onClick={() => {
                navigate("/login");
                toggleMobileMenu();
              }}
            >
              Login
            </div>
          </li>
          <li className="w-full">
            <div
              className="bg-slate-700 px-4 py-1.5 rounded-md text-white font-semibold hover:bg-blue-950 cursor-pointer text-center w-full"
              onClick={() => {
                navigate("/register");
                toggleMobileMenu();
              }}
            >
              Register
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

