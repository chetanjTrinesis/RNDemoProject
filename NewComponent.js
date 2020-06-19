import React from "react";
import { Text, View } from "react-native";

const NewComponentNoClick = ({ value, ...rest }) => (
  <View {...rest}>
    <Text>{value}</Text>
  </View>
);

const NewComponent = ({ value, ...rest }) => <Text {...rest}>{value}</Text>;

export { NewComponent, NewComponentNoClick };
