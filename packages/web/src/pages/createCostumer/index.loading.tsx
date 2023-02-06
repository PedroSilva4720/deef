import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import * as CreateUserComponents from './styles';
import 'react-loading-skeleton/dist/skeleton.css';
import { grass } from '@radix-ui/colors';

import { Button } from '../../components/button/Button';
import { ShortInput } from '../../components/quests/shortInput/ShortInput';

export const LoadingCreateCustomerPage: React.FC = () => {
  return (
    <>
      <CreateUserComponents.SkeletonContainer>
        <SkeletonTheme baseColor={grass.grass7} highlightColor={grass.grass8}>
          <h1>
            <Skeleton width={350} height={40} />
          </h1>
          <p>
            <Skeleton width={200} />
          </p>
          <p>
            <Skeleton width={200} />
          </p>
          <Skeleton width={230} height={35} />
          <p>
            <Skeleton width={200} />
          </p>
          <Skeleton width={230} height={35} />
          <p>
            <Skeleton width={200} />
          </p>
          <Skeleton width={230} height={35} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton width={80} height={35} />
          </div>
        </SkeletonTheme>
      </CreateUserComponents.SkeletonContainer>
    </>
  );
};
