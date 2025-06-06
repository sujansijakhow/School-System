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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger icon (only on mobile, outside sidebar and hidden when sidebar is open) */}
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-[#7081C7] text-white p-2 rounded cursor-pointer"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu size={15} />
        </button>
      )}

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-60 h-full bg-[#B0B9D0] p-4 text-black z-40 transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
      >
        {/* Top row for mobile: Close icon + Logo */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Logo School</h1>
          <IoMdClose size={20} onClick={toggleSidebar} className="cursor-pointer" />
        </div>

        {/* Title for desktop */}
        <h1 className="text-xl font-bold mb-4 hidden md:block">Logo School</h1>

        {/* Sidebar Content */}
        <div className="h-full flex flex-col overflow-y-auto space-y-28 md:overflow-y-hidden">
          <div>
            <ul className="flex flex-col space-y-1">
              <li className="flex items-center space-x-2 p-2 bg-[#7081C7] text-white rounded">
                <FaTachometerAlt /> <span>Dashboard</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaUserGraduate /> <span>Student</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaChalkboardTeacher /> <span>Teacher</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaUserCheck /> <span>Attendance</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaClipboardList /> <span>Notice</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaCalendarAlt /> <span>Events</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaInfoCircle /> <span>Help Center</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaBookOpen /> <span>Exam</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaMoneyBill /> <span>Payment</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaUsers /> <span>Class</span>
              </li>
            </ul>
          </div>

          {/* Bottom Settings & Logout */}
          <div className="mt-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FaCogs /> <span>Setting</span>
              </li>
              <li className="flex items-center space-x-2 p-2 text-red-500 hover:bg-gray-200 rounded cursor-pointer">
                <FaSignOutAlt /> <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
