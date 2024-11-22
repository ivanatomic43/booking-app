import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text, Title, Button} from '../components';
import {appStyles, Colors} from '../styles';
import useNavigate from '../hooks/useNavigate';

const Card: React.FC<any> = props => {
  const {navigateToBookingScreen} = useNavigate();
  const {data: item} = props;

  return (
    <View style={styles.container}>
      <Title title={item.title} />

      <View style={[appStyles.inlineContainer, styles.contentContainer]}>
        <Text color={'text.green'} type="title.h3">
          ${item.price}
        </Text>
        <Button text="Reserve" onPress={() => navigateToBookingScreen(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: Colors['text.light'],
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export default Card;
