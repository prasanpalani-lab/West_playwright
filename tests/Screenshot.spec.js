
const { test, expect } = require('@playwright/test');


test("Handling KeyBoard Actions", async ({ page }) => {

  //browser
  await page.goto('https://testautomationpractice.blogspot.com/')

  //scroll
  await page.waitForTimeout(2000)

  //fill
  await page.locator('[id="name"]').fill('Playwright with Javascript')

  //All text
  await page.keyboard.press('Control+KeyA')

  //copy
  await page.keyboard.press('Control+KeyC')

  //tab
  await page.keyboard.down('Tab')
  await page.keyboard.up('Tab')

  //paste
  await page.keyboard.press('Control+V')

  //Refresh
  await page.reload()

  await page.locator('a:has-text("Online Trainings")').click()

  await page.waitForLoadState()

  //Go Back
  await page.goBack()

  //Go Forward
  await page.goForward()

  //Bring to front
  await page.bringToFront()

})