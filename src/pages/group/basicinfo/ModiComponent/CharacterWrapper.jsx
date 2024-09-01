import Tag from "./ModifyTagItem";
import { Wrapper, WrapperContent, WrapperTitle } from "./WrapperStyled";
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus.svg";
import { useState } from "react";
import styled from "styled-components";

const Character = ({ tags, selectedTags, onClick }) => {
  const [characterTag, setCharacterTag] = useState(selectedTags || []);
  const [inputList, setInputList] = useState([""]);

  const handlePlusClick = () => {
    setInputList([...inputList, ""]);
  };

  const handleInputChange = (e, index) => {
    const newInputList = [...inputList];
    newInputList[index] = e.target.value;
    setInputList(newInputList);
  };

  const handleAddTag = (index) => {
    if (inputList[index].trim()) {
      setCharacterTag([...characterTag, inputList[index]]);
      onClick(inputList[index]);
      setInputList(inputList.filter((_, i) => i !== index));
    }
  };

  return (
    <Wrapper>
      <WrapperTitle>성격</WrapperTitle>
      <WrapperContent>
        <PlusIconStyled onClick={handlePlusClick} />
        {inputList.map((input, index) => (
          <div key={index}>
            <NewTag
              value={input}
              onChange={(e) => handleInputChange(e, index)}
              onBlur={() => handleAddTag(index)}
              placeholder="새 태그 입력"
            />
          </div>
        ))}
        {tags.map((item) => (
          <Tag
            key={item}
            text={item}
            isSelected={characterTag.includes(item)}
            onClick={() => onClick(item)}
          />
        ))}
        {characterTag.map((item, index) => (
          <Tag key={index} text={item} isSelected />
        ))}
      </WrapperContent>
    </Wrapper>
  );
};

export default Character;

const PlusIconStyled = styled(PlusIcon)`
  flex-shrink: 0;
`;
const NewTag = styled.input`
  width: 120px;
  height: 38px;
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid #e4e7ec;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #1d2939;
  margin-right: 8px;
`;
