import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [menubtn, setMenuBtn] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch user ONCE (cookie-based auth)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://sahk.onrender.com/user/profile", {
          withCredentials: true,
        });

        setUser(res.data.user);
      } catch (err) {
        console.log(err.response?.data || err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // 🔥 Logout handler
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://sahk.onrender.com/user/logout",
        {},
        { withCredentials: true },
      );

      setUser(null);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <h2>SAHK</h2>
      </div>

      <button className="menu-btn" onClick={() => setMenuBtn(!menubtn)}>
        {menubtn ? (
          <IoMenu className="nav-menu" />
        ) : (
          <IoCloseSharp className="nav-menu" />
        )}
      </button>

      <div className={`options ${!menubtn ? "open" : ""}`}>
        {/* 🔗 Links */}
        <div className="links">
          <Link to="/" onClick={() => setMenuBtn(!menubtn)}>
            Home
          </Link>
          <Link to="/recipes" onClick={() => setMenuBtn(!menubtn)}>
            All Recipes
          </Link>
          <Link to="/fast-food" onClick={() => setMenuBtn(!menubtn)}>
            Fast Food
          </Link>
          <Link to="/fresh-food" onClick={() => setMenuBtn(!menubtn)}>
            Fresh Food
          </Link>
          <Link to="/recipes/new" onClick={() => setMenuBtn(!menubtn)}>
            Create Recipe
          </Link>
        </div>

        {/* 👤 User Section */}
        <div className="user">
          {loading ? (
            <span className="loading">Loading...</span>
          ) : user ? (
            <>
              <Link to="/user/profile" onClick={() => setMenuBtn(!menubtn)}>
                {user?.image && (
                  <img src={user.image} alt="User" className="user-image" />
                )}
              </Link>

              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/user/login" onClick={() => setMenuBtn(!menubtn)}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
