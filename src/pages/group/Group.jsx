import React from 'react';
import { Outlet } from 'react-router-dom';
import GroupTabBar from '../../components/group/GroupTabBar';
import GroupHeader from '../../components/group/GroupHeader';

function Group() {
  return (
    <div>
      <GroupHeader />
      <GroupTabBar />
      <Outlet />
    </div>
  );
}

export default Group;
