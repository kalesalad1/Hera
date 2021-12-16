import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from '../../App/Screens/login/loginScreen'
import signUp from '../../App/Screens/SignupPage/signUp'
import WelcomeScreen from '../../App/Screens/WelcomePage/WelcomeScreen.js'



const Navigator = createStackNavigator(
  {
    Login: {screen: login},
    Welcome: {screen: WelcomeScreen},
    SignUp: {screen: signUp},
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none'
  }
);



export default createAppContainer(Navigator);
