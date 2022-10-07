import React from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";

import styles from './styles'

export default function Login({ navigation }) {
  return (
    <View style={styles.componentBody}>
      <View style={styles.headerImageContainer}>
        <Image
        style={styles.headerImage}
          source={require('../../assets/images/trivia-logo.gif')}
        />
      </View>

      <View style={styles.loginFormContainer}>
        <TextInput
          style={styles.input}
        />
        <TextInput
          style={styles.input}
        />
        <Pressable
          title="Start"
          style={styles.button.large}
          onPress={ () => {
            navigation.navigate('Game')
            }
          }
        >
          <Text>Start</Text>
        </Pressable>
      </View>

      <View style={styles.buttonsContainer}>
      <Pressable
          title="Settings"
          style={{ ...styles.button.large, backgroundColor: '#2196f3' }}
          onPress={ () => {
            navigation.navigate('Settings')
            }
          }
        >
          <Text>Settings</Text>
        </Pressable>

        <Pressable
          title="Ranking"
          style={{ ...styles.button.large, backgroundColor: '#3f51b5'}}
          onPress={ () => {
            navigation.navigate('Game')
            }
          }
        >
          <Text>Ranking</Text>
        </Pressable>
      </View>
    </View>
  )
}

// <Stack
//         direction="column"
//         spacing={ 6 }
//         sx={ { bgcolor: '#FFB834',
//           alignItems: 'center',
//           height: '100vh' } }
//       >
//         <Container sx={ { bgcolor: 'black', minWidth: '100vw' } }>
//           <Box
//             className="image-container"
//             sx={ { backgroundImage: `url(${triviaLogo})`,
//               backgroundSize: 'cover',
//               boxShadow: '25px 25px 50px 0 black inset , -25px -25px 50px 0 black inset',
//               mx: 'auto',
//               height: '26vw',
//               width: '50vw' } }
//           />
//         </Container>

//         <Paper
//           elevation={ 10 }
//           sx={ { mx: 'auto', width: 1 / 2, py: 1, px: 4 } }
//         >
//           <form onSubmit={ this.handleSubmit }>
//             <Stack direction="row" spacing={ 2 } sx={ { my: 4 } }>
//               <TextField
//                 id="outlined-basic"
//                 label="Name"
//                 variant="outlined"
//                 size="small"
//                 name="name"
//                 value={ name }
//                 onChange={ this.handleChange }
//                 sx={ { flex: 2 } }
//                 inputProps={ { 'data-testid': 'input-player-name' } }
//                 error={ name === '' && nameChanged }
//                 helperText={ name === '' && nameChanged ? 'Please insert a name' : '' }
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="E-mail"
//                 variant="outlined"
//                 size="small"
//                 name="email"
//                 value={ email }
//                 onChange={ this.handleChange }
//                 sx={ { flex: 3 } }
//                 inputProps={ { 'data-testid': 'input-gravatar-email' } }
//                 error={ emailChanged && (email === '' || !validateEmail(email)) }
//                 helperText={ handleEmailErrorTxt() }
//               />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="success"
//                 size="large"
//                 disabled={ isDisabled }
//                 sx={ { flex: 1 } }
//                 data-testid="btn-play"
//               >
//                 Play
//               </Button>
//             </Stack>

//           </form>
//         </Paper>




// ********************************
//         <Stack direction="row" spacing={ 4 }>
//           <Button
//             component={ Link }
//             to="/settings"
//             type="button"
//             variant="contained"
//             size="large"
//             data-testid="btn-settings"
//           >
//             Settings
//           </Button>
//           <Button
//             component={ Link }
//             to="/ranking"
//             type="button"
//             variant="contained"
//             size="large"
//             color="secondary"
//           >
//             Ranking
//           </Button>
//         </Stack>
//       </Stack>