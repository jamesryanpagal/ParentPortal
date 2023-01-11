import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// ? components
import {
  getFirstQuarters,
  getSecondQuarters,
  getThirdQuarters,
  getFourthQuarters,
} from "../../../../../store/slices/dashboard/dashboardSlice";
import FirstQuarter from "./FirstQuarter";
import SecondQuarter from "./SecondQuarter";
import ThirdQuarter from "./ThirdQuarter";
import FourthQuarter from "./FourthQuarter";

const Quarters = () => {
  // TODO ---------------- STATE -----------------
  const [topicIndex, setTopicIndex] = useState({
    firstQuarter: 0,
    secondQuarter: 0,
    thirdQuarter: 0,
    fourthQuarter: 0,
  });
  const { userInfo } = useSelector((state) => state.userAuthSlice);
  const dispatch = useDispatch();
  const { subjectId } = useParams();
  // TODO -------------- USEEFFECT ---------------
  useEffect(() => {
    dispatch(
      getFirstQuarters({ studentId: userInfo.studentId, subjectId, quarter: 1 })
    );
    dispatch(
      getSecondQuarters({
        studentId: userInfo.studentId,
        subjectId,
        quarter: 2,
      })
    );
    dispatch(
      getThirdQuarters({ studentId: userInfo.studentId, subjectId, quarter: 3 })
    );
    dispatch(
      getFourthQuarters({
        studentId: userInfo.studentId,
        subjectId,
        quarter: 4,
      })
    );
  }, [dispatch, subjectId, userInfo.studentId]);

  return (
    <div className="h-[85%] grid gap-4 grid-cols-2 grid-rows-2">
      <FirstQuarter topicIndex={topicIndex} setTopicIndex={setTopicIndex} />
      <SecondQuarter topicIndex={topicIndex} setTopicIndex={setTopicIndex} />
      <ThirdQuarter topicIndex={topicIndex} setTopicIndex={setTopicIndex} />
      <FourthQuarter topicIndex={topicIndex} setTopicIndex={setTopicIndex} />
    </div>
  );
};

export default Quarters;
