
import { StyleSheet, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../../redux/slices/settings';
import InfoBar from './subcomponents/InfoBar';
import Question from './subcomponents/Question';
import Choices from './subcomponents/Choices';
import  NavigationSection  from './subcomponents/NavigationSection';
import Entries from '../../assets/data/QuizEntries';
import EvalPopUp from './subcomponents/EvalPopUp';


export default QuizScreen = ({totalCount, correctAnswers, navigation, shownQuestion}) => {
  colors = useSelector(Colors)
  return (
      <View style={[styles.container, { backgroundColor: colors.dark }]}>
        <InfoBar  totalCount={totalCount} correctAnswers={correctAnswers} />
        <Question  question={Entries[shownQuestion].Q} />
        <ScrollView>
          <Choices  A0={Entries[shownQuestion].A0} A1={Entries[shownQuestion].A1} A2={Entries[shownQuestion].A2} A3={Entries[shownQuestion].A3}
            correct={Entries[shownQuestion].correct} 
             correctAnswers={correctAnswers} />
          <NavigationSection navigation={navigation}   
            totalCount={totalCount}  />
        </ScrollView>
        <EvalPopUp  explanation={Entries[shownQuestion].explanation} referTo={Entries[shownQuestion].referTo}
         totalCount={totalCount} 
           correctAnswers={correctAnswers}
          />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  submitContainer: {
    width: '90%',
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10
  },
  submitText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    textAlign: 'center'
  }

});