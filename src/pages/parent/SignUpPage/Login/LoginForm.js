import React from "react";

// ? plugins
import { Input, Button, Spin, Typography, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../../../../store/slices/auth/userAuthSlice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const { Text } = Typography;

const LoginForm = () => {
  // TODO --------------- STATE ----------------
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { loginLoading } = useSelector((state) => state.userAuthSlice);

  return (
    <Form
      className="px-[50px]"
      name="loginForm"
      layout="vertical"
      form={form}
      onFinish={(e) => dispatch(login(e))}>
      {/* username */}
      <Form.Item
        name="username"
        className="mb-7"
        rules={[{ required: true, message: "Username is required" }]}>
        <Input
          className="bg-inputField"
          size="large"
          prefix={<UserOutlined />}
          placeholder="Email"
        />
      </Form.Item>

      {/* password */}
      <Form.Item
        name="password"
        className="mt-5 mb-0"
        rules={[{ required: true, message: "Password is required" }]}>
        <Input.Password
          className="bg-inputField relative"
          size="large"
          prefix={<LockOutlined />}
          placeholder="Password"
        />
      </Form.Item>

      {/* forgot password */}
      <Form.Item className="mb-5 text-end">
        <Link to="/">Forgot Password?</Link>
      </Form.Item>

      {/* submit button */}
      <Form.Item className="mb-3 flex justify-center">
        <Button
          disabled={loginLoading}
          className="h-[6vh] w-[15vw] bg-buttonBlue1 text-white"
          htmlType="submit">
          {loginLoading ? <Spin size="default" /> : "Login"}
        </Button>
      </Form.Item>

      {/* create account */}
      <Form.Item className="text-center my-0">
        <Text level={5}>
          Don't have an account?{" "}
          <Link to="/Signup" className="mx-0 my-0 p-0 visited:text-purple-600">
            Sign Up!
          </Link>
        </Text>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
