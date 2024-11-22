import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';

import {Separator, Title, Text, Button, TextInput} from '../components';
import useNavigate from '../hooks/useNavigate';
import {useFetchUserQuery} from '../store';

import {appStyles} from '../styles';

const CheckoutScreen = () => {
  const route = useRoute<any>();
  const {fishingPackage, userData} = route.params;

  const {navigateToSuccessfullyBookedScreen} = useNavigate();

  const {data} = useFetchUserQuery();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      cardholderName: '',
      cardNumber: '',
    },
  });

  const onSubmit = () => {
    navigateToSuccessfullyBookedScreen(fishingPackage);
  };

  return (
    <View style={styles.container}>
      <Separator height={20} />
      <Title title={fishingPackage.title} />

      <Separator height={20} />
      <View>
        <View style={appStyles.inlineContainer}>
          <Text type="title.h4">Full Name: </Text>
          <Text type="body.small" textAlign="center" color="text.dark">
            {data?.data.name} {data?.data.surname}
          </Text>
        </View>
        <Separator height={8} />
        <View style={appStyles.inlineContainer}>
          <Text type="title.h4">Email Address: </Text>
          <Text type="body.small" textAlign="center" color="text.dark">
            {data?.data.email}
          </Text>
        </View>
        <Separator height={8} />
        <View style={appStyles.inlineContainer}>
          <Text type="title.h4">Message To Captain: </Text>
          <Text type="body.small" textAlign="center" color="text.dark">
            {userData.message}
          </Text>
        </View>
      </View>

      <Separator height={15} />
      <Text type="body.small">Cardholder Name</Text>
      <Controller
        control={control}
        name="cardholderName"
        rules={{
          required: 'Cardholder name is required.',
        }}
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              accessible
              value={value}
              invalid={!!errors.cardholderName}
              onChangeText={onChange}
            />
            {errors.cardholderName && (
              <Text color="text.attention">
                {errors.cardholderName.message}
              </Text>
            )}
          </>
        )}
      />

      <Separator height={15} />
      <Text type="body.small">Card Number</Text>
      <Controller
        control={control}
        name="cardNumber"
        rules={{
          required: 'Card number is required.',
          minLength: {
            value: 16,
            message: 'Card number must be 16 digits long.',
          },
          maxLength: {
            value: 16,
            message: 'Card number must be 16 digits long',
          },
        }}
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              accessible
              value={value}
              invalid={!!errors.cardNumber}
              onChangeText={onChange}
            />
            {errors.cardNumber && (
              <Text color="text.attention">{errors.cardNumber.message}</Text>
            )}
          </>
        )}
      />

      <Separator height={55} />
      <Button text="Confirm" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default CheckoutScreen;
