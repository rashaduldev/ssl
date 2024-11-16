import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const CommonNav = () => {
  const [isWomenOpen, setIsWomenOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(false);

  // Hover handlers for each dropdown
  const handleMouseEnter = (setState) => () => setState(true);
  const handleMouseLeave = (setState) => () => setState(false);

  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="relative group">
        <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
          OUR COMPANY
          <IoIosArrowDown className="text-lg" />
        </button>
        {/* Dropdown Menu for OUR COMPANY */}
        <ul className="absolute left-0 mt-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 hidden group-hover:block w-40">
          <li className="border-b border-gray-800 w-full p-2 uppercase">
            <NavLink
              to="/our-company/mission"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Mission
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2 uppercase">
            <NavLink
              to="/our-company/organogram"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Organogram
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2 uppercase">
            <NavLink
              to="/our-company/goal"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Company goal
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2 uppercase">
            <NavLink
              to="/our-company/compliance"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
             Compliance
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2">
            <NavLink
              to="/our-company/aboutus"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2">
            <NavLink
              to="/our-company/md"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              OUR MD
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/ourservices"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          OUR SERVICES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ouroffered"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          OUR OFFERED
        </NavLink>
      </li>
      <li className="relative group">
        <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
          PRODUCT GALLERY
          <IoIosArrowDown className="text-lg" />
        </button>
        {/* Dropdown Menu for PRODUCT GALLERY */}
        <ul className="absolute left-0 mt-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full hidden group-hover:block">
          {/* Women Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsWomenOpen)}
            onMouseLeave={handleMouseLeave(setIsWomenOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
              WOMEN
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Women */}
            <ul
              className={`absolute left-[135px] top-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isWomenOpen ? "block" : "hidden"}`}
            >
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women/tops'}>
                    TOPS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women/jens'}>
                JENS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women/nightware'}>
                NIGHT WARE
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women/footware'}>
                FOOT WARE
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Men Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsMenOpen)}
            onMouseLeave={handleMouseLeave(setIsMenOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
              MEN
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Men */}
            <ul
              className={`absolute left-[135px] top-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isMenOpen ? "block" : "hidden"}`}
            >
                 <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/tops'}>
                    TOPS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/jackets'}>
                JACKETS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/nightware'}>
                NIGHT WARE
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/footware'}>
                FOOT WARE
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Kid's Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsKidsOpen)}
            onMouseLeave={handleMouseLeave(setIsKidsOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1 uppercase">
              Kid&lsquo;s
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Kid's */}
            <ul
              className={`absolute left-[135px] top-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isKidsOpen ? "block" : "hidden"}`}
            >
               <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/kids/tops'}>
                    TOPS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/kids/jackets'}>
                JACKETS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/kids/underware'}>
                UNDER WARE
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/kids/footware'}>
                FOOT WARE
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Fashion Accessories Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
          >
           <NavLink to={'/gallery/fashion-accessories'}>
           <button className="text-gray-800 hover:text-blue-600 flex  uppercase text-start items-center gap-1">
              Fashion Accessories
            </button>
           </NavLink>
           
          </li>

          {/* Home Textile Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
          >
           <NavLink to={'/gallery/home-textile'}>
           <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1 uppercase">
              Home Textile
            </button>
           </NavLink>
          </li>

          {/* Non Textile Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
          >
           <NavLink to={'/gallery/non-textile'}>
           <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1 uppercase">
              Non Textile
            </button>
           </NavLink>
          </li>
        </ul>
      </li>
      <li>
    <NavLink
    to="/contact"
    className={({ isActive }) =>
        isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
    }
    >
    CONTACT
    </NavLink>
    </li>
    <li>
    <NavLink
    to="/faq"
    className={({ isActive }) =>
        isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
    }
    >
    FAQ
    </NavLink>
    </li>
    </>
  );
};

export default CommonNav;


