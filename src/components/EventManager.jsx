import styled from "styled-components";

const EventManager = () => {
  return (
    <ModalContainer>
      <LongInputContainer>
        <Button>취소</Button>
        <Button>추가</Button>
      </LongInputContainer>
      <TitleInput placeholder="제목"></TitleInput>
      <LongInputContainer>
        <LocationInput placeholder="위치아이콘"></LocationInput>
        <Button>위치</Button>
      </LongInputContainer>
      <LongInputContainer>
        <p>하루종일</p>
        <ToggleButton></ToggleButton>
      </LongInputContainer>
      <LongInputContainer>
        <p>시간</p>
        <DateContainer>
          <p>날짜</p>
          <p>시간</p>
        </DateContainer>
        <p>&gt;</p>
        <DateContainer>
          <p>날짜</p>
          <p>시간</p>
        </DateContainer>
      </LongInputContainer>
      <LongInputContainer>
        <p>알림</p>
        <p>알람</p>
      </LongInputContainer>
      <LongInputContainer>
        <p>url</p>
        <p>URL</p>
      </LongInputContainer>
      <p>메모</p>
      <MemoArea></MemoArea>
    </ModalContainer>
  );
};

export default EventManager;

const ModalContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 649px;
  height: 92vh;
  padding: 0 20px;
  border-radius: 16px 16px 0 0;
  background-color: white;
  box-shadow: 0 -2px 80px 5px #475467;
  gap: 8px;
  z-index: 10;
`;

const Button = styled.button``;

const TitleInput = styled.input``;

const LocationInput = styled.input``;

const ToggleButton = styled.div`
  width: 48px;
  height: 24px;
  background-color: gray;
  border-radius: 50px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  width: auto;
  border-radius: 8px;
  padding: 14px;
  gap: 4px;
  background-color: #f9fafb;
`;

const MemoArea = styled.textarea`
  width: 100%;
  max-height: 500px;
  padding: 16px;
  border: none;
  background-color: #f9fafb;
`;

const LongInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;
