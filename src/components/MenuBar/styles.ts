import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  menuBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    overflow: 'hidden',
  },
  iconWrapper: {
    width: 46,
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 46,
  },
  iconWrapperActive: {
    backgroundColor: 'rgba(239, 179, 37, 0.23)',
  },
  iconUnActive: {
    color: '#939393',
  },
  iconActive: {
    color: '#EFB325',
  },
});
