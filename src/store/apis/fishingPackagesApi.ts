import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {type FishingPackagesDTO} from '../../types/fishing-package';

const fishingPackagesApi = createApi({
  reducerPath: 'fishingPackages',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mocki.io/v2/z7ef3dqw',
  }),
  endpoints(builder) {
    return {
      fetchFishingPackages: builder.query<FishingPackagesDTO, void>({
        query: () => {
          return {
            url: '/trips',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {useFetchFishingPackagesQuery} = fishingPackagesApi;
export {fishingPackagesApi};
