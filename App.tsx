/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TodoContainer from './components/Todo/TodoContainer';
import { TodoFormContextProvider } from './context/TodoFormContextProvider';

function App(): JSX.Element {

  return (
    <TodoFormContextProvider>
      <TodoContainer />
    </TodoFormContextProvider>

  )

}


export default App;
