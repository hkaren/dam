import React from "react";
import {Provider} from "react-redux";

import MyApp from "./src/MyApp";
import store from "./src/store/Index";
import {Toast} from 'react-native-toast-message/lib/src/Toast';
//import AppGall from "./gall";


const App: React.FC = () => {

  return (
    <Provider store={store}>
        <MyApp/>
        <Toast />
    </Provider>
    // <AppGall />
  );
};

export default App;
