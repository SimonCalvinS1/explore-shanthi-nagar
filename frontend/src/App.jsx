import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recommendations from "./pages/Recommendations";
import ScrollToTop from "./components/common/ScrollToTop";
import ExploreArea from "./pages/ExploreArea";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/places-to-visit" element={<Recommendations />} />
          <Route path="/explore" element={<ExploreArea />} />
          <Route path="/explore/:area" element={<ExploreArea />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
