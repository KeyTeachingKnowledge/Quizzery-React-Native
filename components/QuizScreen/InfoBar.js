import { StyleSheet, Text, View } from 'react-native';

export default function InfoBar({shownQuestion, totalCount, profileName, tokens, currentQuestion, colors}){
   return (
     <View style={styles.infoBar}>
     <View>
       <Text style={[styles.infoItem,{backgroundColor: colors.light, color: colors.dark, borderColor: colors.border}]}> <Text style={styles.Q}>Question</Text> {shownQuestion+1}/{totalCount}</Text>
     </View>

     <View>
       <Text style={[styles.infoItem,{backgroundColor: colors.light, color: colors.dark, borderColor: colors.border}]}>📈 {(currentQuestion == 0) ? 0 : parseInt(100 * tokens/(currentQuestion))}% </Text>
     </View>
   </View>
   )
 }

 const styles = StyleSheet.create({
  
   infoBar: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginTop: 40,
     width: '100%',
 
   },
   infoItem: {
     
     padding: 10,
     borderRadius: 20,
     borderWidth: 0.8,
     fontFamily: 'Poppins-Bold',
     marginHorizontal: 16
   },
 
   
  
   
 });
 