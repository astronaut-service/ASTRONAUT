import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import Image from 'next/image';
import styled from 'styled-components';
interface IconBoxProps {
  isLoading: boolean;
  onDownloadBtn: () => void;
}

export default function IconBox({ isLoading, onDownloadBtn }: IconBoxProps) {
  return (
    <ShareWrapper>
      <span onClick={onDownloadBtn}>
        {isLoading ? (
          <Image
            src="/images/pink-loading.svg"
            alt="loading"
            width={38}
            height={38}
          />
        ) : (
          <DownloadIcon />
        )}
      </span>
      <ShareIcon />
      <ReplayIcon />
    </ShareWrapper>
  );
}

const ShareWrapper = styled.div`
  display: flex;
  margin: 35px 0 20px;
  gap: 75px;
  justify-content: center;
`;