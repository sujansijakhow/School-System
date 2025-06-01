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
import { IoMdClose } from "react-icons/io"; // close icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#7081C7] text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu size={20} />
      </button>

      {/* Overlay (dark background on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-60 h-full bg-[#B0B9D0] p-4 text-black flex flex-col justify-between rounded-md z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
      >
        {/* Close button on mobile */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleSidebar} className="text-black mb-4">
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Upper Section */}
        <div>
          <h1 className="text-xl font-bold mb-4">Logo School</h1>
          <ul className="flex flex-col">
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

        {/* Lower Section */}
        <div>
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
    </>
  );
};

export default Sidebar;
