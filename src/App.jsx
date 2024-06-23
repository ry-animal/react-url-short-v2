import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './layouts/app-layout';
import './App.css';
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Redirect from "./pages/redirect";
import Link from "./pages/link";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {path:"/", element: <Landing />},
      {path:"/auth", element: <Auth />},
      {path:"/dashboard", element: <Dashboard />},
      {path:"/:id", element: <Redirect />},
      {path:"/link/:id", element: <Link />},
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
