import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// ? components
import { updateUsersDetails } from "../../../../store/slices/auth/userAuthSlice";

// ? plugins
import {
  Layout,
  Avatar,
  Input,
  Select,
  InputNumber,
  Form,
  DatePicker,
  Typography,
  Button,
  Spin,
} from "antd";
import {
  regExp_Names,
  regExp_MobileNumber,
  regExp_Email,
} from "../../../../helpers/regex";
import moment from "moment";
const { Text } = Typography;
const { Option } = Select;

const Details = ({ toggleEdit, setToggleEdit }) => {
  //  TODO ----------------- STATE -----------------
  const dispatch = useDispatch();
  const { userInfo, updateUserDetailsLoading } = useSelector(
    (state) => state.userAuthSlice
  );
  const [form] = Form.useForm();

  // TODO ----------------- USEEFFECT -------------------
  useEffect(() => {
    if (toggleEdit) {
      Object.keys(userInfo).map((key) => {
        if (form.getFieldValue(key)) {
          if (key === "birthdate") {
            form.setFieldValue(key, null);
          } else {
            form.setFieldValue(key, userInfo[key]);
          }
        }
        return key;
      });
      form.resetFields();
    }
  }, [form, toggleEdit, userInfo]);

  useEffect(() => {
    if (updateUserDetailsLoading) {
      setToggleEdit(true);
    }
  }, [updateUserDetailsLoading, setToggleEdit]);

  return (
    <Layout className="h-[92%] py-5 px-10">
      <div className="flex justify-between space-x-20">
        {/* image */}
        <Avatar
          shape="square"
          size="large"
          className="h-[200px] w-[200px] flex justify-center items-center">
          <Text className="text-[100px] text-white">
            {userInfo.firstName[0]}
          </Text>
        </Avatar>
        {/* details */}
        <div className="flex-1">
          <Form
            form={form}
            onFinish={(e) =>
              dispatch(
                updateUsersDetails({
                  ...e,
                  birthdate: moment(e.birthdate.$d).format("YYYY-MM-DD"),
                  mobileNumber: `0${e.mobileNumber}`,
                })
              )
            }
            className="flex space-x-10"
            layout="vertical">
            {/* group1 */}
            <div className="flex-1">
              <Form.Item
                name="firstName"
                label="First name"
                rules={[
                  {
                    required: true,
                    message: "First name is invalid!",
                    pattern: regExp_Names,
                  },
                ]}
                initialValue={userInfo.firstName}>
                <Input disabled={toggleEdit} name="firstName" size="large" />
              </Form.Item>
              <Form.Item
                name="middleName"
                label="Middle name"
                rules={[
                  {
                    message: "Middle name is invalid!",
                    pattern: regExp_Names,
                  },
                ]}
                initialValue={userInfo.middleName}>
                <Input disabled={toggleEdit} name="middleName" size="large" />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last name"
                rules={[
                  {
                    required: true,
                    message: "Last name is invalid!",
                    pattern: regExp_Names,
                  },
                ]}
                initialValue={userInfo.lastName}>
                <Input disabled={toggleEdit} name="lastName" size="large" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Email is invalid!",
                    pattern: regExp_Email,
                  },
                ]}
                initialValue={userInfo.email}>
                <Input disabled={toggleEdit} name="email" size="large" />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                initialValue={userInfo.gender}>
                <Select disabled={toggleEdit} size="large">
                  <Option value={0}>Male</Option>
                  <Option value={1}>Female</Option>
                </Select>
              </Form.Item>
            </div>
            {/* group2 */}
            <div className="flex-1">
              {!toggleEdit ? (
                <Form.Item
                  name="birthdate"
                  label="Birthday"
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
                  />
                </Form.Item>
              ) : (
                <Form.Item name="displayBday" label="Birthday">
                  <div
                    style={{ border: "1px #D9D9D9 solid" }}
                    className="h-10 rounded-lg flex justify-start items-center px-3 bg-inputField cursor-not-allowed">
                    <Text className="text-[17px]">
                      {moment(userInfo.birthdate).format("DD-MM-YYYY")}
                    </Text>
                  </div>
                </Form.Item>
              )}
              <Form.Item
                name="mobileNumber"
                label="Mobile Number"
                rules={[
                  {
                    required: true,
                    message: "Mobile number is invalid",
                    pattern: regExp_MobileNumber,
                  },
                ]}
                initialValue={userInfo.mobileNumber}>
                <InputNumber
                  addonBefore={"+63"}
                  maxLength={10}
                  controls={false}
                  className="w-full"
                  disabled={toggleEdit}
                  name="mobileNumber"
                  size="large"
                />
              </Form.Item>

              <div className="absolute bottom-5 left-[50%] translate-x-[-50%] w-[20%]">
                {!toggleEdit && (
                  <Button
                    disabled={updateUserDetailsLoading}
                    className="w-[100%] h-[40px]"
                    htmlType="submit"
                    type="primary">
                    {updateUserDetailsLoading ? <Spin /> : "Save"}
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
