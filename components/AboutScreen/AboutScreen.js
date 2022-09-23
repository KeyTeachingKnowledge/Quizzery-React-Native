import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../redux/slices/settings';
import { ResetQuiz } from '../../redux/slices/quiz';
import { SetAccuracy } from '../../redux/slices/stats';
import { Platform } from 'react-native';


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

         <View style={[styles.settingContainer, { backgroundColor: colors.dark, borderColor: colors.light }]}>
            <Text style={[styles.settingText, { color: colors.light, }]} onPress={() => {
            }}>
               Have fun learning! Thank you for using the app.
            </Text>

         </View>



         <View style={[styles.settingContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
                  <TouchableOpacity onPress={ ()=>{ }}>
                     <Text style={[styles.settingText, { color: colors.dark, }]}>
                       Thank You
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

