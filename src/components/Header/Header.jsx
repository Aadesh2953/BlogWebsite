import React from "react";
import { Container, Logo, Logout } from "../index";
import { useSelector } from "react-redux";
import { useNavigate,NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  let authStatus = useSelector((state) => state.status);
  // const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "My Posts",
      slug: "/your-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <div>
      <header className="py-3 shadow bg-gray-500">
        <Container>
          
          <nav className="flex">
            <div className="mr-4 ">
              <Link to="/">
                <Logo width="70px" />
              </Link>
              </div>
              <ul className="flex ml-auto">
                {navItems.map((item) => {
                  return item.active ? (
                    <li key={item.name}>
                      {/* <button
                        onClick={() => {
                          navigate(item.slug);
                        }}
                        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      >
                        {item.name}
                      </button> */}
                      <NavLink to={item.slug}
                       className={({ isActive }) =>
                        isActive
                          ? "inline-block px-6 py-2 bg-blue-500 text-white rounded-full"
                          : "inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      }
                      >{item.name}</NavLink>
                    </li>
                  ) : null;
                })}
              </ul>
              {authStatus && (
                <li>
                  <Logout/>
                </li>
              )} 
            
          </nav>
        </Container>
      </header>
    </div>
  );
}

export default Header;
