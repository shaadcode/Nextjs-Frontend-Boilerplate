import type { AxiosRequestConfig } from 'axios';

const createQueryParams = (queryParams: NonNullable<AxiosRequestConfig['queryParams']>, config: AxiosRequestConfig) => {
  const base = config.baseURL || 'http://localhost:3000';
  const urlObj = new URL(config.url!, base);

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v !== undefined && v !== null) {
          urlObj.searchParams.append(key, String(v));
        }
      });
    } else {
      urlObj.searchParams.append(key, String(value));
    }
  });

  if (config.baseURL) {
    config.url = urlObj.pathname + urlObj.search;
  } else {
    config.url = urlObj.toString();
  }
};

export default createQueryParams;
