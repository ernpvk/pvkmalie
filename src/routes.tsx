import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Footer from "./pages/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const AboutDetail = React.lazy(() => import("./pages/AboutDetail"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const ProjectList = React.lazy(() => import("./pages/ProjectsList"));

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutDetail />,
      },
      {
        path: "/projects",
        element: <ProjectList />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetail />,
      },
    ],
  },
]);
