import React from "react";

// ? plugins
import { Typography } from "antd";
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
const { Text } = Typography;

const Extra = ({ passwordValidation }) => {
  return (
    <div className="py-3 flex flex-col space-y-2">
      {/* 1 */}
      <div className="flex justify-between px-2">
        <Text
          className="text-[10px] opacity-80"
          style={{
            color: passwordValidation.validation1 ? "#007f5f" : "#e63946",
          }}>
          Contains upper or lowercase letter
        </Text>
        {passwordValidation.validation1 ? (
          <CheckCircleOutlined className="text-success" />
        ) : (
          <ExclamationCircleOutlined className="text-error" />
        )}
      </div>
      {/* 2 */}
      <div className="flex justify-between px-2">
        <Text
          className="text-[10px] opacity-80"
          style={{
            color: passwordValidation.validation2 ? " #007f5f" : "#e63946",
          }}>
          Contains number/s
        </Text>
        {passwordValidation.validation2 ? (
          <CheckCircleOutlined className="text-success" />
        ) : (
          <ExclamationCircleOutlined className="text-error" />
        )}
      </div>
      {/* 3 */}
      <div className="flex justify-between px-2">
        <Text
          className="text-[10px] opacity-80"
          style={{
            color: passwordValidation.validation3 ? "#007f5f" : "#e63946",
          }}>
          Contains special character/s
        </Text>
        {passwordValidation.validation3 ? (
          <CheckCircleOutlined className="text-success" />
        ) : (
          <ExclamationCircleOutlined className="text-error" />
        )}
      </div>
      {/* 4 */}
      <div className="flex justify-between px-2">
        <Text
          className="text-[10px] opacity-80"
          style={{
            color: passwordValidation.validation4 ? "#007f5f" : "#e63946",
          }}>
          Length must be 6 or higher
        </Text>
        {passwordValidation.validation4 ? (
          <CheckCircleOutlined className="text-success" />
        ) : (
          <ExclamationCircleOutlined className="text-error" />
        )}
      </div>
    </div>
  );
};

export default Extra;
