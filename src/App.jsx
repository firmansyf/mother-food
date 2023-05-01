import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

const data = [
  { path: "/product", element: <h1>Testing</h1> },
  { path: "/category", element: "Okey" },
  { path: "/cousine", element: "Ok" },
  { path: "/about", element: "Hhh" },
];

function App() {
  return (
    <>
      <Router>
        <Navbar />
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
