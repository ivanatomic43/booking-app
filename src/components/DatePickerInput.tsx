import React, {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TextInput} from '../components';
import moment from 'moment';
import {useDate} from '../context/DateContext';

const DatePickerInput = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {date, setDate} = useDate();

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  return (
    <View>
      <TextInput
        numberOfLines={1}
        onPress={showDatePicker}
        editable={false}
        placeholder="Select Date"
        value={date ? moment(date).format('DD/MM/YYYY') : ''}
      />
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={date ? new Date(date) : new Date()}
        onConfirm={selDate => {
          setDatePickerVisibility(false);
          setDate(selDate);
        }}
        onDateChange={selDate => {
          console.log('Selected Date: ', selDate);
        }}
        onCancel={hideDatePicker}
        mode="date"
      />
    </View>
  );
};

export default DatePickerInput;
