import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

const CommonNav = () => {
  // const [isWomenOpen, setIsWomenOpen] = useState(false);
  // const [isMenOpen, setIsMenOpen] = useState(false);
  // const [isKidsOpen, setIsKidsOpen] = useState(false);

  // // Hover handlers for each dropdown
  // const handleMouseEnter = (setState) => () => setState(true);
  // const handleMouseLeave = (setState) => () => setState(false);

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
              to="/our-company/strength"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              STRENGTH
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
          to="/quality"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          QUALITY
        </NavLink>
      </li>
      <li className="relative group">
  <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
    PRODUCT GALLERY
    <IoIosArrowDown className="text-lg" />
  </button>
  {/* Dropdown Menu for PRODUCT GALLERY */}
  <div className="absolute -left-[550px] mt-0 hidden group-hover:flex justify-center bg-white pt-5 w-[990px] h-[290px] shadow-md rounded-lg z-50 pl-0">
    <ul className="flex justify-between items-start gap-14 px-0 py-4 text-black">
      {/* Women Category with Subitems */}
      <li className="relative group w-full">
        <button className="text-black hover:text-blue-600 flex items-center gap-1 font-bold">
          WOMEN
          <IoIosArrowDown className="text-lg" />
        </button>
        <ul className="absolute left-0 top-full bg-white rounded-lg space-y-2 w-[110px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/women/tops'}>TOPS</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/women/jens'}>JENS</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/women/nightware'}>NIGHT WEAR</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 border-b border-black">
            <NavLink to={'/gallery/women/footware'}>FOOT WEAR</NavLink>
          </li>
        </ul>
      </li>

      {/* Men Category with Subitems */}
      <li className="relative group w-full">
        <button className="text-black hover:text-blue-600 flex items-center gap-1 font-bold">
          MEN
          <IoIosArrowDown className="text-lg" />
        </button>
        <ul className="absolute left-0 top-full bg-white rounded-lg space-y-2 w-[110px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/men/tops'}>TOPS</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/men/jackets'}>JACKETS</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/men/nightware'}>NIGHT WEAR</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/men/footware'}>FOOT WEAR</NavLink>
          </li>
        </ul>
      </li>

      {/* Kids Category with Subitems */}
      <li className="relative group w-full">
        <button className="text-black hover:text-blue-600 flex items-center gap-1 font-bold">
          KIDS
          <IoIosArrowDown className="text-lg" />
        </button>
        <ul className="absolute left-0 top-full rounded-lg space-y-2 w-[100px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 p-2 border-b border-black">
            <NavLink to={'/gallery/kids/tops'}>TOPS</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 p-2 border-b border-black">
            <NavLink to={'/gallery/kids/jackets'}>JACKETS</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/kids/underware'}>UNDER WEAR</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 py-2 border-b border-black">
            <NavLink to={'/gallery/kids/footware'}>FOOT WEAR</NavLink>
          </li>
        </ul>
      </li>

      {/* Fashion Accessories */}
      <li className="">
        <NavLink to={'/gallery/fashion-accessories'}>
          <button className="text-black hover:text-blue-600 uppercase font-bold w-[190px]">
            Fashion Accessories
          </button>
        </NavLink>
      </li>

      {/* Home Textile */}
      <li className="">
        <NavLink to={'/gallery/home-textile'}>
          <button className="text-black hover:text-blue-600 uppercase font-bold w-[120px]">
            Home Textile
          </button>
        </NavLink>
      </li>

      {/* Non Textile */}
      <li className="">
        <NavLink to={'/gallery/non-textile'}>
          <button className="text-black hover:text-blue-600 uppercase font-bold w-[110px]">
            Non Textile
          </button>
        </NavLink>
      </li>
    </ul>
  </div>
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
    to="/career"
    className={({ isActive }) =>
        isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
    }
    >
      CAREER
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


