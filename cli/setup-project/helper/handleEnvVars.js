import fs from 'node:fs';

import { cancel, isCancel, text } from '@clack/prompts';

const envVars = {
  PORT: '3000',
  NODE_ENV: 'development',
  ENV_APP: 'development',
  ANALYZE: 'false',
  CI: 'false',
  NEXT_PUBLIC_BASE_API_URL: 'http://localhost:3000/api',
  NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
  SKIP_ENV_VALIDATION: 'false',
  USE_I18N_LOCALE_PREFIX: 'true',
};
const handleEnvVars = async () => {
  const answers = {};
  for (const [key, defaultValue] of Object.entries(envVars)) {
    const answer = await text({
      message: `Set value for ${key}:`,
      placeholder: defaultValue,
    });

    if (isCancel(answer)) {
      cancel('Operation cancelled');
      return process.exit(0);
    }

    answers[key] = answer || defaultValue;
  }

  const newEnvContent = Object.entries(answers)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  fs.writeFileSync('.env', newEnvContent);
};

export default handleEnvVars;
