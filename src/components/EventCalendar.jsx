// EventCalendar.jsx
import React, { useState } from "react";

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events = [
    { date: "2025-01-10", event: "School Annual Function" },
    { date: "2025-01-27", event: "Sport Competition" },
    { date: "2025-02-14", event: "Valentine's Day Event" },
    { date: "2025-04-30", event: "Spring Festival" },
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today = new Date();

  return (
    // <div className="flex justify-center items-start min-h-[400px] bg-gray-100 p-6">
      <div className="bg-[#D9D9D9] rounded-xl w-[700px] p-8 flex flex-col md:flex-row gap-8">
        
        {/* Calendar Section */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Events Calendar</h2>
            <div className="flex items-center gap-4">
              <button onClick={handlePrevMonth} className="text-gray-600 text-xl hover:text-gray-800">&lt;</button>
              <span className="text-lg font-semibold text-gray-700">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
              <button onClick={handleNextMonth} className="text-gray-600 text-xl hover:text-gray-800">&gt;</button>
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 text-center mb-2">
            {days.map((day) => (
              <div key={day} className="text-gray-600 font-semibold">{day}</div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 text-center gap-2">
            {/* Empty boxes before first day */}
            {Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() }).map((_, idx) => (
              <div key={`empty-${idx}`} />
            ))}

            {/* Dates */}
            {Array.from({ length: getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear()) }, (_, idx) => {
              const day = idx + 1;
              const isToday =
                day === today.getDate() &&
                currentDate.getMonth() === today.getMonth() &&
                currentDate.getFullYear() === today.getFullYear();

              return (
                <div
                  key={day}
                  className={`py-2 rounded-full transition-all duration-300 ${
                    isToday ? "bg-blue-500 text-white font-bold" : "hover:bg-blue-100"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* Events Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>

          <div className="flex flex-col gap-4">
            {events.filter((e) => {
              const eventDate = new Date(e.date);
              return (
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear()
              );
            }).map((e, idx) => {
              const eventDate = new Date(e.date);

              return (
                <div key={idx} className="bg-blue-100 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                  <div className="text-gray-800 font-semibold">
                    {eventDate.getDate()} {monthNames[eventDate.getMonth()]}, {eventDate.getFullYear()}
                  </div>
                  <div className="text-gray-600">{e.event}</div>
                </div>
              );
            })}
          </div>

          {/* No Events Message */}
          {events.filter((e) => {
              const eventDate = new Date(e.date);
              return (
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear()
              );
            }).length === 0 && (
              <div className="text-gray-500 text-center mt-10">
                No events scheduled this month.
              </div>
          )}

        </div>
      </div>
    // </div>
  );
};

export default EventCalendar;
