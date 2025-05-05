import type { AxiosError } from 'axios';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const apiClient = axios.create({
  baseURL,
  maxRedirects: 5,
  timeout: 10000,
  withCredentials: true,
});

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const config = (error.config || {}) as AxiosError['config'] & {
      retryCount: number;
    };
    switch (error.status) {
      case 401:

        break;

      default:
        break;
    }

    if (!error.response || error.response.status >= 500) {
      config.retryCount = config.retryCount || 0;

      if (config.retryCount < MAX_RETRIES) {
        config.retryCount += 1;

        const delay = RETRY_DELAY * 2 ** (config.retryCount - 1);

        return new Promise(resolve =>
          setTimeout(() => resolve(apiClient(config)), delay),
        );
      }
    }

    return Promise.reject(error);
  },
);
