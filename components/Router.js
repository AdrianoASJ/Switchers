import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./Home";

const MainNavigator = createStackNavigator({
  Home: { screen: Home }
});

const Router = createAppContainer(MainNavigator);

export default Router;
