import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserCheck,
  FaClipboardList,
  FaCalendarAlt,
  FaInfoCircle,
  FaBookOpen,
  FaMoneyBill,
  FaUsers,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;
  const isPrefix = (prefix) => location.pathname.startsWith(prefix);

  return (
    <>
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-[#7081C7] text-white p-2 rounded cursor-pointer"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu size={15} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 w-60 h-full bg-[#B0B9D0] p-4 text-black z-40 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
      >
        <div className="md:hidden flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Logo School</h1>
          <IoMdClose
            size={20}
            onClick={toggleSidebar}
            className="cursor-pointer rounded-full hover:bg-gray-300"
          />
        </div>

        <h1 className="text-xl font-bold mb-4 hidden md:block">Logo School</h1>

        <div className="h-full flex flex-col overflow-y-auto space-y-28 md:overflow-y-hidden">
          <div>
            <ul className="flex flex-col space-y-1">
              <li>
                <Link
                  to="/"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isActive("/") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaTachometerAlt />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/student"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/student") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaUserGraduate />
                  <span>Student</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/teacher"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/teacher") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaChalkboardTeacher />
                  <span>Teacher</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/attendance"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/attendance") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaUserCheck />
                  <span>Attendance</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/class"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/class") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaUsers />
                  <span>Class</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/notice"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/notice") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaClipboardList />
                  <span>Notice</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/events") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaCalendarAlt />
                  <span>Events</span>
                </Link>
              </li>
              
              <li>
                <Link
                  to="/exam"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/exam") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaBookOpen />
                  <span>Exam</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/payment"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/payment") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaMoneyBill />
                  <span>Payment</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/help"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/help") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaInfoCircle />
                  <span>Help Center</span>
                </Link>
              </li>



            </ul>
          </div>

          <div className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/setting"
                  className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isPrefix("/setting") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <FaCogs />
                  <span>Setting</span>
                </Link>
              </li>
              <li className="flex items-center space-x-2 p-2 text-red-500 hover:bg-gray-200 rounded cursor-pointer cursor-pointer">
                <FaSignOutAlt />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
