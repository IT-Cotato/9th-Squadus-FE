import React from 'react';
import { Outlet } from 'react-router-dom';
import GroupTabBar from '../../components/group/GroupTabBar';

function Group() {
  return (
    <div>
      <GroupTabBar />
      <Outlet />
    </div>
  );
}

export default Group;
