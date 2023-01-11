import React from "react";

// ? components
import Header from "./Header";
import Quarters from "./Quarters";

// ? plugins
import { Layout } from "antd";

const Content = () => {
  return (
    <Layout.Content className="border-2 h-full w-[77%] flex flex-col space-y-5">
      {/* header */}
      <Header />
      {/* quarters */}
      <Quarters />
    </Layout.Content>
  );
};

export default Content;
