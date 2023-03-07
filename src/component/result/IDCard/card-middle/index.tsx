import styled from 'styled-components';
import CharacterBox from '@/component/result/IDCard/card-middle/character-box';
import { CharacterReturnType } from '@/utils/answer';

interface CardMiddleProps {
  children: React.ReactNode;
  character: CharacterReturnType;

  image?: string;
  handleImageError?: () => void;
  imageError?: boolean;
}

// TODO : character context api 사용하기, props drilling 이 너무 김, context api 사용하면서 불필요한 props 삭제하기
// 적용하면서 글쓰기
export default function CardMiddle({
  children,
  image,
  handleImageError,
  imageError,
  character,
}: CardMiddleProps) {
  if (imageError || !image) {
    return (
      <MiddleWrapper>
        <CharacterBox
          name={character?.name ?? 'Lomi'}
          image={character?.image ?? '/characters/lumi_yellow.png'}
        />
        <TextWrapper>{children}</TextWrapper>
      </MiddleWrapper>
    );
  }

  return (
    <MiddleWrapper>
      <ImageWrapper>
        <RomiImageWrapper>
          <Img src="/characters/lumi.png" width="60" height="48" alt="image" />
        </RomiImageWrapper>
        <Img
          src={image}
          width="90"
          height="120"
          alt="user"
          onError={handleImageError}
        />
      </ImageWrapper>
      <TextWrapper>{children}</TextWrapper>
    </MiddleWrapper>
  );
}

const Img = styled.img`
  object-fit: cover;
`;

const MiddleWrapper = styled.div`
  display: flex;
  gap: 20px;

  height: 120px;
`;

const TextWrapper = styled.div`
  padding: 12px 10px;
  flex: 1;

  background: ${(props) => props.theme.colors.sub2};
  border-radius: 16px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 120px;
  border-radius: 16px;
  min-width: 90px;
`;

const RomiImageWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: -15px;
`;
