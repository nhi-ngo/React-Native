import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

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

    <BodyText>Number of rounds: {roundsNumber} </BodyText>
    <BodyText>Input number was: {userNumber}</BodyText>
    <Button title="NEW GAME" onPress={onRestartGame} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default GameOverScreen;
