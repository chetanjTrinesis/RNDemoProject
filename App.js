import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import NewComponent from './NewComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'Hello World!',
    };
    console.log('1');
  }

  componentDidMount() {
    console.log('3');
    setTimeout(() => {
      this.setState({textValue: 'Changed Hello World!'});
      // alert('Hi');
    }, 4000);
  }

  componentWillUnmount() {
    //4
  }
  didClick = () => {
    alert('Hi');
  };

  render() {
    console.log('2');
    return (
      <View
        style={{
          backgroundColor: 'lightgray',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <NewComponent value="Chetan" color="white"></NewComponent>
        <NewComponent value="Chetan" color="red"></NewComponent>
        <TextInput></TextInput>
        <TouchableOpacity
          style={{height: 40, borderWidth: 1}}
          onPress={this.didClick}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
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
