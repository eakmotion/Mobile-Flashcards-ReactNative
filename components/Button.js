import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Button = ({ children, onPress, textOnly, style = {} }) => {
  console.log(style);
  const styleButton = textOnly ? styles.textButton : [ styles.button, style ];
  const styleText = textOnly ? [ styles.textButtonText, style ] : styles.buttonText;

  return (
    <TouchableOpacity style={styleButton} onPress={onPress}>
      <Text style={styleText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button         : {
    alignSelf     : 'center',
    backgroundColor: Colors.buttonBackground,
    borderRadius  : 4,
    margin        : 10,
    padding       : 15,
    paddingLeft   : 30,
    paddingRight  : 30,
    shadowRadius  : 3,
    shadowOpacity : 0.8,
    shadowColor   : Colors.textPrimary,
    shadowOffset  : {
      height : 3,
      width  : 0
    }
  },
  buttonText     : {
    color    : Colors.buttonText,
    fontSize : 25
  },
  textButton     : {
    alignSelf    : 'center',
    borderRadius : 4,
    padding      : 13,
    margin       : 10
  },
  textButtonText : {
    color: Colors.textPrimary,
    fontSize : 25
  }
});

export default Button;
