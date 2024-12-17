import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import About from './pages/About'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default AppRoutes;
