import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {fishingPackagesApi} from './apis/fishingPackagesApi';
import {fetchUserApi} from './apis/fetchingUserApi';

const store = configureStore({
  reducer: {
    [fishingPackagesApi.reducerPath]: fishingPackagesApi.reducer,
    [fetchUserApi.reducerPath]: fetchUserApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(fishingPackagesApi.middleware)
      .concat(fetchUserApi.middleware);
  },
});

setupListeners(store.dispatch);

export {useFetchFishingPackagesQuery} from './apis/fishingPackagesApi';
export {useFetchUserQuery} from './apis/fetchingUserApi';
export default store;
