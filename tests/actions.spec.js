const { test, expect } = require('@playwright/test');

test('Handling Mouse Actions', async ({ page }) => {
  // Navigate to the practice website
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // Double click action
  const doubleClickBtn = page.locator('[ondblclick="myFunction1()"]');
  await doubleClickBtn.dblclick();
  await page.waitForTimeout(1000);

  // Right click / Context click
  const rightClickBtn = page.locator('[oncontextmenu="myFunction()"]');
  await rightClickBtn.click({ button: 'right' });
  await page.waitForTimeout(1000);

  // Hover action
  const hoverElement = page.locator('[id="age"]');
  await hoverElement.hover();
  await page.waitForTimeout(1000);
});

test('Handling Drag and Drop', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // Scroll to make drag elements visible
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(1000);

  // Drag and drop
  const source = page.locator('[id="draggable"]');
  const target = page.locator('[id="droppable"]');
  
  await source.dragTo(target);
  await page.waitForTimeout(1000);
});

test('Handling Keyboard Actions', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(1000);

  // Fill a text field
  await page.locator('[id="name"]').fill('Playwright with JavaScript');
  
  // Select all text
  await page.keyboard.press('Control+KeyA');
  await page.waitForTimeout(500);
  
  // Copy text
  await page.keyboard.press('Control+KeyC');
  await page.waitForTimeout(500);
  
  // Tab to next field
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  
  // Paste text
  await page.keyboard.press('Control+KeyV');
  await page.waitForTimeout(1000);
});

test('Handling Alerts', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // Handle alert dialog
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    await dialog.accept();
  });
  
  await page.locator('button:has-text("Alert")').click();
  await page.waitForTimeout(1000);
});

test('Handling Confirm Dialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // Handle confirm dialog - Accept
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('confirm');
    await dialog.accept();
  });
  
  await page.locator('button:has-text("Confirm")').click();
  await page.waitForTimeout(1000);
});

