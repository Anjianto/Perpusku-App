import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    minHeight: '100%',
  },
  skip: {
    textAlign: 'right',
    marginTop: 12,
    marginRight: 24,
    color: '#000000',
    fontSize: 16,
  },
  illustration: {
    display: 'flex',
    height: '80%',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 58.3,
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 30,
  },
  description: {
    marginTop: 19,
    fontSize: 14,
    color: '#939393',
    textAlign: 'center',
    lineHeight: 21,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
  dotWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 9999,
    backgroundColor: '#C5C5C5',
    marginRight: 8,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 9999,
    backgroundColor: '#EF8E06',
    marginRight: 8,
  },
  buttonNext: {
    width: 61,
    height: 61,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    backgroundColor: '#EF8E06',
  },
});
