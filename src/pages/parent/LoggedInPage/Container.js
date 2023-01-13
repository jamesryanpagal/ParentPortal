import React, { useState, useEffect } from "react";

// ? components
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";
import { getCurrentPageLink } from "../../../helpers/Methods/CurrentPageName/GetCurrentPageName";
import { getSubjects } from "../../../store/slices/dashboard/dashboardSlice";
import { getChildren } from "../../../store/slices/childrenProfile/childrenProfileSlice";

// ? plugins
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

const Container = () => {
  // TODO -------------- STATE -----------------
  const [foldSider, setFoldSider] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [subjectLinks, setSubjectsLinks] = useState([]);
  const { userInfo } = useSelector((state) => state.userAuthSlice);
  const { subjects } = useSelector((state) => state.dashboardSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("smaple");

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

  return (
    <Layout className="bg-landingPageBackground h-full bg-transparent">
      <SideBar
        foldSider={foldSider}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Content>
        <TopBar setFoldSider={setFoldSider} />
        <Content className="h-[92vh] overflow-auto">
          <Outlet context={{ subjectLinks }} />
        </Content>
      </Content>
    </Layout>
  );
};

export default Container;
