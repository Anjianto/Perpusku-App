import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Welcome} from './src/pages/Welcome';
import {Login} from './src/pages/Login';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Register} from './src/pages/Register';
import {Home} from './src/pages/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('isWelcome')
      .then(async value => {
        setIsWelcome(value !== 'false');
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => setIsReady(true));
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  });

  return isReady ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isWelcome ? 'Welcome' : 'Login'}
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator color="#0000ff" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default App;
