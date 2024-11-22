import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';

import {Separator, Text} from '../components';
import {useDate} from '../context/DateContext';

import {appStyles} from '../styles';

const SuccessfullyBookedScreen = () => {
  const route = useRoute<any>();
  const {fishingPackage} = route.params;

  const {date} = useDate();

  return (
    <View style={styles.container}>
      <Text type="title.h2" color="text.dark">
        Successfully Booked!
      </Text>
      <Separator height={25} />
      {/* <SvgIcon name="check" color="text.green" size={40} /> */}
      <View style={[appStyles.center, styles.content]}>
        <View style={appStyles.inlineContainer}>
          <Text type="title.h4">Package Name: </Text>
          <Text
            type="body.small"
            textAlign="center"
            color="text.dark"
            style={styles.title}>
            {fishingPackage.title}
          </Text>
        </View>
        <Separator height={15} />
        <View style={appStyles.inlineContainer}>
          <Text type="title.h4">Trip Date: </Text>
          <Text type="body.small" textAlign="center" color="text.dark">
            {moment(date).format('DD/MM/YYYY')}
          </Text>
        </View>
        <Separator height={15} />
        <View style={appStyles.inlineContainer}>
          <Text type="title.h4">Price: </Text>
          <Text type="body.small" textAlign="center" color="text.dark">
            ${fishingPackage.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  packageNameLabel: {
    flexShrink: 0,
  },
  title: {
    flexShrink: 1,
  },
  content: {
    marginHorizontal: 20,
  },
});

export default SuccessfullyBookedScreen;
