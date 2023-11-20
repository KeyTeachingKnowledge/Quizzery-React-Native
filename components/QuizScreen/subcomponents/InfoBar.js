import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../../redux/slices/settings';
import { SetAccuracy } from '../../../redux/slices/stats';
export default function InfoBar({ totalCount, correctAnswers}){
  const dispatch = useDispatch();
  const shownQuestion = useSelector(state => state.quiz.shownQuestion)
  const colors = useSelector(Colors)
  const selectedChoices = useSelector(state => state.quiz.selectedChoices);
  let correctAnswersTrimmed = correctAnswers.slice(0, selectedChoices.length);
  let differenceArray = correctAnswersTrimmed.map(function (answer, i) {
    return answer - selectedChoices[i];
  })
  const [accuracy, setAccuracy] = [ useSelector(state => state.stats.accuracy), (payload)=> dispatch(SetAccuracy(payload))];
  useEffect(() => {
  if (selectedChoices.length > 0) {
    let acc = Math.ceil((differenceArray.filter(v => v === 0).length / selectedChoices.length) * 100)
    setAccuracy(acc);
  }}, [selectedChoices]);

   return (
     <View style={styles.infoBar}>
     <View>
       <Text style={[styles.infoItem,{backgroundColor: colors.light, color: colors.dark, borderColor: colors.border, marginLeft: 'auto'}]}> <Text style={styles.Q}>Question</Text> {shownQuestion+1}/{totalCount}</Text>
     </View>

     <View>
       <Text style={[styles.infoItem,{backgroundColor: colors.light, color: colors.dark, borderColor: colors.border, marginRight: 'auto'}]}>📈 {(accuracy=='-.0%')?('-'):(accuracy)}  </Text>
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
     width: '93%',
   },
   infoItem: {
     padding: 10,
     borderRadius: 20,
     borderWidth: 0.8,
     fontFamily: 'Poppins-Bold',
     marginHorizontal: 16
   },
 
   
 });
 