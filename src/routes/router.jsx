import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";

// Login
import Login from "../pages/login/Login";
import Callback from "../pages/login/Callback";

// GNB

import Home from "../pages/home/Home";
import Group from "../pages/group/Group";
import Match from "../pages/match/Match";
import Mypage from "../pages/mypage/Mypage";
import Promotion from "../pages/Promotion/Promotion";

// GNB2: promotion
import OnCampus from "../pages/Promotion/promotion_components/OnCampus";
import OffCampus from "../pages/Promotion/promotion_components/OffCampus";

// GNB3: Group
import BasicInfo from "../pages/group/basicinfo/BasicInfo";
import Schedule from "../pages/group/schedule/Schedule";
import Notice from "../pages/group/notice/Notice";
import Fee from "../pages/group/fee/Fee";
import ArticleDetailList from "../pages/home/ArticleDetailList";
import NoticeDetailList from "../pages/home/NoticeDetailList";

// GNB4: Match
import MatchContent from "../pages/match/MatchContent";
import MercenaryContent from "../pages/match/MercenaryContent";

// Notification
import Notification from "../pages/notification/Notification";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "callback",
    element: <Callback />,
  },
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home/article",
        element: <ArticleDetailList />,
      },
      {
        path: "home/notice",
        element: <NoticeDetailList />,
      },
      {
        path: "group",
        element: <Group />,
        children: [
          { path: "", element: <Navigate to="basic-info" replace /> },
          { path: "basic-info", element: <BasicInfo /> },
          { path: "schedule", element: <Schedule /> },
          { path: "notice", element: <Notice /> },
          { path: "fee", element: <Fee /> },
        ],
      },
      {
        path: "match",
        element: <Match />,
        children: [
          { path: "", element: <MatchContent /> },
          { path: "mercenary", element: <MercenaryContent /> },
        ],
      },

      {
        path: "mypage",
        element: <Mypage />,
      },
      {
        path: "promotion",
        element: <Promotion />,
        children: [
          { path: "", element: <Navigate to="oncampus" replace /> },
          {
            path: "oncampus",
            element: <OnCampus />,
          },
          { path: "offcampus", element: <OffCampus /> },
        ],
      },
    ],
  },
  {
    path: "/notification",
    element: <Notification />,
  },
]);
