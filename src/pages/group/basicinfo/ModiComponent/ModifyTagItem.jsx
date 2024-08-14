import styled from 'styled-components';

import React from 'react';

const Tag = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Tag;

const Container = styled.div`
  height: 38px;
  padding: 8px 16px;
  gap: 6px;
  border-radius: 12px;
  border: 1px;
  border: 1px solid #e4e7ec;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  color: #1d2939;
`;
