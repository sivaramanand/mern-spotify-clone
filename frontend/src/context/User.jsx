import {
  createContext,
  useState,
  useContext,
  Children,
  useEffect,
} from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setbtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  async function registerUser(name, email, password, navigate) {
    setbtnLoading(true);
    try {
      const { data } = await axios.post("/api/user/register", {
        name,
        email,
        password,
      });
      toast.success(data.message);
      setUser(data.user);
      setIsAuth(true);
      setbtnLoading(false);
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.message);
      setbtnLoading(false);
    }
  }

  async function fetchUser() {
    try {
      const { data } = await axios.get("/api/user/me");
      setUser(data);
      setIsAuth(true);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setIsAuth(false);
      setLoading(false);
    }
  }

  async function loginUser(email, password, navigate, fetchSongs, fetchAlbums) {
    setbtnLoading(true);
    try {
      const { data } = await axios.post("/api/user/login", {
        email,
        password,
      });

      toast.success(data.message);
      setUser(data.user);
      setIsAuth(true);
      setbtnLoading(false);
      navigate("/");
      console.log(isAuth);
    } catch (error) {
      toast.error("invalid credentials");
      setbtnLoading(false);
    }
  }
  async function logoutUser() {
    try {
      const { data } = await axios.get("/api/user/logout");

      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        registerUser,
        user,
        isAuth,
        btnLoading,
        loading,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
