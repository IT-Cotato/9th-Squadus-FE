import styled from "styled-components";

export const BaseContainer = styled.div`
  max-width: 649px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  z-index: 10001;
  padding: 4px 20px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -2px 87px 0px #475467;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow-y: auto;
`;
export const ModalNavi = styled.div`
  width: 100%;
  height: 78px;
  padding: 20px 0px 36px 0px;
  border-radius: 8px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
`;
export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  color: #475467;
`;
export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: #101828;
  cursor: pointer;
`;
export const AddButton = styled.button`
  color: #ff6330;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
`;
export const CloseButtonStyled = styled(CloseButton)`
  font-size: 14px;
`;
export const EntireContainer = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const Container = styled(BaseContainer)`
  border-radius: 0px;
`;
