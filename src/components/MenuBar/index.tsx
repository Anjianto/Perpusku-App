import {Link, useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {BookmarkIcon} from '../../components/Icons/Bookmark';
import {DirectionIcon} from '../../components/Icons/Direction';
import {HomeIcon} from '../../components/Icons/Home';
import {UserIcon} from '../../components/Icons/User';
import {styles} from './styles';
import {Shadow} from 'react-native-shadow-2';

export const MenuBar = () => {
  const route = useRoute();

  return (
    <Shadow
      distance={6}
      startColor={'#00000016'}
      radius={{
        topLeft: 20,
        topRight: 20,
      }}
      viewStyle={styles.menuBar}>
      <View
        style={[
          styles.iconWrapper,
          route.name === 'Home' ? styles.iconWrapperActive : undefined,
        ]}>
        <Link to="/Home">
          <HomeIcon
            strokeWidth={2}
            // @ts-ignore
            style={
              route.name === 'Home' ? styles.iconActive : styles.iconUnActive
            }
          />
        </Link>
      </View>
      <View
        style={[
          styles.iconWrapper,
          route.name === 'Search' ? styles.iconWrapperActive : undefined,
        ]}>
        <Link to="/Search">
          <DirectionIcon
            strokeWidth={2}
            // @ts-ignore
            style={
              route.name === 'Search' ? styles.iconActive : styles.iconUnActive
            }
          />
        </Link>
      </View>
      <View
        style={[
          styles.iconWrapper,
          route.name === 'Bookmark' ? styles.iconWrapperActive : undefined,
        ]}>
        <Link to="/Bookmark">
          <BookmarkIcon
            strokeWidth={2}
            // @ts-ignore
            style={
              route.name === 'Bookmark'
                ? styles.iconActive
                : styles.iconUnActive
            }
          />
        </Link>
      </View>
      <View
        style={[
          styles.iconWrapper,
          route.name === 'Profile' ? styles.iconWrapperActive : undefined,
        ]}>
        <Link to="/Profile">
          <UserIcon
            strokeWidth={2}
            // @ts-ignore
            style={
              route.name === 'Profile' ? styles.iconActive : styles.iconUnActive
            }
          />
        </Link>
      </View>
    </Shadow>
  );
};
