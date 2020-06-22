import React from "react";
import { View, StyleSheet, Text } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.page}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          {`Page 2 ${this.props.route.params.text}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    fontSize: 20,
    color: "blue",
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
