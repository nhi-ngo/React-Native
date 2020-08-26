import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import defaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
};

const renderListItem = (listLength, itemsData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemsData.index}:</BodyText>
    <BodyText>{itemsData.item}</BodyText>
  </View>
);

const GameScreen = ({ userInput, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userInput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  // const [rounds, setRounds] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userInput) {
      onGameOver(pastGuesses.length);
    }
  }, [userInput, onGameOver, currentGuess, pastGuesses.length]);

  const onNextGuess = direction => {
    if (
      (direction === 'lower' && currentGuess < userInput) ||
      (direction === 'greater' && currentGuess > userInput)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds(currentRound => currentRound + 1);
    setPastGuesses(curPastGuesses => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Computer's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => onNextGuess('lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={() => onNextGuess('greater')}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          data={pastGuesses}
          renderItem={renderListItem.bind(null, pastGuesses.length)}
          keyExtractor={item => item} // the number itself is a key. keyExtractor only accepts string values.
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: 400,
    maxWidth: '90%',
  },
  listContainer: {
    flex: 1, // to make it scroll on Android, iOs would scroll regardless
    width: '60%',
    marginTop: 15,
  },
  listItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GameScreen;
