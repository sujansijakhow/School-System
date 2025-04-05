import React from "react";
import { FaTachometerAlt, FaUserGraduate, FaChalkboardTeacher, FaUserCheck, FaClipboardList, FaCalendarAlt, FaInfoCircle, FaBookOpen, FaMoneyBill, FaUsers, FaCogs, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-60 h-[580px] bg-[#B0B9D0] p-4 text-black flex flex-col justify-between rounded-md">
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
  );
};

export default Sidebar;
