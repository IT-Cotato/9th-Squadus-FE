import styled from "styled-components";
import close_icon from "../../../assets/icons/backStep.svg";

export const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 10000;
  justify-content: center;
  width: Fixed (393px) px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-color: white;
  overflow-y: auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
  position: fixed;
  background-color: #fff;
`;
export const HeaderWrapperContainer = styled.div`
  height: 64px;
`;
export const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const HeaderTitle = styled.div`
  position: absolute;
  left: 30%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
`;

export const SubmitButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  right: 20px;
`;
