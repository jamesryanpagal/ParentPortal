import React, { useState } from "react";

// ? components
import {
  OnCalculateUserAge,
  OnValidatePassword,
} from "../../../../helpers/Methods/Signup/SignUp";
import { signUp } from "../../../../store/slices/auth/userAuthSlice";
import {
  regExp_Names,
  regExp_Password,
  regExp_MobileNumber,
  regExp_Username,
  regExp_StudentId,
  regExp_Email,
} from "../../../../helpers/regex";
import Extra from "./Extra";

// ? plugins
import {
  Input,
  DatePicker,
  Button,
  InputNumber,
  Typography,
  Select,
  Form,
  Spin,
} from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
const { Text } = Typography;
const { Option } = Select;

const SignUpForm = () => {
  // TODO ----------------- STATE ---------------
  const [ageValue, setAgeValue] = useState(0);
  const [passwordValidation, setPasswordValidation] = useState({
    validation1: false,
    validation2: false,
    validation3: false,
    validation4: false,
  });
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.userAuthSlice);
  // TODO ------------- USEEFFECT -----------------

  return (
    <Form
      form={form}
      onFinish={(e) =>
        dispatch(
          signUp({
            ...e,
            gender: e.gender === "Male" ? 0 : 1,
            birthdate: moment(e.birthdate.$d).format("YYYY-MM-DD"),
            mobileNumber: `0${e.mobileNumber}`,
          })
        )
      }
      name="signUpForm"
      className="flex justify-between mt-5 relative"
      layout="vertical">
      {/* form column 1 */}
      <div className="w-[48%]">
        <Form.Item
          className="mb-3"
          name="firstName"
          hasFeedback
          label={<Text className="text-sm opacity-50">First name</Text>}
          rules={[
            {
              required: true,
              message: "First name is invalid!",
              pattern: regExp_Names,
            },
          ]}>
          <Input className="m-0" name="firstName" size="large" />
        </Form.Item>

        <Form.Item
          className="mb-3"
          name="middleName"
          hasFeedback
          label={<Text className="text-sm opacity-50">Middle name</Text>}
          rules={[
            {
              message: "Middle name is invalid!",
              pattern: regExp_Names,
            },
          ]}>
          <Input className="m-0" name="middleName" size="large" />
        </Form.Item>

        <Form.Item
          className="mb-3"
          name="lastName"
          hasFeedback
          label={<Text className="text-sm opacity-50">Last name</Text>}
          rules={[
            {
              required: true,
              message: "Last name is invalid!",
              pattern: regExp_Names,
            },
          ]}>
          <Input className="m-0" name="lastName" size="large" />
        </Form.Item>

        <Form.Item
          className="mb-3"
          name="birthdate"
          hasFeedback
          label={<Text className="text-sm opacity-50">Birthday</Text>}
          rules={[
            {
              required: true,
              message: "Birthday is invalid!",
            },
          ]}>
          <DatePicker
            format={"DD-MM-YYYY"}
            className="m-0 bg-inputField w-[100%]"
            name="birthdate"
            size="large"
            placeholder="MM-DD-YYYY"
            onBlur={(e) => OnCalculateUserAge(e.target.value, setAgeValue)}
          />
        </Form.Item>

        <div className="flex justify-between items-center">
          <div className="mb-3 w-[48%]">
            <div className="mb-2 opacity-50">
              <Text>Age</Text>
            </div>
            <InputNumber
              className="m-0 bg-inputField w-[100%]"
              disabled
              controls={false}
              size="large"
              value={ageValue > 0 && ageValue}
            />
          </div>

          <Form.Item
            className="mb-3 w-[48%]"
            name="gender"
            label={<Text className="text-sm opacity-50">Gender</Text>}
            initialValue="Male">
            <Select className="m-0" size="large">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
        </div>
      </div>

      {/* form column 2 */}
      <div className="w-[48%]">
        <Form.Item
          className="mb-3"
          name="studentId"
          hasFeedback
          label={<Text className="text-sm opacity-50">Student Id</Text>}
          rules={[
            {
              required: true,
              message: "Student id is invalid!",
              pattern: regExp_StudentId,
            },
          ]}>
          <Input
            className="m-0 bg-inputField w-full"
            controls={false}
            name="studentId"
            size="large"
          />
        </Form.Item>

        <Form.Item
          className="mb-3"
          name="username"
          hasFeedback
          label={<Text className="text-sm opacity-50">Username</Text>}
          rules={[
            {
              required: true,
              message: "Username is invalid!",
              pattern: regExp_Username,
            },
          ]}>
          <Input className="m-0 bg-inputField" name="username" size="large" />
        </Form.Item>

        <Form.Item
          className="mb-3"
          name="mobileNumber"
          hasFeedback
          label={<Text className="text-sm opacity-50">Mobile number</Text>}
          rules={[
            {
              required: true,
              message: "Mobile number is invalid",
              pattern: regExp_MobileNumber,
            },
          ]}>
          <InputNumber
            addonBefore="+63"
            maxLength={10}
            className="w-full bg-inputField"
            size="large"
            name="mobileNumber"
            controls={false}
          />
        </Form.Item>

        <Form.Item
          className="mb-3"
          name="email"
          hasFeedback
          label={<Text className="text-sm opacity-50">Email</Text>}
          rules={[
            {
              required: true,
              message: "Email is invalid!",
              pattern: regExp_Email,
            },
          ]}>
          <Input size="large" name="email" />
        </Form.Item>

        {/* password container */}
        <div className="flex pb-0 h-[82px] space-x-3">
          <Form.Item
            className="mb-3"
            name="password"
            hasFeedback
            label={<Text className="text-sm opacity-50">Password</Text>}
            extra={
              Object.values(passwordValidation).every(
                (p) => p === false
              ) ? null : (
                <Extra passwordValidation={passwordValidation} />
              )
            }
            rules={[
              {
                required: true,
                message: "",
                pattern: regExp_Password,
              },
            ]}>
            <Input.Password
              className="m-0 bg-inputField"
              size="large"
              name="password"
              onChange={(e) =>
                OnValidatePassword(e.target.value, setPasswordValidation)
              }
            />
          </Form.Item>

          <Form.Item
            className="mb-3"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            label={<Text className="text-sm opacity-50">Confirm password</Text>}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}>
            <Input.Password className="bg-inputField" size="large" />
          </Form.Item>
        </div>
      </div>

      {/* form submit button */}
      <Form.Item className="absolute bottom-[-40%] left-0">
        <Button
          className="bg-buttonBlue1 h-[5vh] w-[15vw] mb-3"
          disabled={signUpLoading}
          htmlType="submit">
          <Text className="flex justify-center items-center text-card">
            {signUpLoading ? <Spin size="default" /> : "Create account"}
          </Text>
        </Button>
        {/* Login link */}
        <div className="text-center">
          <Text>
            Already have an account?{" "}
            <Link to="/login" className="mx-0 my-0 p-0 visited:text-purple-600">
              Login
            </Link>
          </Text>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
