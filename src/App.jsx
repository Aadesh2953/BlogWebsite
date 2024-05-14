import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import  Header  from "./components/Header/Header";
import Footer  from "./components/Footer/Footer"

import "./App.css";
function App() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState();
  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } 
      })
      .finally(setloading(false));
  }, []);
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;
