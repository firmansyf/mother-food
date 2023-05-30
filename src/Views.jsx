import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/home";
import NavMobile from "./components/NavMobile";
import Footer from "./components/Footer";
// import ProtectedRoute from "./ProtectedRoute";

export default function Views() {
  const data = [
    { path: "/", element: <Index /> },
    { path: "/product", element: <h1 className="">Testing</h1> },
    { path: "/cousine", element: "Ok" },
    { path: "/about", element: "Hhh" },
  ];
  return (
    <>
      <div className="mb-4 relative">
        <Navbar />
      </div>
      <NavMobile />

      <Routes>
        {/* <Route element={<ProtectedRoute />} /> */}
        {data.map(({ path, element }, i) => {
          return <Route key={i} path={path} element={element} />;
        })}
      </Routes>

      <Footer />
    </>
  );
}
