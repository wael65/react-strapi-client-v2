import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("user", "");
    navigate("/");
  }, [navigate]);

  return null;
};

export default LogOut;
