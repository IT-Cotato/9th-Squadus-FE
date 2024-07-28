import styled from 'styled-components';

const Container = styled.div`
  padding: 2px 8px;
  background-color: #fff7ec;
  border-radius: 5px;
  color: #ff6330;
  font-weight: 500px;
  font-size: 14px;
  width: fit-content;
`;

const TagItem = ({ content }) => {
  return <Container>{content}</Container>;
};

export default TagItem;
