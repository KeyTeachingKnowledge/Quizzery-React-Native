import React from "react";
import { Image, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const EvalPopUp = ({ modalVisible, setModalVisible, isCorrect, explanation, referTo, setCurrentQuestion, setShownQuestion, currentQuestion, totalCount, setIsCorrect, setSelectedChoice, selectedChoice, setSelectedChoices, selectedChoices, tokens, setTokens, correctAnswers, isTraversing, shownQuestion, colors }) => {
  const letters = ["A", "B", "C", "D"];
  const motivation = ["keep it up!", "you're doing great!", "Great Job!", "You're on fire!", "Good on you!", "There you go!", "Bravo!"];
  const [motivationIndex, setMotivationIndex] = React.useState(0);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {backgroundColor: colors.light, borderColor: 'white'}]}>
            {(isCorrect == 1) ? 
            (
              <>
                <Image style={styles.checkIcon} source={require('../../assets/check-icon.png')}></Image>
                <Text style={[styles.modalText, {color: colors.dark, fontFamily: 'Poppins-Bold', fontSize: 19 }]}>{(!isTraversing)?"That's correct!":"That was correct!"}</Text>
                {isTraversing&&
                <>
                 <Text style={[styles.modalText, {color: colors.dark,}]}>
                 <Text style={{ fontFamily: 'Poppins-Bold' }}>Justification:{"\n"} </Text>
                 <Text>{explanation}</Text>
               </Text>
               {(referTo)?
               <Text style={[styles.modalText, {color: colors.dark}]}>
                <Text style={{ fontFamily: 'Poppins-Bold' }}>Refer to:{"\n"}</Text>
                <Text>{referTo}</Text>
              </Text>:null
              }
              </>
              }
                {!isTraversing && <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 17, color: colors.dark }}>{motivation[motivationIndex]}</Text>}
              </>
            ) 
            :
            ( 
            <>
              <Image style={styles.checkIcon} source={require('../../assets/cross-icon.png')}></Image>
              <Text style={[styles.modalText, {color: colors.dark}, { fontFamily: 'Poppins-Bold', fontSize: 19 }]}>{(!isTraversing)?"That isn't correct!":"That wasn't correct!"}</Text>
              <Text style={{ color: colors.dark, fontFamily: 'Poppins-Regular', fontSize: 17 }}><Text style={{ fontFamily: 'Poppins-Bold', fontSize: 17 }}>{letters[correctAnswers[shownQuestion] - 1]}</Text> is the correct answer.</Text>
              <Text style={[styles.modalText, {color: colors.dark}]}>
                <Text style={{ fontFamily: 'Poppins-Bold' }}>Justification:{"\n"} </Text>
                <Text>{explanation}</Text>
              </Text>
              {(referTo)?
              <Text style={[styles.modalText, {color: colors.dark}]}>
                <Text style={{ fontFamily: 'Poppins-Bold' }}>Refer to:{"\n"}</Text>
                <Text>{referTo}</Text>
              </Text>:null
              }
              </>

              )}
            <Pressable
              style={[styles.submitContainer, {backgroundColor: colors.dark, borderColor: colors.light}]}
              onPress={() => {
                setModalVisible(!modalVisible)
                if (!isTraversing && (currentQuestion < totalCount - 1) ) {
                  setCurrentQuestion((currentQuestion + 1))
                  setShownQuestion((currentQuestion + 1))
                  if (isCorrect) setTokens(tokens + 1)
                  setIsCorrect(-1);
                  setSelectedChoices([...selectedChoices, selectedChoice])
                  setSelectedChoice(-1);
                  setMotivationIndex(Math.floor(Math.random() * motivation.length))
                }
                if ( currentQuestion == totalCount - 1){
                  setCurrentQuestion((currentQuestion + 1))
                  if (isCorrect) setTokens(tokens + 1)
                  setSelectedChoices([...selectedChoices, selectedChoice])
                }
              }}
            >
              <Text style={[styles.submitText, { color: colors.light }]}>
                {(!isTraversing && (currentQuestion != totalCount-1)) ? ("Next Question") : ("Okay")}
                </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    borderWidth:1,
    borderRadius: 28,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  submitContainer: {
    width: '90%',
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 14,
    padding: 10,
    marginVertical: 10
  },
  modalText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 17,
    textAlign: 'center'

  },
  submitText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    textAlign: 'center'

  },
  checkIcon: {
    width: 50,
    height: 50,
    marginTop: 10
  }

});

export default EvalPopUp;