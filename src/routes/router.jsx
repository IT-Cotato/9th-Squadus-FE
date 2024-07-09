import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Group from '../pages/Group';
import Match from '../pages/Match';
import Mypage from '../pages/Mypage';
import Report from '../pages/Report';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout showBottomNav={true}><Home /></Layout>,
  },
  {
    path: '/group',
    element: <Layout showBottomNav={true}><Group /></Layout>,
  },
  {
    path: '/match',
    element: <Layout showBottomNav={true}><Match /></Layout>,
  },
  {
    path: '/mypage',
    element: <Layout showBottomNav={true}><Mypage /></Layout>,
  },
  {
    path: '/report',
    element: <Layout showBottomNav={true}><Report /></Layout>,
  },

]);
