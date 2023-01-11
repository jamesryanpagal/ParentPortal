import React from "react";

// ? plugins
import { Layout, Typography, Button } from "antd";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
const { Text } = Typography;

const Header = ({ toggleEdit, setToggleEdit }) => {
  return (
    <Layout.Header
      className="flex justify-between items-center"
      style={{
        backgroundColor: "transparent",
        height: "8%",
        padding: "20px",
      }}>
      <Text className="text-lg text-buttonBlue1 font-bold">Profile</Text>
      <Button
        onClick={() => setToggleEdit((prev) => !prev)}
        type="primary"
        danger={!toggleEdit ? true : false}
        icon={!toggleEdit ? <CloseOutlined /> : <EditOutlined />}>
        {toggleEdit ? "Edit" : "Cancel"}
      </Button>
    </Layout.Header>
  );
};

export default Header;
