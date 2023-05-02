import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

const data = [
  { path: "/", element: <h1 className="">Home</h1> },
  { path: "/product", element: <h1 className="">Testing</h1> },
  { path: "/cousine", element: "Ok" },
  { path: "/about", element: "Hhh" },
];

function App() {
  return (
    <>
      <Router>
        <div className="mb-10">
          <Navbar />
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
