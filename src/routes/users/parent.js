import React from "react";

// ? components
import Container from "../../pages/parent/LoggedInPage/Container";
import Dashboard from "../../pages/parent/LoggedInPage/Dashboard/Dashboard";
import GradeRecord from "../../pages/parent/LoggedInPage/GradeRecord/GradeRecord";
import Users from "../../pages/parent/LoggedInPage/Users/Users";
import Login from "../../pages/parent/SignUpPage/Login/Login";
import SignUp from "../../pages/parent/SignUpPage/SignUp/SignUp";

import { getAuthToken } from "../../helpers/getUser";

// ? plugins
import { Route, useLocation, Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const auth = getAuthToken("persist:userAuth");
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

const UnAuthIFuel = () => {
  const auth = getAuthToken("persist:userAuth");
  const location = useLocation();

  return auth ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

const ParentRoutes = () => {
  return (
    <>
      <Route element={<UnAuthIFuel />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<Auth />}>
        <Route path="/" element={<Container />}>
          <Route path="dashboard/:subjectId" element={<Dashboard />} />
          <Route path="graderecords" element={<GradeRecord />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route>
    </>
  );
};

export default ParentRoutes;
