import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../../../api/api';
import useAuthStore from '../../../stores/useAuthStore';

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
  border: none;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SubmitButton = styled.div`
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
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


const GroupCreate = ({ closeGroupCreate }) => {
  const [clubName, setClubName] = useState('');
  const [university, setUniversity] = useState('');
  const [sportsCategory, setSportsCategory] = useState('');
  const [logo, setLogo] = useState('');

  const accessToken = useAuthStore(state => state.accessToken);

  const handleSubmit = async () => {
    console.log(accessToken);

    await api.post('/v1/api/clubs', {
      clubName: clubName,
      university: university,
      sportsCategory: sportsCategory,
      logo: logo
    }, {
      headers: {
        'Content-Type': 'application/json',
        access: `${accessToken}` 
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      alert('동아리가 성공적으로 생성되었습니다.');
      closeGroupCreate();
    })
    .catch(error => {
      console.error('동아리 생성 요청 실패:', error);
      alert('동아리 생성 요청 실패');
    });
  };
  

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeGroupCreate} />
          <HeaderTitle>동아리 생성</HeaderTitle>
          <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
        </HeaderContainer>
        <ContentContainer>
        <label>동아리 이름:</label>
          <Input type="text" value={clubName} onChange={(e) => setClubName(e.target.value)} />
          <label>대학교:</label>
          <Input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} />
          <label>스포츠 분류:</label>
          <Input type="text" value={sportsCategory} onChange={(e) => setSportsCategory(e.target.value)} />
          <label>로고 URL:</label>
          <Input type="text" value={logo} onChange={(e) => setLogo(e.target.value)} />
        </ContentContainer>
      </Container>
    </WrapperContainer>
  );
};

export default GroupCreate;
