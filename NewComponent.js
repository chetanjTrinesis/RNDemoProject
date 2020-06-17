import React from 'react';
import {Text} from 'react-native';

const NewComponent = (props) => (
  <Text style={{backgroundColor: props.color}}>{props.value}</Text>
);

export default NewComponent;
