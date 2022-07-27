import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Question from './components/QuizScreen/Question';
import Choices from './components/QuizScreen/Choices';
import InfoBar from './components/QuizScreen/InfoBar';
import EvalPopUp from './components/QuizScreen/EvalPopUp';
import HomeScreen from './components/HomeScreen/HomeScreen';
import StatsScreen from './components/StatScreen/StatsScreen';
import SettingsScreen from './components/SettingsScreen/SettingsScreen';
import NavigationSection from './components/QuizScreen/NavigationSection';
import { correctChoiceContext } from './components/QuizScreen/contextStore';
import {darkColors, lightColors} from './assets/colors/colors';
import Entries from './assets/data/QuizEntries';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';


const Stack = createStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const totalCount = Entries.length;

  [tokens, setTokens] = useState(0);

  [profileName, setProfileName] = useState('Quizzery');

  [currentQuestion, setCurrentQuestion] = useState(0);
  [shownQuestion, setShownQuestion] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  const [isCorrect, setIsCorrect] = useState(-1)      // -1 means no answer selected, 0 means wrong, 1 means correct

  const [selectedChoice, setSelectedChoice] = useState(-1);
  const [selectedChoices, setSelectedChoices] = useState([]);

  const correctAnswers = Entries.map(({ correct }) => correct)

  const [colorIndex, setColorIndex] = useState(0);
  const [discoveryMode, setDiscoveryMode] = useState(false);

  const [finishFlag, setFinishFlag] = useState(false);

  const [comingFromHome, setComingFromHome] = useState(true);


  useEffect(() => {
    if(discoveryMode){
    setColorIndex((colorIndex + 1) % allColors.length)
    }
    
  }, [shownQuestion])


  const [allColors, setAllColors] = useState(lightColors);
  let colors = allColors[colorIndex];

  let isTraversing =  (shownQuestion != currentQuestion) 

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShownQuestion(0);
    setIsCorrect(-1);
    setSelectedChoice(-1);
    setSelectedChoices([]);
    setFinishFlag(false);
  }



  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <>
    <StatusBar style={(allColors == lightColors) ? "dark" : "light"} />
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="HomeScreen" options={{headerShown: false}}> 
        {(props) => <HomeScreen  {...props} colors={colors} setComingFromHome={setComingFromHome} />}
        </Stack.Screen>

        <Stack.Screen name="QuizScreen" options={{headerShown: false}}>
        {(props) => 

        <QuizScreen {...props} totalCount={totalCount} tokens={tokens} setTokens={setTokens} currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion} shownQuestion={shownQuestion} setShownQuestion={setShownQuestion}
        selectedChoice={selectedChoice} setSelectedChoice={setSelectedChoice} selectedChoices={selectedChoices}
        setSelectedChoices={setSelectedChoices} correctAnswers={correctAnswers} 
        allColors={allColors} setAllColors={setAllColors} colors = {colors} isTraversing={isTraversing}
        modalVisible={modalVisible} setModalVisible={setModalVisible} isCorrect={isCorrect} setIsCorrect={setIsCorrect} finishFlag={finishFlag}
        setFinishFlag={setFinishFlag} setComingFromHome={setComingFromHome}/>
        
        }
        </Stack.Screen>

        <Stack.Screen name="StatsScreen" options={{headerShown: false}}>
          { (props) =>
        <StatsScreen {...props} colors={colors} correctAnswers={correctAnswers} selectedChoices={selectedChoices} comingFromHome={comingFromHome} resetQuiz={resetQuiz}></StatsScreen>
          }
        </Stack.Screen>

        <Stack.Screen name="SettingsScreen" options={{headerShown: false}}>
        {
          (props) => 
          <SettingsScreen {... props} colors={colors} setAllColors={setAllColors} setColorIndex={setColorIndex} colorIndex={colorIndex} allColors={allColors} 
        discoveryMode={discoveryMode} setDiscoveryMode={setDiscoveryMode} lightColors={lightColors} darkColors={darkColors} />
        }
        </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    </>
  )
  
 
}

const QuizScreen = ({totalCount, tokens, setTokens, currentQuestion, setCurrentQuestion, shownQuestion, setShownQuestion,
selectedChoice, setSelectedChoice, selectedChoices, setSelectedChoices, correctAnswers,  allColors, colors, isTraversing, isCorrect, setIsCorrect, modalVisible, setModalVisible, navigation
, finishFlag, setFinishFlag, setComingFromHome}) => {
  
  return (
    <correctChoiceContext.Provider value={[isCorrect, setIsCorrect]}>
      <View style={[styles.container, { backgroundColor: colors.dark }]}>
        <StatusBar style={(allColors==lightColors)?"dark":"light"} />
        <InfoBar colors={colors} shownQuestion={shownQuestion} totalCount={totalCount} profileName={profileName} tokens={tokens} currentQuestion={currentQuestion} />
        <Question colors={colors} question={Entries[shownQuestion].Q} />
        <ScrollView>
          <Choices colors={colors} A0={Entries[shownQuestion].A0} A1={Entries[shownQuestion].A1} A2={Entries[shownQuestion].A2} A3={Entries[shownQuestion].A3}
            correct={Entries[shownQuestion].correct} selectedChoice={selectedChoice} setSelectedChoice={setSelectedChoice} isTraversing={isTraversing}
            selectedChoices={selectedChoices} shownQuestion={shownQuestion} setModalVisible={setModalVisible} correctAnswers={correctAnswers} />
          <NavigationSection navigation={navigation} isTraversing={isTraversing} isCorrect={isCorrect} colors={colors} setModalVisible={setModalVisible} setShownQuestion={setShownQuestion} currentQuestion={currentQuestion} 
          shownQuestion={shownQuestion} setComingFromHome={setComingFromHome}  totalCount={totalCount} setSelectedChoice={setSelectedChoice} finishFlag={finishFlag} setFinishFlag={setFinishFlag}/>
        </ScrollView>
        <EvalPopUp colors={colors} modalVisible={modalVisible} setModalVisible={setModalVisible} isCorrect={isCorrect} explanation={Entries[shownQuestion].explanation} referTo={Entries[shownQuestion].referTo}
          setCurrentQuestion={setCurrentQuestion} setShownQuestion={setShownQuestion} currentQuestion={currentQuestion} totalCount={totalCount} setIsCorrect={setIsCorrect} setSelectedChoice={setSelectedChoice}
          selectedChoice={selectedChoice} selectedChoices={selectedChoices} setSelectedChoices={setSelectedChoices} tokens={tokens} setTokens={setTokens} correctAnswers={correctAnswers}
          isTraversing={isTraversing} shownQuestion={shownQuestion} />
      </View>
    </correctChoiceContext.Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  submitContainer: {
    width: '90%',
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10
  },
  submitText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    textAlign: 'center'
  }

});