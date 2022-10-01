import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../redux/slices/settings';
import { ResetQuiz } from '../../redux/slices/quiz';
import { SetAccuracy } from '../../redux/slices/stats';
import { Platform } from 'react-native';
import { A } from '@expo/html-elements';



export default function AboutScreen({ correctAnswers, navigation }) {
   const colors = useSelector(Colors);
   const comingFromHome = useSelector(state => state.settings.comingFromHome);


   return (
      <View style={[styles.container, { backgroundColor: colors.dark }]}>
         {(Platform.OS !== 'web')&& <View style={styles.logoContainer}>
            <Text style={[styles.logo, { color: colors.light }]}>
               About
            </Text>
         </View>}

         <ScrollView style={[styles.settingContainer, { backgroundColor: colors.dark, borderColor: colors.light }]}>
            <Text style={[styles.settingText, { color: colors.light, }]} onPress={() => {
            }}>
<Text style={{fontFamily: 'Poppins-Bold', }}>KTK: Key Teaching Knowledge.</Text> Your ultimate practice app of English language teaching methodology and theory. Practice your teaching knowledge with the essential themes and issues related to TEFL/TESOL. 
{'\n'}{'\n'}
<Text style={{fontFamily: 'Poppins-Bold', }}>Got feedback?</Text> Help us improve the app by emailing your concerns to:  <A style={{textDecorationLine: 'underline'}} href="mailto:yobahmad@gmail.com">yobahmad@gmail.com</A> or Facebook: <A style={{textDecorationLine: 'underline'}} href="https://www.facebook.com/profile.php?id=100002042885144">Youssef Baahmad</A>
{'\n'}{'\n'}
<Text style={{fontFamily: 'Poppins-Bold', }}>Credits: </Text>{'\n'}
All content so far comes from the Moroccan Ministry of Education official teacher exams (2016-2021) with slight adaptations. Thanks to the teams who designed the exams.  
{'\n'}{'\n'}Thanks also go to the following S5 English Department students at the ENS (Ecole Normale Superieure, Rabat) whose efforts made this app see the day earlier than expected. Their dedicated collaborative work typing, editing and answering the exams has been valuable.   
{'\n'}{'\n'}
<Text style={{fontFamily: 'Poppins-Italic', textAlign: 'center'}}>
Ait Allal Chaimae{'\n'}
Amzil Nada{'\n'}
Brini Chaimae {'\n'}
Faiz Oumaima{'\n'}
Laghmiri Khawla{'\n'}
Laqibi Chaimae {'\n'}
Lasri Salma {'\n'}
Moushil Marwa {'\n'}
Naimi Laila {'\n'}
Ounaceur Mohamed.{'\n'}
</Text>
{'\n'}{'\n'}
Many thanks also go to the smart developer and designer, <Text style={{fontFamily: 'Poppins-Italic', }}>Essam Abdelghany</Text>. He is the mastermind behind developing this app and its website.
{'\n'}

            </Text>

         </ScrollView>


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
      maxHeight: '78%',
      borderWidth: 2,
      marginHorizontal: 20,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10
   },
   settingText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 17,
      textAlign: 'justify',
      padding: 5
   }

});

