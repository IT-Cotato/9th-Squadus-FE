import styled from 'styled-components';
import NoticeItem from './notice_components/NoticeItem';
import NoticeCreate from './NoticeCreate';
import NoticeDetail from './NoticeDetail';
import { useState } from 'react';


const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  width: 100%;
  /* margin: 0 auto; */
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FloatingButton = styled.button`
  position: absolute;
  bottom: 20px;
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

const NoticeList = styled.div`
  height: 100%;
  overflow: auto;
`;

const Notice = () => {
  const [showNoticeCreate, setShowNoticeCreate] = useState(false);
  const [showNoticeDetail, setShowNoticeDetail] = useState(false);

  return (
    <Container>
      <NoticeList >
        <NoticeItem 
          title="6월 정기 모임 관련 공지!!!!" 
          date="2024.05.30" 
          isNew={true} 
          onClick={() => {
            setShowNoticeDetail(true);
            console.log("공지 아이템 클릭");
          }} />
        <NoticeItem title="6월 정기 모임 관련 공지2" date="2024.05.30" />
        <NoticeItem title="6월 정기 모임 관련 공지2" date="2024.05.30" />
        <NoticeItem title="6월 정기 모임 관련 공지2" date="2024.05.30" />
        <NoticeItem title="6월 정기 모임 관련 공지2" date="2024.05.30" />
      </NoticeList>

      <FloatingButton onClick={() => {
        setShowNoticeCreate(true);
      }} />

      {
        showNoticeCreate &&
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: '649px',
              height: '100%',
              backgroundColor: 'white',
            }}>
            <NoticeCreate closeNoticeCreate={() => setShowNoticeCreate(false)} />
          </div>
        </div>
      }
      {
        showNoticeDetail &&
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: '649px',
              height: '100%',
              backgroundColor: 'white',
            }}>
            <NoticeDetail closeNoticeDetail={() => setShowNoticeDetail(false)} />
          </div>
        </div>
      }
    </Container>
  );
}

export default Notice;
