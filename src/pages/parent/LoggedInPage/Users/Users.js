import React, { useState } from "react";

// ? components
import Header from "./Header";
import Details from "./Details";

// ? plugins
import { Layout } from "antd";
const { Content } = Layout;

const Users = () => {
  // TODO ------------ STATE ------------
  const [toggleEdit, setToggleEdit] = useState(true);

  return (
    <Layout className="h-full bg-transparent p-5">
      <Content className="rounded-md drop-shadow-md bg-white relative">
        {/* header */}
        <Header toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
        {/* user details */}
        <Details toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
      </Content>
    </Layout>
  );
};

export default Users;
