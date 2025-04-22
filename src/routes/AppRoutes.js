import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import { ROUTES } from "../constants/routes";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
    </Routes>
  </Router>
);

export default AppRoutes;
