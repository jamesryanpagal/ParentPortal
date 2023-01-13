// ? components
import ParentRoutes from "./users/parent";

// ? plugins
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <div className="h-screen">
      <Routes>
        {ParentRoutes()}
        <Route path="*" element={<div>404 not found!</div>} />
      </Routes>
    </div>
  );
};

export default Routers;
