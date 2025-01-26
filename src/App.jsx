import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { login } from "./store/authSlice";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import  Header  from "./components/Header/Header";
import Footer  from "./components/Footer/Footer"

=======
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Spinner } from "react-bootstrap";
>>>>>>> 6290b60f8524fee02990f81ae6bcd93b04927cdc
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log("here", userData);
          dispatch(login({ userData }));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner animation="border" role="status" className="text-blue-500">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
