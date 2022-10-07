import React, {useState, useEffect} from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import styles from './styles';

// esssa função do token deve ser levada ao login e o token passado para cá através do contexto global ou outro metodo do react native equivalente ao local storage;
import fetchToken from '../../services/fetchToken';
import { getNewGameData } from '../../services/fetchQuestions';

const ONE_SECOND = 1000;

export default function Game({ navigation }) {
  const [timer, setTimer] = useState(30);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState('');
  const [gameData, setGameData] = useState([{}]);
  // !!!!! Depois adicionar os dados de category, type e difficult à interface
  // !!!!! levar isso acima para o estado global

  const isFocused = useIsFocused();

  useEffect(() => {
    const asyncCalls = async () => {
      if (!gameData[0]?.question) {
        const { token } = await fetchToken();
  
        const fetchedGameData = await getNewGameData({token, quantity: 5});
        setGameData(fetchedGameData.results);
      }
    };

    if (!isFocused){
      setGameData([{}]);
      setAnswered('')
    }

    asyncCalls();
  }, [isFocused]);
  
  // criar logica para o onPress abaixo, de forma que deixe apenas o elemento clicado com o destaque e como resposta e só depois de haver uma resposta ele permitir que você clique em "próxima" ou em "responder" (se responder; depois de responder trocar o botão para "próxima")
  const isTheCorrectAnswer = (option) => {
    if (option === gameData[currentQuestionIndex]?.correct_answer) return true;
    return false;
  }

  const getCurrentQuestion = () => {
    return gameData[currentQuestionIndex]?.question;
  }

  const getCurrentOptions = () => {
    const correctAnswer = gameData[currentQuestionIndex]?.correct_answer || '';
    const incorrectAnswers = gameData[currentQuestionIndex]?.incorrect_answers || [];
    const sortedOptions = ([...incorrectAnswers, correctAnswer]).sort();
    return sortedOptions;
  }

  // função que gera os intens na FlatList que gera nossas opções de resposta
  const renderAnswer = (element) => {
    let isDisabled = false;
    let elementStyle = styles.button.large;
    if (answered !== '' && element.item === gameData[currentQuestionIndex]?.correct_answer) elementStyle = {...elementStyle, ...styles.button.correct};
    if (answered !== '' && element.item !== gameData[currentQuestionIndex]?.correct_answer) elementStyle = {...elementStyle, ...styles.button.incorrect};
    if (answered === element.item) elementStyle = {...elementStyle, ...styles.button.selected};

    if(answered !== '') {
      isDisabled = true;
      elementStyle = {...elementStyle, ...styles.button.disabled}
    }

    return(
      <Pressable
      title={element.item}
      style={elementStyle}
      disabled={isDisabled}
      onPress={ () => {
        setAnswered(element.item)
      }}
      >
        <Text>
          {/* {`${element.index}. ${element.item}`} */}
          {element.item}
        </Text>
      </Pressable>
    )
  }

  const renderCurrentQuestionData = () => {
    
  }

  // retorno
  return (
    <View style={styles.componentBody}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImageContainer}>
            <Image
              style={styles.headerImage}
              source={require('../../assets/images/trivia-logo.gif')}
            />
          </View>
        </View>

        {gameData[0]?.question && currentQuestionIndex < gameData.length ? (
        <View style={styles.gameSectionContainer}>
          <Text>
            {getCurrentQuestion()}
          </Text>
          <FlatList
            data={getCurrentOptions()}
            renderItem={renderAnswer}
            keyExtractor={item => item}
          />

          <Pressable
            title="Next"
            style={styles.button.small}
            onPress={ () => {
              setCurrentQuestionIndex((currentQuestionIndex + 1))
              setAnswered('');
            }}
          >
            <Text style={{ color: 'white', justifyContent: 'center', display: 'flex', padding: 5 }}>
              Next
            </Text>
          </Pressable>

          <Pressable
            title="Logout"
            style={styles.button.small}
            onPress={ () => {
              navigation.navigate('Login');
            }}
          >
            <Text style={{ color: 'white', justifyContent: 'center', display: 'flex', padding: 5 }}>
              logout
            </Text>
          </Pressable>
        </View>)
        : <Text></Text>}

        {
          gameData.length === currentQuestionIndex
          ? (
          <View>
            <Pressable
              title="Logout"
              style={styles.button.small}
              onPress={ () => {
                navigation.navigate('Login');
              }}
            >
              <Text style={{ color: 'white', justifyContent: 'center', display: 'flex', padding: 5 }}>
                play again
              </Text>
            </Pressable>
            
            <Pressable
              title="Logout"
              style={styles.button.small}
              onPress={ () => {
                navigation.navigate('Login');
              }}
            >
              <Text style={{ color: 'white', justifyContent: 'center', display: 'flex', padding: 5 }}>
                ranking
              </Text>
            </Pressable>

            <Pressable
              title="Logout"
              style={styles.button.small}
              onPress={ () => {
                navigation.navigate('Login');
              }}
            >
              <Text style={{ color: 'white', justifyContent: 'center', display: 'flex', padding: 5 }}>
                logout
              </Text>
          </Pressable>
          </View>
          )
          : <Text></Text>
        }
    </View>
  )
}
