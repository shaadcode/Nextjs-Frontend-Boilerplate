import type { AxiosError } from 'axios';
import axios from 'axios';
import { apiConfig } from '@/config/api';

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const apiClient = axios.create({
  baseURL,
  maxRedirects: 5,
  timeout: 10000,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const config = (error.config || {}) as AxiosError['config'];
    switch (error.status) {
      case 401:

        break;

      default:
        break;
    }

    if (config?.retry?.enabled) {
      config.retry.storeCount = config.retry.storeCount ?? 0;
      const maxRetries = config.retry.maxCount ?? apiConfig.retry.maxCount;
      const retryDelay = config.retry.delay ?? apiConfig.retry.delay;

      if ((!error.response || error.response.status >= 500) && config.retry.storeCount < maxRetries) {
        config.retry.storeCount += 1;

        const delay = retryDelay * 2 ** (config.retry.storeCount - 1);

        await new Promise(resolve => setTimeout(resolve, delay));

        return apiClient(config);
      }
    }

    return Promise.reject(error);
  },
);
