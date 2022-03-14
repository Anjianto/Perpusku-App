import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

export const BookmarkIcon = (props: SvgProps) => {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width="20.014"
      height="23.657"
      viewBox="0 0 20.014 23.657"
      {...props}>
      <G id="bookmark-white" transform="translate(-33.261)">
        <Path
          id="Path_107"
          data-name="Path 107"
          d="M52.97.782a1.763,1.763,0,0,0-.821-.641A1.731,1.731,0,0,0,51.461,0H35.075a1.73,1.73,0,0,0-.688.141,1.762,1.762,0,0,0-.821.641,1.659,1.659,0,0,0-.3.969V21.906a1.66,1.66,0,0,0,.3.97,1.761,1.761,0,0,0,.821.641,1.729,1.729,0,0,0,.688.141,1.865,1.865,0,0,0,1.3-.516l6.9-6.63,6.9,6.63a1.861,1.861,0,0,0,1.3.5,1.819,1.819,0,0,0,1.509-.766,1.658,1.658,0,0,0,.3-.969V1.751A1.66,1.66,0,0,0,52.97.782Zm-1.7,20.639L44.66,15.073l-1.392-1.329-1.392,1.329-6.614,6.348V2H51.274V21.421Z"
          fill="#939393"
        />
      </G>
    </Svg>
  );
};