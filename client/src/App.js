import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Request from "./pages/Request";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <nav style={{ padding: 10, background: "#222" }}>
        <Link to="/" style={{ color: "#fff", margin: 10 }}>Home</Link>
        <Link to="/donate" style={{ color: "#fff", margin: 10 }}>Donate</Link>
        <Link to="/request" style={{ color: "#fff", margin: 10 }}>Request</Link>
        <Link to="/dashboard" style={{ color: "#fff", margin: 10 }}>Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/request" element={<Request />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
