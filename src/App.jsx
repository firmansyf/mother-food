import "./App.css";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { createContext, useState } from "react";
import Login from "./pages/auth/Login";
import Views from "./Views";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });

  console.log("is_user :", user);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {user.loggedIn === false ? <Login /> : <Views />}
      </UserContext.Provider>
    </>
  );
}

export default App;
