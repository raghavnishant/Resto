import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';


const navigator = createStackNavigator({

  Index: IndexScreen,
  ResultShow: ResultShowScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Businesses Search'
  }
});

export default createAppContainer(navigator);
