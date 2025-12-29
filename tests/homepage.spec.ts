import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('sollte korrekt laden', async ({ page }) => {
    await page.goto('/');
    
    // Check Title
    await expect(page).toHaveTitle(/ZusammenWachsen/);
    
    // Check Hauptüberschrift
    const heading = page.getByRole('heading', { name: /Kurze, liebevolle Impulse/i });
    await expect(heading).toBeVisible();
  });

  test('Store Badges sollten klickbar sein', async ({ page }) => {
    await page.goto('/');
    
    // Google Play Badge
    const playStoreLink = page.getByRole('link', { name: /Google Play/i });
    await expect(playStoreLink).toBeVisible();
    await expect(playStoreLink).toHaveAttribute('href', /play\.google\.com/);
    
    // App Store Badge
    const appStoreLink = page.getByRole('link', { name: /App Store/i });
    await expect(appStoreLink).toBeVisible();
    await expect(appStoreLink).toHaveAttribute('href', /apps\.apple\.com/);
  });

  test('sollte App-Mockup anzeigen', async ({ page }) => {
    await page.goto('/');
    
    const mockupImage = page.getByAltText(/ZusammenWachsen App.*Vorschau/i);
    await expect(mockupImage).toBeVisible();
  });
});