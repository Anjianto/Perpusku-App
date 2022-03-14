import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="28.667"
      viewBox="0 0 26 28.667"
      {...props}>
      <G
        id="Icon_feather-home"
        data-name="Icon feather-home"
        transform="translate(-3.5 -2)">
        <Path
          id="Path_103"
          data-name="Path 103"
          d="M4.5,12.333,16.5,3l12,9.333V27a2.667,2.667,0,0,1-2.667,2.667H7.167A2.667,2.667,0,0,1,4.5,27Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <Path
          id="Path_104"
          data-name="Path 104"
          d="M13.5,31.333V18h8V31.333"
          transform="translate(-1 -1.667)"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </G>
    </Svg>
  );
};
