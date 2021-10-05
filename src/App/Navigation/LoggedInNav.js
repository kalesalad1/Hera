import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/LoggedInHome/HomeScreen.js'




// if currentUser = null 
const Navigator = createStackNavigator(
  {
    Home: {screen: HomeScreen}
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);



export default createAppContainer(Navigator);
