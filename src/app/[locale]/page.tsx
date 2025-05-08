import { Anchor } from '@mantine/core';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('HomePage');
  return (
    <>
      <Anchor href="/home" target="_blank">
        {t('title')}
      </Anchor>
    </>
  );
};

export default Home;
