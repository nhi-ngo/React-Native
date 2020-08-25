import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = ({ userNumber, roundsNumber, onRestartGame }) => (
  <View style={styles.screen}>
    <TitleText>The Game is Over!</TitleText>
    <View style={styles.imageContainer}>
      <Image
        fadeDuration={1000}
        // source={require('../assets/success.png')} // adding local image
        source={{
          uri:
            'https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>

    <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>
        You needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </BodyText>
    </View>

    <MainButton onPress={onRestartGame}>NEW GAME</MainButton>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'open-sans-regular',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
  },
  highlight: {
    color: colors.lightGreen,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
