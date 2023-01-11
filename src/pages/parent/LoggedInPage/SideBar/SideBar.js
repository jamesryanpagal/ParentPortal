import React from "react";

// ? components
import { items } from "../../../../helpers/Methods/Sider/Sider";
import {
  setCurrentPageName,
  getHighLightPageLink,
} from "../../../../helpers/Methods/CurrentPageName/GetCurrentPageName";

// ? assets
import LogoWithoutText from "../../../../assets/Images/Dashboard/Small/LogoWithoutText.png";
import LoginLogo from "../../../../assets/Images/Login/LoginLogo.png";

// ? plugins
import { Menu, Layout } from "antd";
const { Sider } = Layout;

console.log(getHighLightPageLink());

const SideBar = ({ foldSider, setCurrentPage, currentPage }) => {
  return (
    <Sider
      width={"18%"}
      style={{ backgroundColor: "white" }}
      collapsed={foldSider}>
      {/* logo */}
      <div className="flex justify-center items-center mt-5">
        <img
          alt=""
          style={{ height: foldSider ? "50px" : "100px" }}
          src={foldSider ? LogoWithoutText : LoginLogo}
        />
      </div>
      {/* menu */}
      <div className="mt-5">
        <Menu
          className="px-3"
          mode="vertical"
          defaultSelectedKeys={[
            `${
              currentPage === ""
                ? getHighLightPageLink() === "/"
                  ? "/dashboard"
                  : getHighLightPageLink()
                : currentPage
            }`,
          ]}
          items={items}
          onClick={() => setCurrentPageName(setCurrentPage)}
        />
      </div>
    </Sider>
  );
};

export default SideBar;
