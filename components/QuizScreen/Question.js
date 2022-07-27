import { StyleSheet, Text, View } from 'react-native';

export default function Question({question, colors}) {

   return (
      <View style={[styles.questionContainer, {backgroundColor: colors.light, borderColor: colors.border}]}>
        <Text style={[styles.question, {color: colors.dark}]}>
          {question}
        </Text>
      </View>
   )
}


const styles = StyleSheet.create({
 
   questionContainer: {
     marginTop: 20,
     marginBottom: 30,
     marginHorizontal: 10,
     borderRadius: 15,
     paddingHorizontal: 10,
     paddingVertical: 25,
     borderWidth: 1.2,
     minWidth: '90%',
     maxWidth: '90%'
 
   },
   question: {
     fontSize: 17,
     fontFamily: 'Poppins-Bold',
   }
   
 });
 
