import {useNavigation} from '@react-navigation/native';
import type {FishingPackageDTO} from '../types/fishing-package';
import type {UserData} from '../types/user';

const useNavigate = () => {
  const navigation = useNavigation<any>();

  const navigateToBookingScreen = (fishingPackage: FishingPackageDTO) => {
    navigation.navigate('Booking', {fishingPackage});
  };

  const navigateToCheckoutScreen = (
    fishingPackage: FishingPackageDTO,
    userData: UserData,
  ) => {
    navigation.navigate('Checkout', {fishingPackage, userData});
  };

  const navigateToSuccessfullyBookedScreen = (
    fishingPackage: FishingPackageDTO,
  ) => {
    navigation.navigate('SuccessfullyBooked', {fishingPackage});
  };
  return {
    navigateToBookingScreen,
    navigateToCheckoutScreen,
    navigateToSuccessfullyBookedScreen,
  };
};

export default useNavigate;
