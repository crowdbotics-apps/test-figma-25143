import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings216522Navigator from '../features/Settings216522/navigator';
import UserProfile216515Navigator from '../features/UserProfile216515/navigator';
import Settings216514Navigator from '../features/Settings216514/navigator';
import Settings216512Navigator from '../features/Settings216512/navigator';
import SignIn2216510Navigator from '../features/SignIn2216510/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings216522: { screen: Settings216522Navigator },
UserProfile216515: { screen: UserProfile216515Navigator },
Settings216514: { screen: Settings216514Navigator },
Settings216512: { screen: Settings216512Navigator },
SignIn2216510: { screen: SignIn2216510Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
