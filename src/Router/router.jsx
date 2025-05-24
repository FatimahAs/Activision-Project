import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SearchJob from "../Pages/SearchJob";
import Support from "../Pages/Support";

import HomeNavbar from "../component/NavBar/HomeNavbar";
import HomeFooter from "../component/Footer/HomeFooter";

function Layout() {
  return (
    <>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/careers", element: <SearchJob /> },
      { path: "/support", element: <Support /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
