import React from "react";

// ? components
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

// ? plugins
import { Routes, Route } from "react-router-dom";

const SignUpRoot = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="*" element={<>Page not found!</>} />
      </Routes>
    </>
  );
};

export default SignUpRoot;
