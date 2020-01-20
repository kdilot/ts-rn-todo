import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { MainScreen, SubScreen } from '@screen';
import { StatusBar } from 'react-native';

interface Props {}
interface State {}

const MainNav = createAppContainer(
    createMaterialTopTabNavigator(
        {
            Home: {
                screen: MainScreen,
            },
            Sub: {
                screen: SubScreen,
            },
        },
        {
            initialRouteName: 'Home',
            tabBarPosition: 'bottom',
            swipeEnabled: true,
        },
    ),
);

export default class TabNavigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <StatusBar />
                <MainNav />
            </>
        );
    }
}
