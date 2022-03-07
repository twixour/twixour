import twixourLogo from "../../images/twix.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <nav className="bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo  */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img src={twixourLogo} className="h-6 -w-6" />
                  {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg> --> */}
                  <span className="font-bold">Twixour</span>
                </a>
              </div>
              {/*  primary nav  */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className="py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  Courses
                </Link>
                <a
                  href="#"
                  className="py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  By Students
                </a>
                <a
                  href="#"
                  className="py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* <!-- secondary nav --> */}
            {/* <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3">
                Login
              </a>
              <a
                href="#"
                class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div> */}
            {/* <!-- mobile button goes here --> */}
            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div class="mobile-menu hidden md:hidden">
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">
            Courses
          </a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">
            Fee
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
