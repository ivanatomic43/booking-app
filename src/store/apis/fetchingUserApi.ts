import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {ResponseUser} from '../../types/user';

const fetchUserApi = createApi({
  reducerPath: 'fetchingUser',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mocki.io/v2/z7ef3dqw',
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query<ResponseUser, void>({
        query: () => {
          return {
            url: '/user',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {useFetchUserQuery} = fetchUserApi;
export {fetchUserApi};
