import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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

const CloseButton = styled.button`
    width: 24px;
    height: 24px;
    background-color: blue;
    cursor: pointer;
`;

const HeaderTitle = styled.div`
    flex-grow: 1;
    text-align: center;
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: 20px;
    font-weight: 700;
`;

const CreateButton = styled.div`
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
    <Container>
      <HeaderContainer>
        <CloseButton onClick={closeNoticeCreate} />
        <HeaderTitle>공지 작성하기</HeaderTitle>
        <CreateButton>등록</CreateButton>
      </HeaderContainer>
      <ContentContainer>
        <Input type="text" placeholder="제목" />
        <TextArea placeholder="내용을 입력하세요." />
      </ContentContainer>
      <FooterContainer>
        <CameraButton />
      </FooterContainer>
    </Container>
  );
};

export default NoticeCreate;
