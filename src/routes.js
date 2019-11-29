import { createStackNavigator } from 'react-navigation'

import Main from './pages/main'
import Product from './pages/product'

export default createStackNavigator(
  {
    Main,
    Product
  }, {
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: '300',
      flexGrow: 1,
      justifyContent: 'center',
      textAlign: 'center',
    },
    headerStyle: {
      backgroundColor: '#DA552E',
    },
    headerTintColor: "#FFF"
  }
})