import { useState } from "react";
import twixourLogo from "../../images/twix.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [visible, setVisible] = useState("hidden");
  const hamButtonClick = () => {
    if (visible === "hidden") {
      setVisible("");
    } else {
      setVisible("hidden");
    }
  };

  const navBarElement = (
    <>
      <Link to="/" className="py-5 px-2 text-gray-700 hover:text-gray-900">
        Home
      </Link>
      <Link
        to="/courses"
        className="py-5 px-2 text-gray-700 hover:text-gray-900"
      >
        Courses
      </Link>
      <Link to="/about" className="py-5 px-2 text-gray-700 hover:text-gray-900">
        About Us
      </Link>
      <Link
        to="/byStudents"
        className="py-5 px-2 text-gray-700 hover:text-gray-900"
      >
        By Students
      </Link>
      <Link
        to="/contactUs"
        className="py-5 px-2 text-gray-700 hover:text-gray-900"
      >
        Contact Us
      </Link>
    </>
  );

  return (
    <div>
      <nav className="bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo  */}
              <div>
                <Link
                  to="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img src={twixourLogo} className="h-6 -w-6" />

                  <span className="font-bold">Twixour</span>
                </Link>
              </div>
              {/*  primary nav  */}

              <div className="hidden md:flex md:flex-row items-center space-x-1">
                {navBarElement}
              </div>
            </div>
            {/* <!-- secondary nav --> */}
            {/* <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3">
                Login
              </a>
              <a
                href="#"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div> */}
            {/* <!-- mobile button goes here --> */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={hamButtonClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}

        <div
          className={`mobile-menu ${visible} flex flex-col items-center md:hidden`}
        >
          {navBarElement}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
