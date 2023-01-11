import React from "react";

// ? plugins
import { Breadcrumb, Typography, Layout } from "antd";
const { Text } = Typography;

const Header = ({ finalGradeAverage }) => {
  return (
    <Layout.Header
      style={{ backgroundColor: "transparent" }}
      className="flex justify-between items-center h-[8%]">
      <Text className="text-buttonBlue1 text-lg font-bold">Grade Level</Text>
      {/* final average */}
      <div>
        <Breadcrumb>
          <Breadcrumb.Item className="font-bold">
            Average Grade:{" "}
          </Breadcrumb.Item>
          <Breadcrumb.Item className="font-bold">
            {finalGradeAverage}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Layout.Header>
  );
};

export default Header;
