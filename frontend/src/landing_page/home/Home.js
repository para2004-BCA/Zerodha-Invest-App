import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) return navigate("/login");
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/login`,
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        setUsername(user);
        if (!status) {
          removeCookie("token");
          navigate("/login");
        } else {
          toast(`Hello ${user}`, { position: "top-right" });
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;