import React from 'react';
import styled from 'styled-components';

import InfoBox from '@/component/result/IDCard/front/info-box';

interface MiddleInnerProps {
  name: string;
  birth: string;
  whatILike: string;
  goal: string;
}

// TODO : 삭제
export default function MiddleRight({
  name,
  birth,
  whatILike,
  goal,
}: MiddleInnerProps) {
  return (
    <Wrapper>
      <InfoBox name={name} birth={birth} whatILike={whatILike} goal={goal} />
      <Desc>
        <p>이 카드를 소지한 사람은 별에서 온 우주인임을 증명합니다.</p>
        <p> This card certifies the bearer as a astronaut.</p>
      </Desc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 198px;
  max-width: 198px;
`;

const Desc = styled.div`
  font-weight: 300;
  line-height: 10px;
  font-size: 10px;

  transform: translate(0%, 80%) scale(0.75);

  display: inline-block;
  text-align: right;
  color: #343232;
  opacity: 0.8;
  width: fit-content;

  p {
    width: fit-content;
    text-overflow: ellipsis;
    white-space: pre;
    float: right;
  }
`;

const FrontTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  color: ${(props) => props.theme.colors.main2};
  font-family: 'GongGothicMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  div {
    border-bottom: 0.1px solid #343232;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
