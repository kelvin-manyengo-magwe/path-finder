import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const DismissKeyBoard = ({ children }) => {
    return (
      <TouchableWithoutFeedback>
          {children}
      </TouchableWithoutFeedback>
    )
}
