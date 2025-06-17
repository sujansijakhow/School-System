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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
