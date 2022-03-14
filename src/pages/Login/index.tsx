import {Link} from '@react-navigation/native';
import React from 'react';
import {Pressable, StatusBar, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Logo} from '../../components/Icons/Logo';
import {TextPoppins} from '../../components/Text/TextPoppins';
import {styles} from './styles';

export const Login = () => {
  const backgroundStyle = {
    backgroundColor: '#FFFFFF',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.wrapper}>
        <Logo />
        <TextPoppins style={styles.title} fontWeight={500}>
          Selamat Datang
        </TextPoppins>
        <TextPoppins style={styles.subtitle}>
          Silahkan masuk untuk melanjutkan baca
        </TextPoppins>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#939393"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.input, styles.inputPassword]}
            placeholder="Kata Sandi"
            placeholderTextColor="#939393"
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <TextPoppins style={styles.notHaveAccount}>
          Belum punya akun?{' '}
          <Link to="/Register" style={styles.register}>
            Daftar
          </Link>
        </TextPoppins>
        <Pressable style={styles.btnLogin}>
          <TextPoppins style={styles.textBtnLogin} fontWeight={500}>
            Masuk
          </TextPoppins>
        </Pressable>
        <Link to="/Home" style={styles.skip}>
          <TextPoppins>Lewati Sekarang</TextPoppins>
        </Link>
      </View>
    </SafeAreaView>
  );
};
