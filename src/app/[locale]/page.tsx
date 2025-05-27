import { Button, Center } from '@mantine/core';

import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('HomePage');

  return (
    <Center pt="lg">
      <Button lang="fa" data-testid="homepage-main-button">
        {t('title')}
      </Button>
    </Center>

  );
};

export default Home;
