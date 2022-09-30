import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as Progress from 'react-native-progress';
import HomeScreen from './components/HomeScreen/HomeScreen';
import QuizScreen from './components/QuizScreen/QuizScreen';
import StatsScreen from './components/StatScreen/StatsScreen';
import SettingsScreen from './components/SettingsScreen/SettingsScreen';
import AboutScreen from './components/AboutScreen/AboutScreen';
import OrderedEntries from './assets/data/QuizEntries';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { persistor } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { RotateColor } from './redux/slices/settings'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './redux/store';
import { SetNewQuiz } from './redux/slices/quiz';
import { Colors } from './redux/slices/settings';
import { Platform } from 'react-native';



const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>  
      <App />
       </PersistGate>  
    </Provider>
  )
}

function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });
  const dispatch = useDispatch();

  const newQuiz = useSelector(state => state.quiz.newQuiz);
  const randomize = useSelector(state => state.settings.randomize);
  const audio = useSelector(state => state.settings.audio);
  const [Entries, setEntries] = React.useState(OrderedEntries);


  useEffect(() => {
    if (newQuiz) {
      dispatch(SetNewQuiz(false));
      if (randomize) {
        console.log('here')
        const shuffledEntries = shuffle(OrderedEntries);
        console.log(shuffledEntries[0])
        setEntries(shuffledEntries);
    }
      else {
        setEntries(OrderedEntries);
      }
    }
  },[newQuiz]);

  // whenever Entries changes, apply the change
    

  const totalCount = Entries.length;

  const shownQuestion = useSelector(state => state.quiz.shownQuestion)
  const [correctAnswers, setCorrectAnswers] = React.useState(Entries.map(({ correct }) => correct));
  // whenever Entries changes or correctAnswers changes, apply the change
  useEffect(() => {
    setCorrectAnswers(Entries.map(({ correct }) => correct));
  }, [Entries]);
  const colors = useSelector(Colors)


  const allColorsHelper = useSelector(state => state.settings.allColorsHelper)

  useEffect(() => { 
    dispatch(RotateColor()) }, [shownQuestion]);

  if (!fontsLoaded) {
    return <Progress.CircleSnail color={['red', 'green', 'blue']} />
  }

  return (
    <>
      <StatusBar style={(allColorsHelper == 1) ? "dark" : "light"} />
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
            {(props) => <HomeScreen  {...props} />}
          </Stack.Screen>

          <Stack.Screen name="QuizScreen" 
            options={{
              headerShown: (Platform.OS === 'web'),
              title: 'Quiz',
              headerStyle: {
                backgroundColor: colors.dark,
                borderBottomWidth: 0,
              },
              headerTintColor: colors.light,
              headerTitleStyle: {
                fontFamily: 'Poppins-Regular',
                fontSize: 40,
  
              },
            }}
          >
            {(props) => <QuizScreen {...props} totalCount={totalCount} correctAnswers={correctAnswers}
                          shownQuestion={shownQuestion} Entries={Entries} />}
          </Stack.Screen>

          <Stack.Screen name="StatsScreen" 
            options={{
              headerShown: (Platform.OS === 'web'),
              title: 'Statistics',
              headerStyle: {
                backgroundColor: colors.dark,
                borderBottomWidth: 0,
              },
              headerTintColor: colors.light,
              headerTitleStyle: {
                fontFamily: 'Poppins-Regular',
                fontSize: 40,
  
              },
            }}
          >
            {(props) => <StatsScreen {...props} correctAnswers={correctAnswers} />}
          </Stack.Screen>

          <Stack.Screen name="SettingsScreen" 
            options={{
              headerShown: (Platform.OS === 'web'),
              title: 'Settings',
              headerStyle: {
                backgroundColor: colors.dark,
                borderBottomWidth: 0,
              },
              headerTintColor: colors.light,
              headerTitleStyle: {
                fontFamily: 'Poppins-Regular',
                fontSize: 40,
  
              },
            }}

          >
            {(props) =>  <SettingsScreen {...props} />}
          </Stack.Screen>

          <Stack.Screen name="AboutScreen" 
          options={{
            headerShown: (Platform.OS === 'web'),
            title: 'About',
            headerStyle: {
              backgroundColor: colors.dark,
              borderBottomWidth: 0,
            },
            headerTintColor: colors.light,
            headerTitleStyle: {
              fontFamily: 'Poppins-Regular',
              fontSize: 40,

            },
          }}

          
          >
            {(props) =>  <AboutScreen {...props} />}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )


}

export default AppWrapper;

// From SO: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  const newArray = array.slice();
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }
  return newArray;
};