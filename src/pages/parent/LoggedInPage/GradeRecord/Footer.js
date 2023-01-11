import React from "react";

// ? plugins
import { Layout, Typography } from "antd";
import { StarOutlined } from "@ant-design/icons";
const { Text } = Typography;

const Footer = () => {
  return (
    <Layout.Footer
      style={{ padding: "10px 30px" }}
      className="flex flex-col justify-center flex-1">
      {/* title */}
      <Text className="font-bold text-buttonBlue1 text-lg p-0">
        Grading System
      </Text>
      {/* content */}
      <div className="flex mt-3">
        {/* left */}
        <div className="flex-1">
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>97.50 - 100% (1.00) Excellent</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>94.50 - 97.49% (1.25) Very Good</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>91.50 - 94.49% (1.50) Very Good</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>88.50 - 91.49% (1.75) Very Good</Text>
          </div>
        </div>
        {/* middle */}
        <div className="flex-1">
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>85.50 - 88.49% (2.00) Satisfactory</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>82.50 - 85.49% (2.25) Satisfactory</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>79.50 - 82.49% (2.50) Satisfactory</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>76.50 - 79.49% (2.75) Fair</Text>
          </div>
        </div>
        {/* right */}
        <div className="flex-1">
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>74.50 - 76.49% (2.00) Fair</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>Dropped (DRP) Official Dropped</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>Incomplete (INC) Incomplete Requirements</Text>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <StarOutlined />
            <Text>Below 74.79% (5.00) Failed</Text>
          </div>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
