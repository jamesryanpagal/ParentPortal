import React from "react";

// ? components
import LoginForm from "./LoginForm";

// ? assets
import LoginLogo from "../../../../assets/Images/Login/LoginLogo.png";

// ? plugin
import { Typography, Layout } from "antd";
const { Title } = Typography;

const Login = () => {
  return (
    <Layout className="h-screen bg-backgroundBlue flex justify-center items-center">
      {/* login card */}
      <div className="bg-card h-3/4 w-[30%] rounded-lg drop-shadow-xl flex flex-col">
        {/* logo container */}
        <div className="flex flex-col justify-center items-center pt-10 pb-3">
          <img alt="" src={LoginLogo} className="h-[180px]" />
          <Title level={5}>Login to you account</Title>
        </div>

        {/* form field */}
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;
