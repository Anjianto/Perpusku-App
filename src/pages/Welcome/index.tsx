import React, {useState} from 'react';
import {Step} from './Step';
import {Welcome1} from '../../components/Illustrations/Welcome1';
import {Welcome2} from '../../components/Illustrations/Welcome2';
import {Welcome3} from '../../components/Illustrations/Welcome3';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Welcome = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const StepWelcome = () => {
    switch (step) {
      case 2:
        return (
          <Step
            illustration={Welcome2}
            setStep={setStep}
            title="Baca buku yang sesuai dengan mood kamu"
            subtitle="Tersedia ratusan novel dengan berbagai genre yang tersedia"
            activeStep={2}
            step={step}
          />
        );
      case 3:
        return (
          <Step
            illustration={Welcome3}
            setStep={setStep}
            title="Bisa lanjut kapan saja"
            subtitle="Tersedia ratusan novel dengan berbagai genre yang tersedia"
            activeStep={3}
            step={step}
          />
        );
      default:
        return (
          <Step
            illustration={Welcome1}
            setStep={setStep}
            title="Membaca buku dengan Mudah"
            subtitle="Baca cerita favoritmu hanya dengan satu genggaman"
            activeStep={1}
            step={step}
          />
        );
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <StepWelcome />
    </SafeAreaView>
  );
};
