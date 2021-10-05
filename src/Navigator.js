import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './App/Screens/login/loginScreen'
import NewActScreen from './App/Screens/SignupPage/NewActScreen-Change.js'
import WelcomeScreen from './App/Screens/WelcomePage/WelcomeScreen.js'
import HomeScreen from './App/Screens/LoggedInHome/RegularModeScreen'




// if currentUser = null 
const Navigator = createStackNavigator(
  {
    Login: {screen: login},
    Welcome: {screen: WelcomeScreen},
    SignUp: {screen: NewActScreen},
    Home: {screen: HomeScreen}
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none'
  }
);



export default createAppContainer(Navigator);
