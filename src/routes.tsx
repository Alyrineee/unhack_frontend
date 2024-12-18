import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ArticlesList from "./pages/ArticlesList";
import HackathonsList from "./pages/HackathonsList";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/reset_password" element={<ResetPassword />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/hackathons" element={<HackathonsList />} />
    </Routes>
  </Router>
);

export default AppRoutes;
