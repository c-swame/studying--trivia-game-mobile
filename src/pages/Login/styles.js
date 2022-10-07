import { StyleSheet, Dimensions } from "react-native";

const buttonDefault = {
  justifyContent: 'space-evenly',
  alignContent: 'center',
  alignItems: 'center',
  margin: 5,
}

export default StyleSheet.create({
  componentBody: {
    backgroundColor: '#FFB834',
    paddingBottom: Dimensions.get('window').height * 0.02,
    // paddingTop: Dimensions.get('window').height * 0.02,
  },

  headerImageContainer: {
    backgroundColor: 'black'
  },

  headerImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },

  loginFormContainer: {
    backgroundColor: 'black',
    alignContent: 'center',
    alignItems: 'center',
  },

  input: {
    margin: 5,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.05,
    fontSize: Dimensions.get('window').height * 0.03,
    border: '2px white solid',
    borderRadius: 7,
    backgroundColor: 'white',
    // color: 'white',
  },

  button: {
    default: {
      backgroundColor: '#FFB834',
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.03,
      alignContent: 'center',
      alignItems: 'center',
      margin: 5,
    },

    small: {
      backgroundColor: '#FFB834',
      width: Dimensions.get('window').width * 0.5,
      height: Dimensions.get('window').height * 0.03,
      alignContent: 'center',
      justifyContent: 'space-evenly',
      margin: 5,
    },

    large: {
      ...buttonDefault,
      backgroundColor: '#FFB834',
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.03,
      justifyContent: 'space-evenly',
      alignContent: 'center',
      alignItems: 'center',
      margin: 5,
    },
  },

  buttonsContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
})
