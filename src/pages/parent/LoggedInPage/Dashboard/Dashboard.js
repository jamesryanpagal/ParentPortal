import React from "react";

// ? components
import DashboardSider from "./DashboardSider";
import Content from "./Content/Content";

// ? plugins
import { Layout } from "antd";

const Dashboard = ({ subjects, subjectsLoading, subjectLinks }) => {
  return (
    <div className="h-[92vh] p-5 flex justify-between items-center space-x-5">
      {/* sider */}
      <Layout className="w-[23%] h-full bg-card rounded-lg drop-shadow-md overflow-hidden">
        <DashboardSider
          subjects={subjects}
          subjectsLoading={subjectsLoading}
          subjectLinks={subjectLinks}
        />
      </Layout>
      {/* content */}
      <Content />
    </div>
  );
};

export default Dashboard;
