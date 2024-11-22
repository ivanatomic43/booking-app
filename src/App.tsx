import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import Root from './Root';
import DateContextProvider from './context/DateContext';

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <DateContextProvider>
      <Root />
    </DateContextProvider>
  </Provider>
);
export default App;
