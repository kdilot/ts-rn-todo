import * as React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '@store';
import { TabNavigation } from '@navigation';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <TabNavigation />
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
