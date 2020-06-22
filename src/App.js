import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import store from "./store";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "Hello World!",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Provider store={store()}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="homepage" component={Page1} />
            <Stack.Screen name="page2" component={Page2} />
            <Stack.Screen name="page3" component={Page3} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

// function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: 'lightgray',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Hello World!</Text>
//     </View>
//   );
// }

// const App = () => (
//   <View
//     style={{
//       backgroundColor: 'lightgray',
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//     <Text>{textValue}</Text>
//   </View>
// );

export default App;
