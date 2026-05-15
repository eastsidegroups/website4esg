import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    // Log console errors to debug white screen issues
    page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

    await page.goto('/contact');
  });

  test('should successfully submit the form and show success message', async ({ page }) => {
    // Fill out the form
    await page.fill('input[name="subject"]', 'Test Subject');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message from Playwright.');

    // Click the submit button
    await page.click('button[type="submit"]');

    // Wait for the success state to appear
    await expect(page.locator('text=Message Sent!')).toBeVisible();
    await expect(page.locator('text=Thank you for contacting us')).toBeVisible();
  });

  test('should show validation error if email and phone are missing', async ({ page }) => {
    // Override the global alert to catch the validation message
    let dialogMessage = '';
    page.on('dialog', dialog => {
      dialogMessage = dialog.message();
      dialog.accept();
    });

    // Fill required fields but omit optional ones
    await page.fill('input[name="subject"]', 'Test Subject');
    await page.fill('textarea[name="message"]', 'Test message content.');

    // Try to submit
    await page.click('button[type="submit"]');

    // Wait for the alert (which is synchronous)
    expect(dialogMessage).toBe('Please provide either an Email or a Phone Number.');
  });
});
