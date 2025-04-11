import { useState } from "react";
import { IoMenu , IoCloseSharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [menubtn, setMenuBtn] = useState(true);
  return (
    <div className="Navbar">
      <div className="logo">
        <h2>SAHK</h2>
      </div>
      <button className="menu-btn" onClick={() => setMenuBtn(!menubtn)}>
        {menubtn  ? <IoMenu className="nav-menu" /> : <IoCloseSharp className="nav-menu" />}
      </button>
      <div className={`options ${!menubtn ? "open" : ""}`}  >
        <div className="links">
          <a href="/" onClick={() => setMenuBtn(!menubtn)} >Home</a>
          <a href="/recipes" onClick={() => setMenuBtn(!menubtn)} >All Recipies</a>
          <a href="/fast-food" onClick={() => setMenuBtn(!menubtn)}>Fast Food</a>
          <a href="/freash-food" onClick={() => setMenuBtn(!menubtn)}>Fresh Food</a>
          <a href="/recipes/new" onClick={() => setMenuBtn(!menubtn)}>Create Recipe</a>
        </div>
        <div className="user">
          <a href="/user/login" onClick={() => setMenuBtn(!menubtn)}>Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
