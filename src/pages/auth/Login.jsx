import { UserIcon, KeyIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/icon/brand-logo.png";
import { UserContext } from "../../App";
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location :", location);
  const { user, setUser } = useContext(UserContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const res = { ...form };
    res[e.target.name] = e.target.value;
    setForm(res);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (form.username === "yusuf" && form.password === "firmansyah") {
      // if (user.loggedIn) {
      setUser({ loggedIn: true });
      // }
    }

    if (user) {
      navigate(location.pathname);
    }
  };

  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center">
        <form onSubmit={handleOnSubmit}>
          <div className="flex flex-col items-center w-92 p-7 h-50 shadow-md rounded-md">
            <div className="flex flex-col items-center">
              <img
                src={logo}
                className="h-24 w-24 rounded-xl border-2"
                alt="brand-logo"
              />
              <span className="text-sm text-center mt-3 text-slate-400">
                Platform Makanan Terpercaya di Indonesia
              </span>

              <div className="bg-green-200 flex flex-col mt-3 p-2 rounded-md">
                <span className="text-xs font-normal">Username : Yusuf</span>
                <span className="text-xs font-normal">
                  Password : Firmansyah
                </span>
              </div>
            </div>

            <div className="mt-5">
              <div className="username flex border-2 p-2 mb-3 rounded-md items-center justify-center">
                <UserIcon
                  className="h-5 w-5 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  autoComplete="off"
                  value={form.username}
                  className="ml-1 text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="password flex border-2 p-2 rounded-md">
                <KeyIcon
                  className="h-5 w-5 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Password"
                  className="ml-1 text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex p-2 mt-7 border-t-2 w-full justify-center">
              <button
                className="tombol flex bg-green-500 w-28 h-9 items-center rounded-md justify-center"
                type="submit"
              >
                <span className="text-sm text-white">Sign In</span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
