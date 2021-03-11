import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token, history]);

  return token;
};

export default useAuth;
