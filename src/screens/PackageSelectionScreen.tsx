import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Card, Text} from '../components';
import DatePickerInput from '../components/DatePickerInput';
import {useFetchFishingPackagesQuery} from '../store';

import {appStyles} from '../styles';

const PackageSelectionScreen = () => {
  const {data} = useFetchFishingPackagesQuery();

  return (
    <View style={appStyles.fullSize}>
      <View style={styles.dateContainer}>
        <Text type="body.small" textAlign="left">
          Date
        </Text>
        <DatePickerInput />
      </View>

      <View style={[appStyles.fullSize, styles.container]}>
        <FlatList
          data={data?.data}
          decelerationRate="fast"
          snapToAlignment="center"
          initialNumToRender={data?.data.length}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={appStyles.fullSize}>
              <Card data={item} />
            </View>
          )}
        />
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
  dateContainer: {
    margin: 20,
  },
});

export default PackageSelectionScreen;
