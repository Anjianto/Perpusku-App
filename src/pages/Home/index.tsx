import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Search} from '../../components/Icons/Search';
import {MenuBar} from '../../components/MenuBar';
import {TextPoppins} from '../../components/Text/TextPoppins';
import {styles} from './styles';

export const Home = () => {
  const backgroundStyle = {
    backgroundColor: '#FFFFFF',
    height: '100%',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.cardUser}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
              }}
              style={styles.avatar}
            />
            <View>
              <TextPoppins style={styles.userName} fontWeight={500}>
                Rose Najamunas
              </TextPoppins>
              <TextPoppins style={styles.totalBookRead}>
                12 Books read
              </TextPoppins>
            </View>
          </View>
          <View style={styles.search}>
            <View style={styles.searchWrapper}>
              <Search strokeWidth={2} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#939393"
              />
            </View>
          </View>
          <Text style={styles.sectionTitle}>Popular Books</Text>
        </View>
      </ScrollView>
      <MenuBar />
    </SafeAreaView>
  );
};
