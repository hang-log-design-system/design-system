import { getSkeletonStyling } from '@components/Skeleton/Skeleton.style';

export interface SkeletonProps {
  width?: string;
  height?: string;
  /**
   * Skeleton 모양
   *
   * @default 'square'
   */
  variant?: 'square' | 'circle';
}

const Skeleton = ({ width = '100%', height = '24px', variant = 'square' }: SkeletonProps) => {
  return <div css={getSkeletonStyling({ width, height, variant })}></div>;
};

export default Skeleton;
