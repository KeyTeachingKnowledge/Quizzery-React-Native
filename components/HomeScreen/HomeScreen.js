import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../redux/slices/settings';
import { SetComingFromHome } from '../../redux/slices/settings';
import { useSelector, useDispatch } from 'react-redux';
export default function HomeScreen({ navigation }) {
   const quotesList = [
      "“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”",
      "“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”",
      '“One learns from books and example only that certain things can be done. Actual learning requires that you do those things.”',
      '“You don’t understand anything until you learn it more than one way.”',
      "“Spoon feeding in the long run teaches us nothing but the shape of the spoon.”",
      "“Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.”",
      "“The beautiful thing about learning is nobody can take it away from you.”",
      "“Tell me and I forget, teach me and I may remember, involve me and I learn.” ",
      "“Study without desire spoils the memory, and it retains nothing that it takes in.”",
      "“If you think education is expensive, try estimating the cost of ignorance.”",
      "“I never learned from a man who agreed with me.”",
      "“Curiosity is the wick in the candle of learning.”"
   ]
   const authorList = ["Dr. Seuss", "Albert Einstein", "Frank Herbert", "Marvin Minsky", "E. M. Forster", "Henry Ford", "B.B. King", "Benjamin Franklin", "Leonardo da Vinci", "Howard Gardner", "Robert A. Heinlein", "William Arthur Ward"]
   const dispatch = useDispatch();
   const [randomQuoteIndex, setRandomQuoteIndex] = useState(0);
   const colors = useSelector(Colors)
   const setComingFromHome = (payload) => dispatch(SetComingFromHome(payload))
   useEffect(() => {
      const interval = setInterval(() => {
         setRandomQuoteIndex(Math.floor(Math.random() * quotesList.length));
      }, 12500);
      
      return () => clearInterval(interval);
    }, []);



   return (
      <View style={[styles.container, {backgroundColor: colors.dark}]}>
         <View style={styles.logoContainer}>
            <Text style={[styles.logo, { color: colors.light }]}>
               Quizzery
            </Text>
            <Text style={[styles.logo, { color: colors.light, fontSize: 20, fontFamily: 'Poppins-Bold' }]}>
               Idioms Edition
            </Text>
         </View>
         <View style={styles.quotesContainer}>
            <Text style={[styles.quotesText, {color: colors.light}]}>
               {quotesList[randomQuoteIndex]}
               {"\n"}
               —{authorList[randomQuoteIndex]}
              
            </Text>
         </View>
         <View style={[styles.playContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
            <TouchableOpacity>
               <Text style={[styles.playText, { color: colors.dark, }]} onPress={
                  ()=> navigation.navigate('QuizScreen')}>
                  Play
               </Text>
            </TouchableOpacity>
         </View>
         <View style={[styles.playContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
            <TouchableOpacity>
               <Text style={[styles.playText, { color: colors.dark, }]} onPress={()=> {
                  navigation.navigate('StatsScreen')
                  setComingFromHome(true) }
                  }>
                  My Statistics
               </Text>
            </TouchableOpacity>
         </View>
         <View style={[styles.playContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
            <TouchableOpacity>
               <Text style={[styles.playText, { color: colors.dark, }]} onPress={()=> navigation.navigate('SettingsScreen')}>
                  Settings
               </Text>
            </TouchableOpacity>
         </View>
         <View style={[styles.playContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
            <TouchableOpacity>
               <Text style={[styles.playText, { color: colors.dark, }]} onPress={()=> navigation.navigate('AboutScreen')}>
                  About
               </Text>
            </TouchableOpacity>
         </View>

      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,

   },

   logo: {
      fontSize: 70,
      fontFamily: 'Poppins-ExtraBoldItalic',
      textAlign: 'center',
   },
   logoContainer: {
      marginTop: 100,
      marginBottom: 30,
      marginHorizontal: 20
   },
   quotesContainer: {
      marginHorizontal: 30,
      marginBottom: 20,
      maxHeight: 110,
      minHeight: 110
   },
   quotesText: {
      fontSize: 15,
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
   },
   playContainer: {
      minWidth: '90%',
      borderWidth: 2,
      marginHorizontal: 20,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10
   },
   playText: {
      fontFamily: 'Poppins-Bold',
      fontSize: 17,
      textAlign: 'center'
   }

});

