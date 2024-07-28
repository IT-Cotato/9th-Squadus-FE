import styled from 'styled-components';
import { ReactComponent as MemoIcon } from '../../../assets/icons/group/memo.svg';
import { ReactComponent as LocationIcon } from '../../../assets/icons/group/location.svg';
import { ReactComponent as LinkIcon } from '../../../assets/icons/group/link.svg';
import { ReactComponent as ClockIcon } from '../../../assets/icons/group/clock.svg';
import { ReactComponent as AlarmIcon } from '../../../assets/icons/group/alarm.svg';

import {
  ToggleSwitch,
  ToggleSlider,
  CheckBox,
} from './schedule_components/ToggleButton';
import { useState } from 'react';
const BaseContainer = styled.div`
  max-width: 649px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  z-index: 10001;
  padding: 4px 20px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -2px 87px 0px #475467;
  box-sizing: border-box;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  background-color: #ffffff;
`;
const ModalNavi = styled.div`
  width: 100%;
  height: 78px;
  padding: 20px 0px 36px 0px;
  border-radius: 8px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: #101828;
`;
const AddButton = styled.button`
  color: #ff6330;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
`;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const AddWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 12px 0px;

  border: 1px solid #f9fafb;
`;
const AddInput = styled.input`
  outline: none;
  border: 0px;
  //   color: #98a2b3;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  text-align: right;
`;
const AddTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 12px 6px;
  gap: 8px;
  border: 1px solid F9FAFB;
`;
const TiTlePoint = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 17px;
  background: #ff6330;
  margin-right: 8px;
`;

const TiTleText = styled.input`
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.03em;
  color: #101828;
  outline: none;
  border: 0px;
`;
const ScheduleAdd = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  // const [input, setInput] = useState({
  //   title: '',
  //   location: '',
  //   startTime: '',
  //   endTime: '',
  //   checkedAlarm: false,
  //   url: '',
  //   memo: '',
  // });

  return (
    <BaseContainer isOpen={isOpen}>
      <ModalNavi>
        <CloseButton onClick={onClose}>취소</CloseButton>
        <AddButton>추가</AddButton>
      </ModalNavi>
      <AddContainer>
        <AddTitle>
          <TiTlePoint />
          <TiTleText placeholder={'제목'} />
        </AddTitle>
        <AddWrapper>
          <LocationIcon /> <AddInput placeholder={'위치'} />
        </AddWrapper>
        <AddWrapper>
          <p>하루종일</p>
          <ToggleSwitch>
            <CheckBox
              type="checkbox"
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
            />
            <ToggleSlider />
          </ToggleSwitch>
        </AddWrapper>

        <AddWrapper>
          <ClockIcon /> <AddInput type="datetime-local" />
          >
          <AddInput type="datetime-local" />
        </AddWrapper>
        <AddWrapper>
          <AlarmIcon /> <p>알람</p>
        </AddWrapper>
        <AddWrapper>
          <LinkIcon /> <AddInput placeholder={'URL'} />
        </AddWrapper>
        <AddWrapper>
          <MemoIcon /> <AddInput placeholder={'메모'} />
        </AddWrapper>
      </AddContainer>
    </BaseContainer>
  );
};

export default ScheduleAdd;
