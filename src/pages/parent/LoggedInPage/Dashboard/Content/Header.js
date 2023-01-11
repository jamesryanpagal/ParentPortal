import React from "react";
import { useSelector } from "react-redux";

// ? plugins
import { Divider, Typography, Skeleton } from "antd";
const { Text } = Typography;

const Header = () => {
  // TODO ----------- STATE ---------------
  const { childrenDetails } = useSelector(
    (state) => state.childrenProfileSlice
  );

  return (
    <div className="bg-card rounded-lg drop-shadow-md h-[15%] overflow-hidden flex flex-col">
      {/* sub header */}
      <div className="py-2 px-5">
        <Text className="text-buttonBlue1 font-bold text-[15px]">Student</Text>
      </div>
      <Divider plain className="m-0" />
      {/* header footer */}
      <div className="flex flex-1">
        <div className="flex-1 flex flex-col justify-center px-5 space-y-1">
          <Text className="text-buttonBlue1 font-bold">User ID</Text>
          {childrenDetails.length === 0 ? (
            <Skeleton active />
          ) : (
            <Text>{childrenDetails[0].studentId}</Text>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-center px-5 space-y-1">
          <div className="flex justify-start space-x-2 items-center">
            {childrenDetails.length === 0 ? (
              <Skeleton active />
            ) : (
              <>
                <Text className="text-buttonBlue1 font-bold">Name:</Text>
                <Text className="text-black text-[13px]">{`${childrenDetails[0].firstName} ${childrenDetails[0].middleName}. ${childrenDetails[0].lastName}`}</Text>
              </>
            )}
          </div>
          <div className="flex justify-start space-x-2 items-center">
            {childrenDetails.length === 0 ? (
              <Skeleton active />
            ) : (
              <>
                <Text className="text-buttonBlue1 font-bold">Grade:</Text>
                <Text className="text-black text-[13px]">
                  {childrenDetails[0].gradeLevel}
                </Text>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
