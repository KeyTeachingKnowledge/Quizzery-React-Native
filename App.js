import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as Progress from 'react-native-progress';
import HomeScreen from './components/HomeScreen/HomeScreen';
import QuizScreen from './components/QuizScreen/QuizScreen';
import StatsScreen from './components/StatScreen/StatsScreen';
import SettingsScreen from './components/SettingsScreen/SettingsScreen';
import { lightColors } from './assets/colors/colors';
import Entries from './assets/data/QuizEntriesIdioms';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { RotateColor } from './redux/slices/settings'
import { PersistGate } from 'redux-persist/integration/react'
import { SetNewQuiz } from './redux/slices/quiz';

const Stack = createStackNavigator();

export default AppWrapper = () => {
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
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });
  const dispatch = useDispatch();

  const newQuiz = useSelector(state => state.quiz.newQuiz);
  useEffect(() => {
    if (newQuiz) {
      dispatch(SetNewQuiz(false));
      for (var i = Entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Entries[i], Entries[j]] = [Entries[j], Entries[i]];
    }
    }
  },[newQuiz]);

  const totalCount = Entries.length;

  const shownQuestion = useSelector(state => state.quiz.shownQuestion)

  const correctAnswers = Entries.map(({ correct }) => correct)



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

          <Stack.Screen name="QuizScreen" options={{ headerShown: false }}>
            {(props) => <QuizScreen {...props} totalCount={totalCount} correctAnswers={correctAnswers}
                          shownQuestion={shownQuestion} />}
          </Stack.Screen>

          <Stack.Screen name="StatsScreen" options={{ headerShown: false }}>
            {(props) => <StatsScreen {...props} correctAnswers={correctAnswers} />}
          </Stack.Screen>

          <Stack.Screen name="SettingsScreen" options={{ headerShown: false }}>
            {(props) =>  <SettingsScreen {...props} />}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )


}
