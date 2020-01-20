import * as React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '@store';
import { TabNavigation } from '@navigation';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <TabNavigation />
                </SafeAreaProvider>
            </Provider>
        );
    }
}
