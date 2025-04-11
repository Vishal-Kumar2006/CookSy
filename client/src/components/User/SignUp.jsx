import { useNavigate } from "react-router-dom";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import axios from "axios";
import "./Login.css";

const CLOUDINARY_CLOUD_NAME = "dhj0i3rr1";
const CLOUDINARY_UPLOAD_PRESET = "SAHK-Project";
const CLOUDINARY_FOLDER = "SAHK";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    image:
      "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      formData.append("folder", CLOUDINARY_FOLDER);
      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
        setUserData((prev) => ({ ...prev, image: res.data.secure_url }));
      } catch (err) {
        console.error("Image upload failed", err);
      }
    } else
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      const response = await axios.post(
        "http://localhost:5000/user/sign-up",
        userData,
        { withCredentials: true }
      );

      console.log(response.data);
      alert("User Created and Logged In Successfully.");
      navigate("/")
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 409) {
        alert("User already exists with this email.");
      } else {
        alert("Something went wrong during signup.");
      }
    }
  };

  const logInRedirect = () => {
    navigate("/user/login");
  };

  return (
    <div className="SignUp">
      <h3>Craete New Accout at SAHK</h3>
      <form>
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="input"
          onChange={handleChange}
          value={userData.name}
          autoComplete="name"
        />

        <label htmlFor="image">Enter Image Link</label>
        <input
          type="file"
          name="image"
          id="image"
          className="input"
          onChange={handleChange}
          autoComplete="image"
        />

        <label htmlFor="email">Enter Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="input"
          onChange={handleChange}
          value={userData.email}
          autoComplete="email"
        />

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="input"
          onChange={handleChange}
          value={userData.password}
          autoComplete="password"
        />

        <button onClick={handleSubmit}>Craete New Account</button>
      </form>

      <button onClick={logInRedirect}> Have an Account </button>
    </div>
  );
};

export default SignUp;
