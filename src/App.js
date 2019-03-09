
import { createStackNavigator, createAppContainer } from "react-navigation";


import LevelSelection from './screens/LevelSelection';
import Game from './screens/Game';

const AppNavigator = createStackNavigator(
  {
    game: Game,
    levelSelection: LevelSelection
  },
  {
    initialRouteName: 'levelSelection'
  }
);

export default createAppContainer(AppNavigator);