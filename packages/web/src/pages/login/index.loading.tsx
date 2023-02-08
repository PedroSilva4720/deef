import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { grass } from '@radix-ui/colors';

import * as LoginComponents from './styles';

export const LoadingLoginPage: React.FC = () => {
  return (
    <>
      <LoginComponents.SkeletonContainer>
        <SkeletonTheme baseColor={grass.grass7} highlightColor={grass.grass8}>
          <h1>
            <Skeleton width={350} height={40} />
          </h1>
          <p>
            <Skeleton width={200} />
          </p>
          <div>
            <p>
              <Skeleton width={100} />
            </p>
            <Skeleton width={230} height={35} />
          </div>
          <div>
            <p>
              <Skeleton width={100} />
            </p>
            <Skeleton width={230} height={35} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton width={80} height={35} />
          </div>
        </SkeletonTheme>
      </LoginComponents.SkeletonContainer>
    </>
  );
};
