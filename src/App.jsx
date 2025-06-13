// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeHeroSec from './components/HomeHeroSec';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Attendance from './components/Attendance';

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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
