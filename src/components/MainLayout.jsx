import MainNavigationBar from "./MainNavigationBar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: white;
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

function MainLayout({ children }) {
  console.log("MainLayout 렌더링");

  return (
    <LayoutContainer>
      <Content>{children}</Content>

      <MainNavigationBar />
    </LayoutContainer>
  );
}

export default MainLayout;
