import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactNode, Suspense } from "react";
import Navbar from "./components/Navbar";
import { LoadingSpinner } from "./components/LoadingSpinner";
import React from "react";
import Footer from "./pages/Footer";
const Home = React.lazy(() => import("./pages/Home"));
const AboutDetail = React.lazy(() => import("./pages/AboutDetail"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const ProjectList = React.lazy(() => import("./pages/ProjectsList"));

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
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
