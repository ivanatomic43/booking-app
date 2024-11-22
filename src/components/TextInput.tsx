import React from 'react';
import {
  Pressable,
  TextInputProps,
  TextInput as RNTextInput,
  StyleSheet,
} from 'react-native';

import Separator from './Separator';
import appStyles from '../styles/app-styles';
import Colors from '../styles/colors';
import FontWeights from '../styles/font-weights';

interface Props extends TextInputProps {
  invalid?: boolean;
}

const TextInput = ({onChangeText, onPress, invalid, ...props}: Props) => {
  return (
    <>
      <Pressable
        // @ts-ignore
        style={[styles.container, invalid && styles.containerInvalid]}
        onPress={onPress}>
        <RNTextInput
          style={styles.textInput}
          placeholderTextColor={Colors['text.light']}
          {...props}
          multiline={false}
          onChangeText={text => {
            onChangeText?.(text);
          }}
        />
        <Separator width={15} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  container: {
    borderRadius: 4,
    borderColor: Colors['text.dark'],
    height: 40,
    borderWidth: 1,
    ...appStyles.inlineContainer,
    color: Colors['text.dark'],
    fontWeight: FontWeights.medium,
  },
  containerInvalid: {
    borderWidth: 1,
    borderColor: Colors['text.attention'],
  },
  textInput: {
    fontSize: 15,
    maxHeight: '100%',
    padding: 5,
    color: Colors['text.dark'],
    borderColor: Colors['text.light'],
    overflow: 'hidden',
    ...appStyles.fullSize,
    fontFamily: 'Quicksand',
  },
});

export default TextInput;
