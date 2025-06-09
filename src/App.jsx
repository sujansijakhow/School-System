// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeHeroSec from './components/HomeHeroSec';
import Student from './components/Student';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeHeroSec />
  },
  {
    path: "/student",
    element: <Student />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
