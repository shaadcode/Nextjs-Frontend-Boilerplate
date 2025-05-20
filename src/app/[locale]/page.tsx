import { Button } from '@mantine/core';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('HomePage');
  return (
    <>

      <Button lang="fa">
        {t('title')}
      </Button>

    </>

  );
};

export default Home;
