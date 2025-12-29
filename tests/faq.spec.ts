import { test, expect } from '@playwright/test';

test.describe('FAQ Section', () => {
  test('sollte FAQ Section anzeigen', async ({ page }) => {
    await page.goto('/');
    
    // Scroll zu FAQ
    await page.locator('#faq').scrollIntoViewIfNeeded();
    
    // Check Heading
    await expect(page.getByRole('heading', { name: /^FAQ$/i })).toBeVisible();
  });

  test('sollte FAQ Items öffnen und schließen', async ({ page }) => {
    await page.goto('/');
    await page.locator('#faq').scrollIntoViewIfNeeded();
    
    // Finde ersten FAQ Button
    const firstFaqButton = page.getByRole('button', { name: /Wer steckt hinter ZusammenWachsen/i });
    await expect(firstFaqButton).toBeVisible();
    
    // Click zum Öffnen
    await firstFaqButton.click();
    
    // Check dass Antwort sichtbar ist - ECHTER TEXT aus FAQ.tsx
    const answer = page.getByText(/Wir sind Michèle und Philipp/i);
    await expect(answer).toBeVisible();
    
    // Click zum Schließen
    await firstFaqButton.click();
    
    // Antwort sollte nicht mehr sichtbar sein
    await expect(answer).not.toBeVisible();
  });

  test('sollte mehrere FAQs gleichzeitig öffnen können', async ({ page }) => {
    await page.goto('/');
    await page.locator('#faq').scrollIntoViewIfNeeded();
    
    // Öffne erstes FAQ
    const firstFaq = page.getByRole('button', { name: /Wer steckt hinter ZusammenWachsen/i });
    await firstFaq.click();
    
    // Öffne zweites FAQ
    const secondFaq = page.getByRole('button', { name: /Was kostet die App/i });
    await secondFaq.click();
    
    // Beide Antworten sollten sichtbar sein - ECHTE TEXTE aus FAQ.tsx
    const answer1 = page.getByText(/Wir sind Michèle und Philipp/i);
    const answer2 = page.getByText(/Nichts. ZusammenWachsen ist kostenlos/i);
    
    await expect(answer1).toBeVisible();
    await expect(answer2).toBeVisible();
  });
});