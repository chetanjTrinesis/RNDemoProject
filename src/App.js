import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Page1 from "./Page1";
import Page2 from "./Page2";

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "Hello World!",
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    //4
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="homepage" component={Page1} />
          <Stack.Screen name="page2" component={Page2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

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
