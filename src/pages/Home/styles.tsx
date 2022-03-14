import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  cardUser: {
    paddingTop: 35,
    paddingBottom: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 99999,
    marginRight: 20,
  },
  userName: {
    fontSize: 18,
    color: '#000000',
    marginBottom: -3,
  },
  totalBookRead: {
    fontSize: 12,
    color: '#939393',
  },
  search: {
    width: '100%',
    paddingRight: 16,
  },
  searchWrapper: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F5F5F5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 47,
    width: '100%',
  },
  sectionTitle: {
    marginTop: 23,
    fontSize: 28,
    color: '#000000',
    fontFamily: 'PlayfairDisplay-Bold',
  },
});
