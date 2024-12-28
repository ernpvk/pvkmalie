import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ReactNode, Suspense } from "react";
import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const AboutDetail = React.lazy(() => import("./pages/AboutDetail"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const ProjectList = React.lazy(() => import("./pages/ProjectsList"));

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutDetail />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
