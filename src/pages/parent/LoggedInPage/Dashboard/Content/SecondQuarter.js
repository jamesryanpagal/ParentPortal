import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// ? plugins
import { Typography, Select, Spin } from "antd";
import { Line } from "@ant-design/plots";
const { Text } = Typography;
const { Option } = Select;

const SecondQuarter = ({ topicIndex, setTopicIndex }) => {
  // TODO ------------ STATE ---------------
  const { secondQuarterLoading, quarters } = useSelector(
    (state) => state.dashboardSlice
  );

  // TODO ---------- USEEFFECT -------------
  useEffect(() => {
    if (secondQuarterLoading) {
      setTopicIndex((prev) => ({ ...prev, secondQuarter: 0 }));
    }
  }, [secondQuarterLoading, setTopicIndex]);

  return (
    <div className="bg-card rounded-md drop-shadow-md px-5 py-3 relative">
      {quarters.second.length > 0 && !secondQuarterLoading ? (
        <div className="flex flex-col space-y-2 h-full">
          {/* title */}
          <div className="space-y-1 h-[25%]">
            <Text className="text-buttonBlue1 font-bold">Second Quarter</Text>
            <div className="flex justify-between items-center">
              <Text className="font-bold">Topic</Text>
              <Select
                className="w-[80%]"
                defaultValue={topicIndex.secondQuarter}
                onChange={(e) =>
                  setTopicIndex((prev) => ({ ...prev, secondQuarter: e }))
                }>
                {quarters.second.map((q, i) => (
                  <Option key={i} value={i}>
                    {q.title}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          {/* chart */}
          <Line
            data={quarters.second[topicIndex.secondQuarter].modules}
            xField="activityType"
            yField="score"
          />
        </div>
      ) : (
        <Spin
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          size="default"
        />
      )}
    </div>
  );
};

export default SecondQuarter;
