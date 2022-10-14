import React from "react";
import { createStackNavigator,  CardStyleInterpolators} from "@react-navigation/stack";

import HomeView from '../view/HomeView';
import ModalInfo from '../components/ModalInfo';
import ModalOptions from '../components/ModalOptions'; 
import PageOne from './pages/PageOne';

const Stack = createStackNavigator();

function Routes(){

    return(
        <Stack.Navigator initialRouteName='HomeView' screenOptions={{
          headerShown: false, gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
          <Stack.Screen name="HomeView" component={HomeView} />
          <Stack.Screen name="PageOne" component={PageOne} />
          <Stack.Screen name="ModalInfo" component={ModalInfo}/>
          <Stack.Screen name="ModalOptions" component={ModalOptions} />
        </Stack.Navigator>
    )
}

export default Routes;