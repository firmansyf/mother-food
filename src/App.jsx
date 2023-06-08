import "./App.css";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { createContext, useState, Suspense } from "react";
import Login from "./pages/auth/Login";
import Views from "./Views";

export const UserContext = createContext(null);
function App() {
  const [user, setUser] = useState({ loggedIn: false });

  console.log("Login successfuly ? : ", user.loggedIn);
  return (
    <>
      <Suspense fallback={"loading..."}>
        <UserContext.Provider value={{ user, setUser }}>
          {user.loggedIn === false ? <Login /> : <Views />}
        </UserContext.Provider>
      </Suspense>
    </>
  );
}

export default App;
