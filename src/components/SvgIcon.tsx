import React, {useMemo} from 'react';

import {SvgProps} from 'react-native-svg';

import IcnInfo from '../assets/circle-info-solid.svg';
import IcnCheck from '../assets/circle-check-regular.svg';

export type SvgName = 'info' | 'check';

interface Props extends SvgProps {
  name: SvgName;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

const SvgIcon = ({
  name,
  size,
  width,
  height,
  color = 'transparent',
  ...others
}: Props) => {
  const Icn = useMemo(() => {
    switch (name) {
      case 'info':
        return IcnInfo;
      case 'check':
        return IcnCheck;
    }
  }, [name]);

  return (
    <Icn
      fill={color}
      color={color}
      width={width || size || 0}
      height={height || size || 0}
      {...others}
    />
  );
};

export default SvgIcon;
