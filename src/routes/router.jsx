import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";

import Home from "../pages/home/Home";
import Group from "../pages/group/Group";
import Match from "../pages/Match";
import Mypage from "../pages/Mypage";
import Report from "../pages/Report";

// GNB3: Group
import BasicInfo from "../pages/group/BasicInfo";
import Schedule from "../pages/group/Schedule";
import Notice from "../pages/group/Notice";
import Fee from "../pages/group/Fee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout showMainNav={true}>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/group",
    element: (
      <MainLayout showMainNav={true}>
        <Group />
      </MainLayout>
    ),
    children: [
      { path: "", element: <Navigate to="/group/basic-info" replace /> }, // 기본 리다이렉트 설정
      { path: "basic-info", element: <BasicInfo /> },
      { path: "schedule", element: <Schedule /> },
      { path: "notice", element: <Notice /> },
      { path: "fee", element: <Fee /> },
    ],
  },
  {
    path: "/match",
    element: (
      <MainLayout showMainNav={true}>
        <Match />
      </MainLayout>
    ),
  },
  {
    path: "/mypage",
    element: (
      <MainLayout showMainNav={true}>
        <Mypage />
      </MainLayout>
    ),
  },
  {
    path: "/report",
    element: (
      <MainLayout showMainNav={true}>
        <Report />
      </MainLayout>
    ),
  },
]);
