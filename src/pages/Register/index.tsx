import {Link} from '@react-navigation/native';
import React from 'react';
import {Pressable, StatusBar, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Logo} from '../../components/Icons/Logo';
import {TextPoppins} from '../../components/Text/TextPoppins';
import {styles} from './styles';

export const Register = () => {
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
          Silahkan daftar untuk melanjutkan baca
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
            style={[styles.input, styles.inputName]}
            placeholder="Nama Pengguna"
            placeholderTextColor="#939393"
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
          Sudah punya akun?{' '}
          <Link to="/Login" style={styles.register}>
            Masuk
          </Link>
        </TextPoppins>
        <Pressable style={styles.btnLogin}>
          <TextPoppins style={styles.textBtnLogin} fontWeight={500}>
            Daftar
          </TextPoppins>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
