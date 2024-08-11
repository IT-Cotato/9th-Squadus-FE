import React from 'react';
import styled from 'styled-components';
import close_icon from '../../../assets/icons/close.svg';

const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10000;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-color: white;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SaveButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0;
  margin-bottom: 16px;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  font-size: 16px;
  font-weight: 600;
  &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.main[500]};
  }
`;

const TextArea = styled.textarea`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 0;
  border: none;
  font-size: 16px;
  font-weight: 500;
  resize: none;
  &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.main[500]};
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #dcdcdc;
`;

const CameraButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: blue;
  border: none;
  cursor: pointer;
`;

const NoticeCreate = ({ closeNoticeCreate }) => {
  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeNoticeCreate} />
          <HeaderTitle>공지 작성하기</HeaderTitle>
          <SaveButton>등록</SaveButton>
        </HeaderContainer>
        <ContentContainer>
          <Input type="text" placeholder="제목" />
          <TextArea placeholder="내용을 입력하세요." />
        </ContentContainer>
        <FooterContainer>
          <CameraButton />
        </FooterContainer>
      </Container>
    </WrapperContainer>
  );
};

export default NoticeCreate;
