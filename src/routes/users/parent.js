import React from "react";
import { Route, Routes } from "react-router-dom";
// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { Dashboard, GradeRecord } from "../../pages/parent/LoggedInPage";
import { Login, SignUp } from "../../pages/parent/SignUpPage/Index";
// import LoggedInRoot from "../../pages/parent/LoggedInPage/LoggedInRoot";

// ? plugins
// import { useSelector } from "react-redux";
// const getisAuth = () => {
//   const storage = JSON.parse(localStorage.getItem("persist:authParent"));
//   return storage?.userInfo ? JSON.parse(storage.userInfo) : null;
// };

// const Auth = () => {
//   const auth = getisAuth();
//   const location = useLocation();

//   return auth ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/" state={{ from: location }} replace />
//   );
// };

// const UnAuthIFuel = () => {
//   const auth = getisAuth();
//   const location = useLocation();
//   return auth ? (
//     <Navigate to="/dashboard" state={{ from: location }} replace />
//   ) : (
//     <Outlet />
//   );
// };

const parentRoutes = () => {
  // const { userInfo } = useSelector((state) => state.loginSlice);
  // console.log(userInfo);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    // <>
    //   <Route element={<UnAuthIFuel />}>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/signup" element={<SignUp />} />
    //   </Route>

    //   <Route element={<Auth />}>
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/graderecord" element={<GradeRecord />} />
    //   </Route>
    // </>
  );
};

export default parentRoutes;
