import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Page1 extends React.Component {
  didClick = () => {
    this.props.navigation.navigate("page2", { text: "Chetan" });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.page} onPress={this.didClick}>
          Page 1
        </Text>
      </View>
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
  page: {
    fontSize: 20,
    color: "red",
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
