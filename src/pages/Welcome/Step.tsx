import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, View} from 'react-native';
import {ArrowRight} from '../../components/Icons/ArrowRight';
import {TextPoppins} from '../../components/Text/TextPoppins';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles';

interface Props {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  step: 1 | 2 | 3;
  activeStep: 1 | 2 | 3;
  title: string;
  subtitle: string;
  illustration: () => JSX.Element;
}

export const Step = ({
  activeStep,
  illustration: Illustration,
  setStep,
  step,
  title,
  subtitle,
}: Props) => {
  const navigation = useNavigation();

  const onSkip = async () => {
    await AsyncStorage.setItem('isWelcome', 'false');
    // @ts-ignore
    navigation.navigate('Login');
  };

  const onNext = async () => {
    console.log(step);
    if (step <= 2) {
      return setStep((step + 1) as 1 | 2 | 3);
    }
    await AsyncStorage.setItem('isWelcome', 'false');
    // @ts-ignore
    navigation.navigate('Login');
  };

  return (
    <View style={styles.wrapper}>
      {step !== 3 ? (
        <Pressable onPress={onSkip}>
          <TextPoppins style={styles.skip}>Skip</TextPoppins>
        </Pressable>
      ) : null}
      <View style={styles.illustration}>
        <Illustration />
        <TextPoppins fontWeight={500} style={styles.title}>
          {title}
        </TextPoppins>
        <TextPoppins style={styles.description}>{subtitle}</TextPoppins>
      </View>
      <View style={styles.bottom}>
        <View style={styles.dotWrapper}>
          <Pressable onPress={() => setStep(1)}>
            <View style={activeStep === 1 ? styles.dotActive : styles.dot} />
          </Pressable>
          <Pressable onPress={() => setStep(2)}>
            <View style={activeStep === 2 ? styles.dotActive : styles.dot} />
          </Pressable>
          <Pressable onPress={() => setStep(3)}>
            <View style={activeStep === 3 ? styles.dotActive : styles.dot} />
          </Pressable>
        </View>
        <Pressable style={styles.buttonNext} onPress={onNext}>
          <ArrowRight />
        </Pressable>
      </View>
    </View>
  );
};
