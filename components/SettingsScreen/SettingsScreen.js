import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {darkColors, lightColors} from '../../assets/colors/colors';
import { useDispatch, useSelector } from 'react-redux';
import { SetColorIndex } from '../../redux/slices/settings';
import { SetDiscoveryMode } from '../../redux/slices/settings';
import { SetAllColors} from '../../redux/slices/settings';
import { Colors } from '../../redux/slices/settings';
export default function SettingsScreen() {
   const colorCodes = ["Navy", "Blue Sky", "Purple Monarchy", "Toffee", "Orangica", "Pink Princess", "Deep Eclipse", "Moon Silver", "Lavender", "Pitch Black", "Blue Sailor", "Lime"];
   const dispatch = useDispatch();
   const [colorIndex, setColorIndex] = [ useSelector(state => state.settings.colorIndex), (payload)=> dispatch(SetColorIndex(payload))];
   const [discoveryMode, setDiscoveryMode] = [ useSelector(state => state.settings.discoveryMode), (payload)=> dispatch(SetDiscoveryMode(payload))];
   const [allColors, setAllColors] = [ useSelector(state => state.settings.allColors), (payload)=> dispatch(SetAllColors(payload))];
   const colors = useSelector(Colors)
   const shownQuestion = useSelector(state => state.quiz.shownQuestion)

   return (
      <View style={[styles.container, {backgroundColor: colors.dark}]}>
         <View style={styles.logoContainer}>
            <Text style={[styles.logo, { color: colors.light }]}>
               Settings
            </Text>
         </View>

         <View style={[styles.settingContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
            <TouchableOpacity>
               <Text style={[styles.settingText, { color: colors.dark, }]} onPress={() => { 
                  (allColors===lightColors) ? setAllColors(darkColors) : setAllColors(lightColors);
               }}>
                  Theme: {(allColors==lightColors) ? "Light" : "Dark"}
               </Text>
            </TouchableOpacity>
         </View>

         <View style={[styles.settingContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
            <TouchableOpacity>
               <Text style={[styles.settingText, { color: colors.dark, }]} onPress={() => { 
                  setDiscoveryMode(!discoveryMode);
               }}>
                  Discovery Mode: {(discoveryMode) ? "On" : "Off"}
               </Text>
            </TouchableOpacity>
         </View>

         <View opacity={(discoveryMode)? 0.8 : 1.0} style={[styles.settingContainer, { backgroundColor: colors.light, borderColor: colors.dark }]}>
            <TouchableOpacity>
               <Text style={[styles.settingText, { color: colors.dark, }]} onPress={() => { 
                  if(!discoveryMode) {
                  setColorIndex((colorIndex + 1)%(colorCodes.length))
                  }
                  }}>
                Color Pallete: {colorCodes[colorIndex]} 
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
      textAlign: 'left'
   }

});

