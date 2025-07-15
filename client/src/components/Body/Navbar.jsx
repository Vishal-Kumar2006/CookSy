import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios
        .get("https://sahk.onrender.com/user/profile", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        })
        .catch(() => {
          setUser(null);
          localStorage.removeItem("user");
        });
    }
  }, [user]);

  const handleLogout = () => {
    axios
      .post(
        "https://sahk.onrender.com/user/logout",
        {},
        { withCredentials: true }
      )
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/"); // redirect to home after logout
      })
      .catch((err) => console.error(err));
  };

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="Navbar">
      <div className="logo" onClick={() => handleNavigate("/")}>
        <h2>SAHK</h2>
      </div>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <IoCloseSharp className="nav-menu" />
        ) : (
          <IoMenu className="nav-menu" />
        )}
      </button>
      <div className={`options ${menuOpen ? "open" : ""}`}>
        <div className="links">
          <button onClick={() => handleNavigate("/")}>Home</button>
          <button onClick={() => handleNavigate("/recipes")}>
            All Recipes
          </button>
          <button onClick={() => handleNavigate("/fast-food")}>
            Fast Food
          </button>
          <button onClick={() => handleNavigate("/fresh-food")}>
            Fresh Food
          </button>
          <button onClick={() => handleNavigate("/recipes/new")}>
            Create Recipe
          </button>
        </div>
        <div className="user">
          {user ? (
            <>
              <button onClick={() => handleNavigate("/user/profile")}>
                <img src={user.image} alt="User" className="user-image" />
              </button>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => handleNavigate("/user/login")}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
