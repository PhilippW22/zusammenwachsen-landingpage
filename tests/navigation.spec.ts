import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('sollte BottomNavBar beim Scrollen anzeigen', async ({ page }) => {
    await page.goto('/');
    
    // Scroll runter (Bar erscheint nach 80px)
    await page.evaluate(() => window.scrollTo(0, 200));
    
    // Check Download Button ist sichtbar (wartet automatisch)
    const downloadButton = page.getByRole('link', { name: /Download \(Play Store\)/i });
    await expect(downloadButton).toBeVisible();
  });

  test('sollte zu Sections scrollen', async ({ page }) => {
    await page.goto('/');
    
    // Scroll zu FAQ Section
    await page.locator('#faq').scrollIntoViewIfNeeded();
    
    // Check dass FAQ Section im Viewport ist
    const faqSection = page.locator('#faq');
    await expect(faqSection).toBeInViewport();
    
    // Check FAQ Heading
    await expect(page.getByRole('heading', { name: /^FAQ$/i })).toBeVisible();
  });

  test('sollte Store Badges haben die zu Stores linken', async ({ page }) => {
    await page.goto('/');
    
    // Check Play Store Link - nutzt aria-label
    const playStore = page.getByRole('link', { name: /Download im Google Play Store/i });
    await expect(playStore).toHaveAttribute('href', /play\.google\.com/);
    
    // Check App Store Link - nutzt aria-label
    const appStore = page.getByRole('link', { name: /Download im Apple App Store/i });
    await expect(appStore).toHaveAttribute('href', /apps\.apple\.com/);
  });
});