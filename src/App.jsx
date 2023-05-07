import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Navbar from "./components/Navbar";
import Index from "./pages/home";
import NavMobile from "./components/NavMobile";

const data = [
  { path: "/", element: <Index /> },
  { path: "/product", element: <h1 className="">Testing</h1> },
  { path: "/cousine", element: "Ok" },
  { path: "/about", element: "Hhh" },
];

function App() {
  return (
    <>
      <Router>
        <div className="mb-4 relative">
          <Navbar />
          <div className="w-full lg:hidden sm:hidden flex items-center relative shadow-sm border-0 py-1.5 pl-2 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6">
            <span className="text-gray-500 mr-2 sm:text-sm">
              <MagnifyingGlassIcon
                className="flex h-5 w-5"
                aria-hidden="true"
              />
            </span>

            <input
              type="text"
              name="search"
              id="price"
              className="block w-full outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="">
          <NavMobile />
        </div>
        <Routes>
          {data.map(({ path, element }, i) => {
            return <Route key={i} path={path} element={element} />;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
