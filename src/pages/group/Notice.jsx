import styled from 'styled-components';
import NoticeItem from './group_components/NoticeItem';

const Container = styled.div`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

// TODO: 플로팅버튼 위치 조정해줘야 함
const FloatingButton = styled.button`
  position: fixed;
  bottom: 84px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 32px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
`;

const Notice = () => {
  return (
    <Container>
      <NoticeItem title="6월 정기 모임 관련 공지1" date="2024.05.30" isNew={true} /> {/* TODO: API 연결 필요 */}
      <NoticeItem title="6월 정기 모임 관련 공지2" date="2024.05.30" isNew={true} />
      <NoticeItem title="6월 정기 모임 관련 공지3" date="2024.05.30" isNew={false} />
      <NoticeItem title="6월 정기 모임 관련 공지" date="2024.05.30" isNew={false} />
      <NoticeItem title="6월 정기 모임 관련 공지" date="2024.05.30" isNew={false} />
      <NoticeItem title="6월 정기 모임 관련 공지" date="2024.05.30" isNew={false} />
      <NoticeItem title="6월 정기 모임 관련 공지" date="2024.05.30" isNew={false} />
      <NoticeItem title="6월 정기 모임 관련 공지" date="2024.05.30" isNew={false} />
      <NoticeItem title="6월 정기 모임 관련 공지" date="2024.05.30" isNew={false} />
      <NoticeItem title="6월 정기 모임 관련 공지" date="2024.05.30" isNew={false} />
      <NoticeItem title="6월 정기 모임 관련 공지" date="2024.05.30" isNew={false} />
      <FloatingButton>+</FloatingButton>
    </Container>
  );
}

export default Notice;
