import { createStackNavigator } from "react-navigation-stack";

import Timeline from "../screens/timeline"

import {headerStyle} from "../styles/global"

const screens = {
    Timeline: {
        screen: Timeline,
        navigationOptions: {headerStyle: headerStyle}
    }
}

const TimelineStack = createStackNavigator(screens);

export default TimelineStack