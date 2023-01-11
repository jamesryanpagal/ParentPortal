import React, { useState } from "react";

// ? components
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";

// ? plugins
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;

const Container = () => {
  // TODO -------------- state ----------------
  const [foldSider, setFoldSider] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  return (
    <Layout className="h-full bg-transparent">
      <SideBar
        foldSider={foldSider}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Content>
        <TopBar setFoldSider={setFoldSider} />
        <Content className="h-[92vh] overflow-auto">
          <Outlet />
        </Content>
      </Content>
    </Layout>
  );
};

export default Container;
