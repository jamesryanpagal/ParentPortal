import React, { useEffect, useState } from "react";

// ? components
import Subject from "./Subject";
import { getGradeRecords } from "../../../../store/slices/gradeRecords/gradeRecordSlice";
import Header from "./Header";
import Footer from "./Footer";

// ? plugins
import { Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";

const GradeRecord = () => {
  // TODO ----------------- STATE -------------------
  const [finalGradeAverage, setFinalGradeAverage] = useState(0);
  const { userInfo } = useSelector((state) => state.userAuthSlice);
  const { isLoading, gradeList } = useSelector(
    (state) => state.gradeRecordsSlice
  );
  const dispatch = useDispatch();

  // TODO ----------------- EFFECT -------------------
  useEffect(() => {
    gradeList.length === 0 &&
      dispatch(getGradeRecords({ studentId: userInfo.studentId }));
  }, [dispatch, userInfo.studentId, gradeList]);

  return (
    <div className="h-[92vh] p-5 overflow-hidden">
      <div className="flex flex-col rounded-lg drop-shadow-md bg-card h-full">
        {/* header */}
        <Header finalGradeAverage={finalGradeAverage} />
        {/* grades container */}
        <div className="h-[65%] bg-inputField grid grid-flow-row-dense gap-10 grid-cols-2 p-5 overflow-auto relative">
          {isLoading ? (
            <Spin
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              size="large"
              tip="Loading subjects..."
            />
          ) : (
            gradeList.map((subject, i, arr) => (
              <Subject
                key={subject.subjectId}
                title={subject.subjectName}
                teacherName={`${subject.teacherFirstName} ${subject.teacherLastName}`}
                date={`${moment().date()}/${
                  moment().month() + 1
                }/${moment().year()}`}
                dataSource={subject.module}
                subjects={arr}
                setFinalGradeAverage={setFinalGradeAverage}
              />
            ))
          )}
        </div>
        {/* grading system */}
        <Footer />
      </div>
    </div>
  );
};

export default GradeRecord;
