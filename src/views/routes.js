import React from "react";
import { createStackNavigator,  CardStyleInterpolators} from "@react-navigation/stack";
import HomeView from './Home';
import ModalInfo from '../components/ModalInfo';
import ModalOptions from '../components/ModalOptions'; 
import PageOne from './Page01';
import PageTwo from './Page02';
import PageThree from './Page03';
import PageFour from './Page04';
import PageFive from './Page05';
import PageSix from './Page06';
import PageSeven from './Page07';
import PageEight from './Page08';
import PageNine from './Page09';
import PageTen from './Page10';
import PageEleven from './Page11';
import PageTwelve from './Page12';
import PageThirteen from './Page13';
import PageFourteen from './Page14';
import PageFifteen from './Page15';


const Stack = createStackNavigator();

function Routes(){

    return(
        <Stack.Navigator initialRouteName='HomeView' 
          screenOptions={{
            headerShown: false, 
             gestureEnabled: false,
            // gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}>
          <Stack.Screen name="ModalOptions" component={ModalOptions} />
          <Stack.Screen name="ModalInfo" component={ModalInfo}/>
          <Stack.Screen name="HomeView" component={HomeView} />
          <Stack.Screen name="PageOne" component={PageOne} />
          <Stack.Screen name="PageTwo" component={PageTwo} />
          <Stack.Screen name="PageThree" component={PageThree} />
          <Stack.Screen name="PageFour" component={PageFour} />
          <Stack.Screen name="PageFive" component={PageFive} />
          <Stack.Screen name="PageSix" component={PageSix} />
          <Stack.Screen name="PageSeven" component={PageSeven} />
          <Stack.Screen name="PageEight" component={PageEight} />
          <Stack.Screen name="PageNine" component={PageNine} />
          <Stack.Screen name="PageTen" component={PageTen} />
          <Stack.Screen name="PageEleven" component={PageEleven} />
          <Stack.Screen name="PageTwelve" component={PageTwelve} />
          <Stack.Screen name="PageThirteen" component={PageThirteen} />
          <Stack.Screen name="PageFourteen" component={PageFourteen} />
          <Stack.Screen name="PageFifteen" component={PageFifteen} />
        </Stack.Navigator>
    )
}

export default Routes;