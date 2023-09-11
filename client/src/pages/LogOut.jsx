import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("user");
    navigate("/");
  }, [navigate]);

  return null;
};

export default LogOut;
