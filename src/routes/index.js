// ? components
import SignUpRoot from "../pages/parent/SignUpPage/SignUpRoot";
import LoggedInRoot from "../pages/parent/LoggedInPage/LoggedInRoot";

// ? plugins
// import { Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// import Notfound from "../pages/notfound/Notfound";
// import parentRoutes from "./users/parent";

const Routers = () => {
  const { token } = useSelector((state) => state.userAuthSlice);
  return (
    <div className="h-screen">
      {!token ? <SignUpRoot /> : <LoggedInRoot />}
      {/* <Routes>
         routes 
        {parentRoutes()}
        <Route path="*" element={<div>WALA PO</div>} />
      </Routes> */}
    </div>
  );
};

export default Routers;
