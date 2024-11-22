import React from 'react';
import {StyleSheet} from 'react-native';

import Text from './Text';
import {FontWeights} from '../styles';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({title}) => (
  <Text type="title.h2" color={'text.dark'} style={styles.title}>
    {title}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: FontWeights.bold,
  },
});

export default Title;
