import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { MainScreen, SubScreen } from '@screen';
import { StatusBar } from 'react-native';
import { useTodo } from '@hook/useTodo';
import AsyncStorage from '@react-native-community/async-storage';

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

const TabNavigation = () => {
    const { useSetTodo } = useTodo();

    React.useEffect(() => {
        AsyncStorage.getItem('todo').then(res => {
            res && useSetTodo(JSON.parse(res));
        });
    }, []);
    
    return (
        <>
            <StatusBar />
            <MainNav />
        </>
    );
};

export default TabNavigation;
