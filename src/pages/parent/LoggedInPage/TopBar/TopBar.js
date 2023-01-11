import React from "react";
import { useSelector } from "react-redux";

// ? components
import { getCurrentPageName } from "../../../../helpers/Methods/CurrentPageName/GetCurrentPageName";
import { items } from "./dropDownMenu";
import { OnLogOut } from "../../../../helpers/Methods/OnLogOut/onLogOut";

// ? plugins
import { Layout, Avatar, Typography, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Text } = Typography;

const TopBar = ({ setFoldSider }) => {
  // TODO ----------------- STATE ---------------
  const { userInfo } = useSelector((state) => state.userAuthSlice);

  return (
    <Header
      className="flex justify-between items-center"
      style={{
        backgroundColor: "#0274BE",
        padding: 20,
        height: "8vh",
      }}>
      {/* minimize sidebar */}
      <div className="h-full flex justify-start items-center space-x-5">
        <MenuOutlined
          className="transition ease-in-out delay-100 duration-200 text-white text-lg cursor-pointer hover:text-iconHover"
          onClick={() => setFoldSider((prev) => !prev)}
        />
        <Text className="text-white font-bold text-lg">
          {getCurrentPageName()}
        </Text>
      </div>
      {/* avatar */}
      <Dropdown
        menu={{ items }}
        dropdownRender={(menu) => (
          <div className="flex flex-col bg-card p-2 drop-shadow-centered2 w-[200px] rounded-md space-y-2">
            {menu.props.items.map((i) => (
              <div
                className="p-2 rounded-md flex items-center justify-start space-x-3 cursor-pointer"
                key={i.key}
                onClick={OnLogOut}>
                <Text className="text-error">{i.icon}</Text>
                <Text className="text-error">{i.label}</Text>
              </div>
            ))}
          </div>
        )}>
        <Avatar
          className="transition ease-in-out delay-100 cursor-pointer hover:drop-shadow-centered1 hover:-translate-y-1"
          size="large">
          {userInfo.firstName[0]}
        </Avatar>
      </Dropdown>
    </Header>
  );
};

export default TopBar;
