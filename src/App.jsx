// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeHeroSec from './components/HomeHeroSec';
import Student from './components/Student';
import Teacher from './components/Teacher';

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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
