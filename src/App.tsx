import * as React from 'react';
import { Provider } from 'react-redux';
import MainScreen from './screens/MainScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '@store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <MainScreen />
                </SafeAreaProvider>
            </Provider>
        );
    }
}
