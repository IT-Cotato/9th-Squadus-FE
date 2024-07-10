import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import GroupHeader from '../../components/group/GroupHeader';
import GroupTabBar from '../../components/group/GroupTabBar';

const GroupContainer = styled.div`
  padding-top: 92px;  // 헤더와 탭바의 높이를 고려한 여백
`;

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;       // 너비를 100%로 설정
  max-width: 649px;  // 최대 너비 제한
  // box-sizing: border-box;
  // overflow: hidden;  // 넘치는 내용 숨김
`;

function GroupLayout() {
  return (
    <>
      <FixedContainer>
        <GroupHeader />
        <GroupTabBar />
      </FixedContainer>
      <GroupContainer>
        <Outlet />
      </GroupContainer>
    </>
  );
}

export default GroupLayout;
