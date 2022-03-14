import React, {useCallback} from 'react';
import {Text, TextProps} from 'react-native';

interface Props extends TextProps {
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const TextPoppins: React.FC<Props> = ({
  children,
  fontWeight = 400,
  ...props
}) => {
  const styles = props.style ? props.style : {};
  const getFont = useCallback(() => {
    const fontName = 'Poppins';
    switch (fontWeight) {
      case 100:
        return `${fontName}-Thin`;
      case 200:
        return `${fontName}-ExtraLight`;
      case 300:
        return `${fontName}-Light`;
      case 400:
        return `${fontName}-Regular`;
      case 500:
        return `${fontName}-Medium`;
      case 600:
        return `${fontName}-SemiBold`;
      case 700:
        return `${fontName}-Bold`;
      case 800:
        return `${fontName}-ExtraBold`;
      case 900:
        return `${fontName}-Black`;
      default:
        return `${fontName}-Regular`;
    }
  }, [fontWeight]);

  return (
    <Text
      {...props}
      style={{
        // @ts-ignore
        ...styles,
        fontFamily: getFont(),
      }}>
      {children}
    </Text>
  );
};
