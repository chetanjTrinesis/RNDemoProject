import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

class Page2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.page}>{`First Name: ${this.props.myUser.firstName}`}</Text>
        <Text style={styles.page}>{`Last Name: ${this.props.myUser.lastName}`}</Text>
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
const ReduxConnectedComponent = connect((state) => ({ myUser: state.user }), {})(Page2);
export default ReduxConnectedComponent;
