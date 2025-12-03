import React, { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Welcomepage from "./page/Welcomepage";
import Home from "./page/home";
import Auth from "./page/auth";
import handleAuthProtection from "./utils/handleAuthProtection";
import AuthProtection from "./page/authProtection";
import CreateForm from "./page/createForm";
const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    function authenticate() {
      setAuthenticated(handleAuthProtection());
    }
    authenticate();
  }, []);

  return (
    <>
      {/* <div className="bg-amber-200">app</div>{" "} */}
      <main>
        <Routes>
          <Route path="/" element={<Welcomepage />} />{" "}
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <AuthProtection />}
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/formCreation" element={<CreateForm />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
