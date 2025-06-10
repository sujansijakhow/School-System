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
  const [showStudentMenu, setShowStudentMenu] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleStudentMenu = () => setShowStudentMenu(!showStudentMenu);

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
              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isActive("/") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaTachometerAlt />
                <Link to="/">Dashboard</Link>
              </li>

              {/* Toggleable Student Section */}
              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/student") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
                onClick={toggleStudentMenu}
              >
                <FaUserGraduate />
                <span>Student</span>
              </li>

              {showStudentMenu && (
                <ul className="ml-8 text-sm space-y-1 mt-1">
                  <li
                    className={`p-1 rounded ${
                      isActive("/student/add") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    <Link to="/student/add">Add New Student</Link>
                  </li>
                  <li
                    className={`p-1 rounded ${
                      isActive("/student/list") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    <Link to="/student/list">Student List</Link>
                  </li>
                </ul>
              )}

              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/teacher") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaChalkboardTeacher />
                <Link to="/teacher">Teacher</Link>
              </li>

              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/attendance") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaUserCheck />
                <Link to="/attendance">Attendance</Link>
              </li>

              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/notice") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaClipboardList />
                <Link to="/notice">Notice</Link>
              </li>

              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/events") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaCalendarAlt />
                <Link to="/events">Events</Link>
              </li>

              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/help") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaInfoCircle />
                <Link to="/help">Help Center</Link>
              </li>

              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/exam") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaBookOpen />
                <Link to="/exam">Exam</Link>
              </li>

              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/payment") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaMoneyBill />
                <Link to="/payment">Payment</Link>
              </li>

              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/class") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaUsers />
                <Link to="/class">Class</Link>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <ul className="space-y-2">
              <li
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isPrefix("/setting") ? "bg-[#7081C7] text-white" : "hover:bg-gray-200"
                }`}
              >
                <FaCogs />
                <Link to="/setting">Setting</Link>
              </li>
              <li className="flex items-center space-x-2 p-2 text-red-500 hover:bg-gray-200 rounded cursor-pointer">
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
