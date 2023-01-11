// ? plugins
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

// TODO item
const getItem = (label, key, icon, children, type) => {
  return { label, key, icon, children, type };
};

// TODO items
export const items = [
  getItem(<Link to="/">Dashboard</Link>, "/dashboard", <AppstoreOutlined />),
  getItem(
    <Link to="/graderecords">Grade Records</Link>,
    "/graderecords",
    <PieChartOutlined />
  ),
  getItem(<Link to="users">Users</Link>, "/users", <UserOutlined />),
];
