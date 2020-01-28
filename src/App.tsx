import * as React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '@store';
import { TabNavigation } from '@navigation';
import { UserProvider } from '@context/userContext';

const App = () => {
    return (
        <Provider store={store}>
            <UserProvider value={{ test: 'asdfasdfdas' }}>
                <SafeAreaProvider>
                    <TabNavigation />
                </SafeAreaProvider>
            </UserProvider>
        </Provider>
    );
};

export default App;
