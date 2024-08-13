import Tag from './ModifyTagItem';
import { Wrapper, WrapperContent, WrapperTitle } from './WrapperStyled';

const Region = () => {
  return (
    <Wrapper>
      <WrapperTitle>지역</WrapperTitle>
      <WrapperContent>
        <Tag text={'서울시'} />
        <Tag text={'마포구'} />
      </WrapperContent>
    </Wrapper>
  );
};

export default Region;
