import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

export const ArrowRight = (props: SvgProps) => {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width="21.058"
      height="22.3"
      viewBox="0 0 21.058 22.3"
      strokeWidth={3}
      {...props}>
      <G
        id="Icon_feather-arrow-right"
        data-name="Icon feather-arrow-right"
        transform="translate(-6 -5.379)">
        <Path
          id="Path_1"
          data-name="Path 1"
          d="M7.5,18H25.558"
          transform="translate(0 -1.471)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <Path
          id="Path_2"
          data-name="Path 2"
          d="M18,7.5l9.029,9.029L18,25.558"
          transform="translate(-1.471)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </G>
    </Svg>
  );
};
