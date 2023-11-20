import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../redux/slices/settings';
import { ResetQuiz } from '../../redux/slices/quiz';
import { SetAccuracy } from '../../redux/slices/stats';
import { Platform } from 'react-native';

export default function StatsScreen({ correctAnswers, navigation }) {
   const dispatch = useDispatch();
   const colors = useSelector(Colors);
   const comingFromHome = useSelector(state => state.settings.comingFromHome);
   const resetQuiz = () => dispatch(ResetQuiz());
   const selectedChoices = useSelector(state => state.quiz.selectedChoices);
   let correctAnswersTrimmed = correctAnswers.slice(0, selectedChoices.length);
   let differenceArray = correctAnswersTrimmed.map(function (answer, i) {
      return answer - selectedChoices[i];
   });
   const [accuracy, setAccuracy] = [ useSelector(state => state.stats.accuracy), (payload)=> dispatch(SetAccuracy(payload))];
   const [winningStreak, setWinningStreak] = useState('0');
   const [rank, setRank] = useState('-');
   useEffect(() => {
      if (selectedChoices.length > 0) {
         let acc = Math.ceil((differenceArray.filter(v => v === 0).length / selectedChoices.length) * 100)
         setAccuracy(acc);
         let longestStreak = 0
         let currStreak = 0
         let i = 0
         while (i < differenceArray.length) {
            if (differenceArray[i] == 0) {
               currStreak += 1
            }
            else {
               longestStreak = Math.max(longestStreak, currStreak)
               currStreak = 0
            }
            i++
         }
         setWinningStreak( Math.max(longestStreak, currStreak))

         if (acc < 10)
            setRank('Wood 🪵')
         else if (acc < 25)
            setRank('Iron 🪨')
         else if (acc < 35)
            setRank('Bronze 🔱')
         else if (acc < 45)
            setRank('Silver ⚓')
         else if (acc < 60)
            setRank('Gold 🎖')
         else if (acc < 70)
            setRank('Platinum 💠')
         else if (acc < 80)
            setRank('Diamond 💎')
         else if (acc < 95)
            setRank('Master 👑')
         else if (acc < 98)
            setRank('Professor 🎓')
         else
            setRank('Legend 🐉')
      }

   }, [selectedChoices])




   return (
      <View style={[styles.container, { backgroundColor: colors.dark }]}>
         {(Platform.OS !== 'web')&&<View style={styles.logoContainer}>
            <Text style={[styles.logo, { color: colors.light }]}>
               Statistics
            </Text>
         </View>}

         <View style={[styles.settingContainer, { backgroundColor: colors.dark, borderColor: colors.light }]}>
            <Text style={[styles.settingText, { color: colors.light, }]} onPress={() => {
            }}>
               Your Highest Accuracy is
            </Text>
            <Text style={[styles.settingText, { color: colors.light, fontSize: 50 }]} onPress={() => {
            }}>
              {(accuracy=='-.0%')?('-'):(accuracy)} 
            </Text>
         </View>

         <View style={[styles.settingContainer, { backgroundColor: colors.dark, borderColor: colors.light }]}>
            <Text style={[styles.settingText, { color: colors.light, }]} onPress={() => {
            }}>
               Your Longest Winning Streak is
            </Text>
            <Text style={[styles.settingText, { color: colors.light, fontSize: 50 }]} onPress={() => {
            }}>
               {winningStreak}
            </Text>
         </View>

         <View style={[styles.settingContainer, { backgroundColor: colors.dark, borderColor: colors.light }]}>
            <Text style={[styles.settingText, { color: colors.light, }]} onPress={() => {
            }}>
               Your Overall Rank is
            </Text>
            <Text style={[styles.settingText, { color: colors.light, fontSize: 50 }]} onPress={() => {
            }}>
               {rank}
            </Text>
         </View>

         <View style={[styles.settingContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
                  <TouchableOpacity>
                     <Text style={[styles.settingText, { color: colors.dark, }]} onPress={() => {
                        resetQuiz()
                        setAccuracy('-');
                        setWinningStreak('0');
                        setRank('-');
                     }}>
                        Reset Progress
                     </Text>
                  </TouchableOpacity>
               </View>

         {(!comingFromHome) ? (
            <>

               <View style={[styles.settingContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
                  <TouchableOpacity>
                     <Text style={[styles.settingText, { color: colors.dark, }]} onPress={() => {
                       navigation.navigate('HomeScreen')
                     }}>
                        Home
                     </Text>
                  </TouchableOpacity>
               </View>
            </>) : null}





      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,

   },
   logo: {
      fontSize: 40,
      fontFamily: 'Poppins-Regular',
      textAlign: 'left',
   },
   logoContainer: {
      marginTop: 50,
      marginBottom: 10,
      marginHorizontal: 20
   },


   settingContainer: {
      minWidth: '90%',
      borderWidth: 2,
      marginHorizontal: 20,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10
   },
   settingText: {
      fontFamily: 'Poppins-Bold',
      fontSize: 17,
      textAlign: 'center'
   }

});

