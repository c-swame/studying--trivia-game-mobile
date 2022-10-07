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

  headerContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  // headerImageContainer: {
  //   width: Dimensions.get('window').width / 2,
  //   height: Dimensions.get('window').height * 0.05,
  // },

  headerImage: {
    // width: '100%',
    // height: '100%',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 6,
  },

  gameSectionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignContent: 'center',
    alignItems: 'center',
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
      backgroundColor: '#880e4f',
      width: Dimensions.get('window').width * 0.5,
      height: Dimensions.get('window').height * 0.03,
      alignContent: 'center',
      justifyContent: 'center',
      margin: 5,
    },

    large: {
      ...buttonDefault,
      backgroundColor: '#FFB834',
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.03,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      margin: 5,
    },

    correct: {
      border: '2px solid green',
      backgroundColor: 'green'
    },

    incorrect: {
      border: '2px solid red',
      backgroundColor: 'red'
    },

    selected: {
      transform: [{ scale: 1.4 }],
      margin: 10,
    },

    disabled: {
      opacity: 0.4,
    },
  },
})
