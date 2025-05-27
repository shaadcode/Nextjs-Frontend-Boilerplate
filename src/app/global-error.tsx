// You cannot use Next-Intl in this file

'use client';
import { Button, Container, Group, MantineProvider, Paper, Stack, Text, Title } from '@mantine/core';

import { IconAlertTriangle, IconHome } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import routing from '@/config/i18n/routing';
import { theme } from '@/config/mantine/mantine';
import '@mantine/core/styles.css';

export default function GlobalError(props: {
  error: Error & { digest?: string; message: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error('Global Error:', props.error);
  }, [props.error]);
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <MantineProvider theme={theme}>
          <Container size="sm" pt={100}>
            <Paper shadow="xl" p="xl" withBorder radius="md">
              <Stack gap="md" align="center">
                <IconAlertTriangle size={48} color="red" />
                <Title order={2}>
                  {'An error has occurred\r'}
                </Title>
                <Text c="dimmed" ta="center">
                  {props.error.message || 'An unexpected error has occurred. Please try again or return home.'}
                </Text>

                <Group align="center" mt="md">
                  <Button variant="filled" color="red" onClick={() => props.reset()}>
                    {'Retry\r'}
                  </Button>
                  <Button
                    variant="outline"
                    leftSection={<IconHome size={18} />}
                    onClick={() => router.push('/')}
                  >
                    {'Return Home\r'}
                  </Button>
                </Group>
              </Stack>
            </Paper>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
