import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// ? components
import Dashboard from "./Dashboard/Dashboard";
import GradeRecord from "./GradeRecord/GradeRecord";
import Users from "./Users/Users";
import Container from "./Container";
import { getCurrentPageLink } from "../../../helpers/Methods/CurrentPageName/GetCurrentPageName";
import { getSubjects } from "../../../store/slices/dashboard/dashboardSlice";
import { getChildren } from "../../../store/slices/childrenProfile/childrenProfileSlice";

// ? plugins
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;

const LoggedInRoot = () => {
  // TODO ----------------- STATE -----------------
  const [subjectLinks, setSubjectsLinks] = useState([]);
  const navigate = useNavigate();
  const { subjects, subjectsLoading } = useSelector(
    (state) => state.dashboardSlice
  );
  const { userInfo } = useSelector((state) => state.userAuthSlice);
  const dispatch = useDispatch();

  // TODO --------------- USEEFFECT ---------------
  // ? ALL API REQUEST START HERE FOR USER LOGGED IN
  // ! ADD API FOR GRADE RECORDS AND PASS IT AS A PROPS

  // * ------------ SUBJECSTS REQUEST --------------
  // * subjects request api
  useEffect(() => {
    dispatch(getSubjects({ studentId: userInfo.studentId }));
    dispatch(getChildren());
  }, [dispatch, userInfo.studentId]);

  // * create subject links
  useEffect(() => {
    if (subjectLinks.length < subjects.length) {
      subjects.map((s, i) =>
        setSubjectsLinks((prev) => [
          ...prev,
          {
            key: s.subjectId,
            label: s.name,
          },
        ])
      );
    }
  }, [subjects, subjectLinks]);

  // * set default link and parameter link
  useEffect(() => {
    if (getCurrentPageLink() === "/" && subjects.length > 0) {
      navigate("/dashboard/" + subjects[0].subjectId);
    }
  }, [navigate, subjects]);
  // * ----------------------------------------------

  return (
    <Layout className="h-full bg-landingPageBackground">
      <Content>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route
              path="dashboard/:subjectId"
              element={
                <Dashboard
                  subjects={subjects}
                  subjectsLoading={subjectsLoading}
                  subjectLinks={subjectLinks}
                />
              }
            />
            <Route path="graderecords" element={<GradeRecord />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="*" element={<>Page not found!</>} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default LoggedInRoot;
