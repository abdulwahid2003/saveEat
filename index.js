/**
 * @format
 */

    import {AppRegistry} from 'react-native';
    import App from './App';
    import {name as appName} from './app.json';
    import { Provider } from 'react-redux/es/exports';
    import store from './src/redux/store';
    import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
    import { productsApi } from './src/redux/query';
    const AppWithRedux = () => (
        
        <Provider store={store}>
       
            <App />
       
            </Provider>
      );
    AppRegistry.registerComponent(appName, () =>AppWithRedux
    );
