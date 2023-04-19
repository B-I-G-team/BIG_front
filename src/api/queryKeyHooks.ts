import { meGETQueryKey } from './axios-client/Query';

export const useMeGETQueryKey = () => {
  const access_token = localStorage.getItem('access_token');

  return {
    meQueryKey: [...meGETQueryKey(), access_token],
  };
};
