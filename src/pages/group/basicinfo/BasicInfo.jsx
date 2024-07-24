import styled from 'styled-components';
import ClubMainInfo from './group_components/ClubMainInfo';
import ClubSubInfo from './group_components/ClubSubInfo';

const BaseContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
`;

const BasicInfo = () => {
  return (
    <BaseContainer>
      <ClubMainInfo
        region={'서울'}
        personality={'모두 환영'}
        name={'중앙 가르드'}
        memRecent={32}
        memMax={40}
        establishDate={'2023.09.01'}
      />
      <ClubSubInfo />
    </BaseContainer>
  );
};

export default BasicInfo;
