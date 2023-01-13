import React from "react";

// ? components
import DashboardSider from "./DashboardSider";
import Content from "./Content/Content";

// ? plugins
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  // TODO ------------- STATE ---------------
  const { subjects, subjectsLoading } = useSelector(
    (state) => state.dashboardSlice
  );
  const outletContext = useOutletContext();

  return (
    <div className="h-[92vh] p-5 flex justify-between items-center space-x-5">
      {/* sider */}
      <Layout className="w-[23%] h-full bg-card rounded-lg drop-shadow-md overflow-hidden">
        <DashboardSider
          subjects={subjects}
          subjectsLoading={subjectsLoading}
          subjectLinks={outletContext.subjectLinks}
        />
      </Layout>
      {/* content */}
      <Content />
    </div>
  );
};

export default Dashboard;
