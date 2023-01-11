import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// ? components
import { Menu, Skeleton, Typography } from "antd";
const { Text } = Typography;

const DashboardSider = ({ subjects, subjectsLoading, subjectLinks }) => {
  // TODO ------------ STATE --------------
  const { subjectId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col px-5 py-3 space-y-1">
        <Text className="text-buttonBlue1 font-bold text-lg">Subjects</Text>
        <Text className="font-bold text-base opacity-50">
          {subjects.length} Total
        </Text>
      </div>
      <Skeleton loading={subjectsLoading} className="p-[20px]">
        <Menu
          className="px-3"
          defaultSelectedKeys={[subjectId]}
          mode="vertical"
          items={subjectLinks}
          onClick={(e) => navigate("/dashboard/" + e.key)}
        />
      </Skeleton>
    </div>
  );
};

export default DashboardSider;
