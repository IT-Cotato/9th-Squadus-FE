import styled from 'styled-components';
import MainBannerItem from './home_components/MainBannerItem';
import banner_img from '../../assets/banner.svg'

const Container = styled.div`
  min-height: 20%;
  height: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const MainBanner = () => (
  <Container>
    <MainBannerItem image={banner_img}></MainBannerItem>
  </Container>
);

export default MainBanner;
