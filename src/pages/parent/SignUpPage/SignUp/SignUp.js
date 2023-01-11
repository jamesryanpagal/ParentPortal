import React from "react";

// ? components
import SignUpForm from "./SignUpForm";

// ? assets
import SignUpLogo from "../../../../assets/Images/SignUp/SignUpLogo.png";
import LoginLogo from "../../../../assets/Images/Dashboard/Small/LogoWithoutText.png";

// ? plugins
import { Layout, Typography } from "antd";

const { Title } = Typography;

const SignUp = () => {
  return (
    <Layout>
      <div className="h-screen flex">
        {/* signup image */}
        <div className="w-[25%] bg-backgroundBlue relative">
          <img
            alt=""
            src={SignUpLogo}
            className="absolute bottom-0 left-[50%] translate-x-[-50%] h-[70%]"
          />
        </div>

        {/* signup form */}
        <div className="w-[75%]">
          {/* mini logo */}
          <div className="p-5 flex justify-end h-[10%] items-center">
            <img alt="" src={LoginLogo} className="h-10" />
          </div>

          {/* form */}
          <div className="h-[90%] px-[10%] py-3 overflow-auto">
            {/* title */}
            <Title level={2}>Register</Title>

            {/* form container */}
            <SignUpForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
