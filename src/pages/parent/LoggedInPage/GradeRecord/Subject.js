import React, { useEffect } from "react";

// ? components
import { columns } from "../../../../helpers/Methods/TableData/Subjects/TableSubjects";
import {
  DataSource,
  finalGrade,
  finalAverageValue,
} from "../../../../helpers/Methods/TableData/Subjects/TableSubjects";

// ? plugins
import { Layout, Typography, Table } from "antd";
const { Header } = Layout;
const { Text } = Typography;

const Subject = ({
  title,
  teacherName,
  date,
  dataSource,
  subjects,
  setFinalGradeAverage,
}) => {
  // TODO ----------------- EFFECT -------------------
  useEffect(() => {
    setFinalGradeAverage(finalAverageValue);
  }, [setFinalGradeAverage]);

  return (
    <div className="h-[230px] rounded-lg bg-white flex flex-col drop-shadow-md overflow-hidden">
      <Header style={{ backgroundColor: "#E8E9EF", height: "50px" }}>
        <div className="h-full p-0 flex flex-col justify-center">
          <Text className="font-bold text-lg ">{title}</Text>
          <div className=" p-0 flex w-[50%] space-x-5">
            <Text className="text-[10px] ">{teacherName}</Text>
            <Text className="text-[10px] ">{date}</Text>
          </div>
        </div>
      </Header>
      <Table
        columns={columns}
        dataSource={DataSource(dataSource, subjects)}
        pagination={false}
        className="flex-1"
      />
      <div className="h-[50px] flex justify-between items-center px-10">
        <Text className="font-extrabold text-buttonBlue1">Final Grade: </Text>
        <Text className="font-extrabold text-buttonBlue1">{finalGrade}</Text>
      </div>
    </div>
  );
};

export default Subject;
