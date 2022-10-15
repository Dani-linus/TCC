import React from "react";
import { createStackNavigator,  CardStyleInterpolators} from "@react-navigation/stack";
import HomeView from './Home';
import ModalInfo from '../components/ModalInfo';
import ModalOptions from '../components/ModalOptions'; 
import PageOne from './Page01';
import PageTwo from './Page02';
import PageThree from './Page03';
import PageFour from './Page04';

const Stack = createStackNavigator();

function Routes(){

    return(
        <Stack.Navigator initialRouteName='HomeView' screenOptions={{
          headerShown: false, gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
          <Stack.Screen name="HomeView" component={HomeView} />
          <Stack.Screen name="ModalInfo" component={ModalInfo}/>
          <Stack.Screen name="ModalOptions" component={ModalOptions} />
          <Stack.Screen name="PageOne" component={PageOne} />
          <Stack.Screen name="PageTwo" component={PageTwo} />
          <Stack.Screen name="PageThree" component={PageThree} />
          <Stack.Screen name="PageFour" component={PageFour} />
        </Stack.Navigator>
    )
}

export default Routes;