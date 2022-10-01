import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import ModalInfo from './src/assets/components/ModalInfo';
import ViewFrontCover from './src/assets/view/ViewFrontCover';

const Stack = createStackNavigator();

let PatrickHandCustomFont = {
  'PatrickHand': require('./src/assets/font/PatrickHand-Regular.ttf')
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(PatrickHandCustomFont);
    this.setState({ fontsLoaded: true });
  }

<<<<<<< HEAD
    //CARREGANDO A FONTE
    async componentDidMount() {
      this._loadFontsAsync();
    }
=======
  //CARREGANDO A FONTE PERSONALIZADA E O SOM AMBIENTE
  async componentDidMount() {
    this._loadFontsAsync();
  }
>>>>>>> 7e4fb9a50b5a29c80887b90a0d0e59d9bb1e86f9

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <NavigationContainer>
          <StatusBar hidden></StatusBar>
          <Stack.Navigator  initialRouteName='ViewFrontCover' screenOptions={{
            headerShown: false, gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}>
            <Stack.Screen name="ViewFrontCover" component={ViewFrontCover} />
            {/* <Stack.Screen name="Menu" component={Menu} /> */}
            {/* <Stack.Screen name="Loading" component={Loading} /> */}
            <Stack.Screen name="ModalInfo" component={ModalInfo} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}