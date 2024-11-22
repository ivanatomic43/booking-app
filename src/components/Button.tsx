import React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  type PressableProps,
  Pressable,
} from 'react-native';

import {Text} from '../components';
import {appStyles, Colors} from '../styles';

interface Props extends PressableProps {
  text: string;
  style?: ViewStyle;
}

const Button: React.FC<Props> = ({text, style, onPress, ...props}) => {
  return (
    <View>
      <Pressable
        accessible
        accessibilityRole="button"
        style={[styles.container, style]}
        onPress={onPress}
        {...props}>
        <View style={[styles.innerContainer]}>
          <Text textAlign="center" color="text.white">
            {text}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    overflow: 'hidden',
    ...appStyles.center,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: Colors['btn.primary'],
  },
  innerContainer: {
    ...appStyles.inlineContainer,
    flex: 1,
  },
});

export default Button;
