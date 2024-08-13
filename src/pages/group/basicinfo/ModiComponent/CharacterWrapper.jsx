import Tag from './ModifyTagItem';
import { Wrapper, WrapperContent, WrapperTitle } from './WrapperStyled';

const Character = () => {
  return (
    <Wrapper>
      <WrapperTitle>성격</WrapperTitle>
      <WrapperContent>
        <Tag text={'서울시'} />
        <Tag text={'마포구'} />
      </WrapperContent>
    </Wrapper>
  );
};

export default Character;
