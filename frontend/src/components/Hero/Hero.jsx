
// import { Link } from "react-router-dom";
// import hero from "../../assets/hero.png";

// const Hero = () => {
//   return (
//     <div className="relative h-screen flex items-center justify-center">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${hero})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r 
//          from-slate-700 via-slate-700 to-slate-700 opacity-90 blur-lg">

//          </div>
//       </div>
//       <div className="relative z-10 text-center text-white">
//         <h1 className="text-5xl font-bold mb-4">Welcome to Tech World</h1>
//         <p className="text-xl mb-8">We create amazing tech community</p>
//         <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg">
//          <Link to="/courses"> Get Started</Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;





import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-700 to-slate-700 opacity-90"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Tech World
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
          We create amazing tech community
        </p>
        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-base sm:text-lg">
          <Link to="/courses">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
