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
import HackathonView from "./pages/HackathonView";
import ArticleView from "./pages/ArticleView";
import AuthGuard from "./components/AuthGuard";

import AddHackathon from "./pages/CreateHackathon";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      
      {/* Защищённые маршруты */}
      <Route
        path="/profile"
        element={
          <AuthGuard>
            <Profile />
          </AuthGuard>
        }
      />
      <Route
        path="/reset_password"
        element={
          <AuthGuard>
            <ResetPassword />
          </AuthGuard>
        }
      />
      <Route
        path="/articles"
        element={
          <AuthGuard>
            <ArticlesList />
          </AuthGuard>
        }
      />
      <Route
        path="/hackathons"
        element={
          <AuthGuard>
            <HackathonsList />
          </AuthGuard>
        }
      />
      <Route
        path="/add_hackathon"
        element={
          <AuthGuard>
            <AddHackathon />
          </AuthGuard>
        }
      />
      <Route
        path="/hackathons/:id"
        element={
          <AuthGuard>
            <HackathonView />
          </AuthGuard>
        }
      />
      <Route
        path="/articles/:id"
        element={
          <AuthGuard>
            <ArticleView />
          </AuthGuard>
        }
      />
        <Route
            path="/add_hackathon"
            element={
                <AuthGuard>
                    <AddHackathon />
                </AuthGuard>
            }
        />
    </Routes>
  </Router>
);

export default AppRoutes;
