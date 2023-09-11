import { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log({ isLoggedIn });
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Dashboard Dashboard />
      )}
    </>
  );
}

export default App;
