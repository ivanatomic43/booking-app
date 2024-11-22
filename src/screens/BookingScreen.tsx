import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import moment from 'moment';

import {Separator, Text, Title, TextInput, Button} from '../components';
import {useDate} from '../context/DateContext';
import useNavigate from '../hooks/useNavigate';

import type {UserData} from '../types/user';

const BookingScreen = () => {
  const route = useRoute<any>();
  const {fishingPackage} = route.params;
  const {navigateToCheckoutScreen} = useNavigate();

  const {date} = useDate();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (userData: UserData) => {
    //@ts-ignore
    navigateToCheckoutScreen(fishingPackage, userData);
  };

  return (
    <View style={styles.container}>
      <Separator height={20} />
      <Title title={`Book for date: ${moment(date).format('MMM DD, YYYY')}`} />
      <Separator height={20} />
      <Text type="body.medium" textAlign="left">
        {fishingPackage.title}
      </Text>

      <Separator height={15} />
      <Text type="body.small">Full Name</Text>
      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'Full name is required.',
          minLength: {
            value: 3,
            message: 'Full name must be at least 3 characters long.',
          },
        }}
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              accessible
              value={value}
              invalid={!!errors.fullName}
              onChangeText={onChange}
            />
            {errors.fullName && (
              <Text color="text.attention">{errors.fullName.message}</Text>
            )}
          </>
        )}
      />

      <Separator height={15} />
      <Text type="body.small">Email Address</Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email is required.',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address.',
          },
        }}
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              accessible
              value={value}
              onChangeText={onChange}
              invalid={!!errors.email}
            />
            {errors.email && (
              <Text color="text.attention">{errors.email.message}</Text>
            )}
          </>
        )}
      />

      <Separator height={15} />
      <Text type="body.small">Message Captain</Text>
      <Controller
        control={control}
        name="message"
        rules={{
          required: 'Message is required',
        }}
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              accessible
              value={value}
              onChangeText={onChange}
              invalid={!!errors.message}
            />
            {errors.message && (
              <Text color="text.attention">{errors.message.message}</Text>
            )}
          </>
        )}
      />

      <Separator height={55} />
      <Button text="Next" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default BookingScreen;
