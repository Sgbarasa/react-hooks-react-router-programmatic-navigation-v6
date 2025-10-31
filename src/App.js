import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      {/* Conditional rendering — only show NavBar if logged in */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      {/* Pass login function as context to Outlet */}
      <Outlet context={login} />
    </div>
  );
}

export default App;
