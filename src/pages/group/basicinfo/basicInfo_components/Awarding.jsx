import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 331.81px;
  display: flex;
  justify-content: center;
  align-items: self-end;
  gap: 4px;
  padding-bottom: 10px;
`;

const FirstContainer = styled.div`
  width: 95px;
  height: 239.74px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SecondContainer = styled.div`
  width: 95px;
  height: 221.74px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ThirdContainer = styled.div`
  width: 95px;
  height: 199.74px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Photo = styled.div`
  width: 64.18px;
  height: 64.18px;
  background-color: black;
  border-radius: 50px;
`;
const Name = styled.div`
  width: 95px;
  height: 25.46px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
`;

const Num1 = styled.div`
  width: 95px;
  height: 132.1px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  background: #ffffff;

  color: #465db2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Num2 = styled.div`
  width: 95px;
  height: 112.1px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  background: #ffffffcc;

  color: #465db2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Num3 = styled.div`
  width: 95px;
  height: 92.1px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  background: #ffffff80;

  color: #465db2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Awarding = () => {
  return (
    <Container>
      <FirstContainer>
        <Photo />
        <Name>핑퐁</Name>
        <Num1>1</Num1>
      </FirstContainer>
      <SecondContainer>
        <Photo />
        <Name>중앙가르드</Name>
        <Num2>2</Num2>
      </SecondContainer>
      <ThirdContainer>
        <Photo />
        <Name>메롱</Name>
        <Num3>3</Num3>
      </ThirdContainer>
    </Container>
  );
};

export default Awarding;
