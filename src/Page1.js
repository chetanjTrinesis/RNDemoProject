import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { setUser, resetUser } from "./actions";

class Page1 extends React.Component {
  didClick = (pageName) => {
    this.props.setUser({
      firstName: "Sumeet",
      lastName: "Kale",
    });

    // this.props.navigation.navigate(pageName, { text: "Chetan" });
  };

  didReset = () => {
    this.props.resetUser();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.page}>This is Page 1</Text>
        <Text style={styles.page}>{`First Name: ${this.props.myUser.firstName}`}</Text>
        <Text style={styles.page}>{`Last Name: ${this.props.myUser.lastName}`}</Text>
        <Text style={styles.page} onPress={() => this.didClick("page2")}>
          Go to Page 2
        </Text>
        <Text style={styles.page} onPress={() => this.didReset()}>
          Go to Page 3
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

const ReduxConnectedComponent = connect((state) => ({ myUser: state.user }), { setUser, resetUser })(Page1);

export default ReduxConnectedComponent;
