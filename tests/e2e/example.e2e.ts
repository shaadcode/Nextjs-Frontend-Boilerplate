import { expect, test } from '@playwright/test';

test('should render the button in any language', async ({ page }) => {
  await page.goto('/');

  const button = page.getByTestId('homepage-main-button');

  await expect(button).toBeVisible();
});
