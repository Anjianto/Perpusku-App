import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

export const DirectionIcon = (props: SvgProps) => {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      id="direction"
      width="31.321"
      height="31.321"
      viewBox="0 0 31.321 31.321"
      {...props}>
      <G id="Group_6" data-name="Group 6">
        <Path
          id="Path_105"
          data-name="Path 105"
          d="M15.661,0A15.661,15.661,0,1,0,31.321,15.661,15.678,15.678,0,0,0,15.661,0Zm0,29.513A13.852,13.852,0,1,1,29.513,15.661,13.868,13.868,0,0,1,15.661,29.513Z"
          fill="currentColor"
        />
        <Path
          id="Path_106"
          data-name="Path 106"
          d="M152.78,135.9a.9.9,0,0,0-1.225-.368l-10.179,5.473a.9.9,0,0,0-.368.368l-5.471,10.177a.9.9,0,0,0,1.209,1.233h0l0,0,.011-.006,10.184-5.469a.9.9,0,0,0,.368-.368l5.449-10.152c.012-.021.023-.041.034-.063l.007-.014h0A.9.9,0,0,0,152.78,135.9ZM138.549,149.77l3.477-6.467,2.99,2.99Zm7.746-4.756-2.99-2.99,6.466-3.477"
          transform="translate(-128.497 -128.495)"
          fill="currentColor"
        />
      </G>
    </Svg>
  );
};
