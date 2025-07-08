import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL; // ✅ use env variable

const ProtectedDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.post(
          `${BACKEND_URL}/login`,
          {},
          { withCredentials: true }
        );

        if (res.data.status) {
          setAuthenticated(true);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error("Auth error:", err);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [navigate]);

  if (isLoading) return <h3>Loading...</h3>;

  return authenticated ? <Home /> : null;
};

export default ProtectedDashboard;
