// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeHeroSec from './routes/HomeHeroSec';
import Student from './routes/Student';
import Teacher from './routes/Teacher';
import Attendance from './routes/Attendance';
import Class from './routes/Class';
import Notice from './routes/Notice';
import Event from './routes/Event';
import Exam from './routes/Exam';
import Payment from './routes/Payment';
import Help from './routes/Help';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeHeroSec />
  },
  {
    path: "/student",
    element: <Student />
  },
  {
    path: "/teacher",
    element: <Teacher />
  },
  {
    path: "/attendance",
    element: <Attendance />
  },
  {
    path: "/class",
    element: <Class />
  },
  {
    path: "/notice",
    element: <Notice />
  },
  {
    path: "/events",
    element: <Event />
  },
  {
    path: "/exam",
    element: <Exam />
  },
  {
    path: "/payment",
    element: <Payment />
  },
  {
    path: "/help",
    element: <Help />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
