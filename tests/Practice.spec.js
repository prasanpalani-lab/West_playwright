const {test, expect} = require("@playwright/test")

test ("Getting into the website -  radio button", async function ({page}) {

    //browser
    await page.goto ("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout (2000)

    //clicking on the radio button - female
    await page.locator ('[id="female"]').check ()
   await page.waitForTimeout (2000)

   //confirmation on selected - assert
   await expect (page.locator ('[id="female"]')).toBeChecked ()
      await page.waitForTimeout (2000)

// click on the radio button - male
await page.locator ('//input[@id="male"]').click ()
   await page.waitForTimeout (2000)

  //confirmation on selected - assert
 expect (await page.locator('//input[@id="male"]').isChecked () ). toBeTruthy ()

})


test ("Checkbox select", async function ({page}) {
    
//Getting into the website
await page.goto ("https://testautomationpractice.blogspot.com/")
await page.waitForTimeout (2000)

//checking on the checkbox
await page.locator ('[id="sunday"]').check ()
await page.waitForTimeout (2000)

//Assert
await expect (page.locator('[id="sunday"]')).toBeChecked ()

//multiple select on checkbox - array will come when multiple
const multiCheck = [
page.locator ('[id="tuesday"]'), page.locator ('[id="thursday"]'), page.locator ('//input [@id="saturday"]')
]

for (const element of multiCheck) {
    await element.check()
    expect (element).toBeChecked ()
}
await page.waitForTimeout (2000)

for (const element of multiCheck) {
    await element.uncheck()
    expect (element).not.toBeChecked ()    //not is a property which will confirm it is not checked
}

})










test.only("Handling Single Dropdown", async function ({page}) {
    //Getting into the website
    await page.goto ("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout (2000)}

)





