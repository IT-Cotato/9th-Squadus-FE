import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* 예시 배경색 */
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
`;

const BannerText = styled.div`
  color: white; /* 예시 텍스트 색 */
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const MainBannerItem = ({ image, children }) => (
  <BannerContainer image={image}>
    <BannerText>{children}</BannerText>
  </BannerContainer>
);

export default MainBannerItem;
