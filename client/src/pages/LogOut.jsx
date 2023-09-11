import { useEffect, useContext } from "react";
import AppContext from "../context/app-context";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);

  useEffect(() => {
    // localStorage.setItem("user", "");
    logout();
    navigate("/");
  }, [navigate]);

  return null;
};

export default LogOut;
