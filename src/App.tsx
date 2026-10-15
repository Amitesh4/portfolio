import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";

function ScrollRestoration() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <Nav />
    </BrowserRouter>
  );
}
