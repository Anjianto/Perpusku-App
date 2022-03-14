import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

export const Search = (props: SvgProps) => {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width="18.58"
      height="18.58"
      viewBox="0 0 18.58 18.58"
      {...props}>
      <G
        id="Icon_feather-search"
        data-name="Icon feather-search"
        transform="translate(1 1)">
        <Path
          id="Path_200"
          data-name="Path 200"
          d="M18.87,11.685A7.185,7.185,0,1,1,11.685,4.5,7.185,7.185,0,0,1,18.87,11.685Z"
          transform="translate(-4.5 -4.5)"
          fill="none"
          stroke="#939393"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <Path
          id="Path_201"
          data-name="Path 201"
          d="M28.882,28.882l-3.907-3.907"
          transform="translate(-12.716 -12.716)"
          fill="none"
          stroke="#939393"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </G>
    </Svg>
  );
};
