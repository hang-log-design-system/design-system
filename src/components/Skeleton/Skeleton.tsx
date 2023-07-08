import { getSkeletonStyling } from '@components/Skeleton/Skeleton.style';

export interface SkeletonProps {
  width?: string;
  height?: string;
}

const Skeleton = ({ width = '100%', height = '20px' }: SkeletonProps) => {
  return <div css={getSkeletonStyling({ width, height })}></div>;
};

export default Skeleton;
