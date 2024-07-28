import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 45px;
  padding: 12px 20px;
`;

const TabItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: center;

  position: relative;

  width: 168.5px;
  height: 27px;
  gap: 0px;
  opacity: 0px;

  &.active {
    &:after {
      content: '';
      display: block;
      position: absolute; // 절대 위치를 사용하여 위치 조정
      bottom: 0; // 하단에 위치
      left: 0; // 왼쪽 정렬
      height: 2px;
      background-color: ${({ theme }) => theme.colors.main[500]};
      width: 100%;
    }
  }
`;

const RankTab = () => {
  return (
    <Container>
      <TabItem>Monthly</TabItem>
    </Container>
  );
};

export default RankTab;
