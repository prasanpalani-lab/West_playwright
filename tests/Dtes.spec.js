const { test, expect } = require("@playwright/test");

test("Handling Date Picker", async ({ page }) => {

    // Browser
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Scroll
    const dateInput = await page.locator('[id="datepicker"]');
    await dateInput.waitFor();
    await dateInput.click();

    // Selective
    let date = "15";
    let month = "August";
    let year = "2028";

    // Month & Year
    while (true) {
        const cMonth = await page.locator('[class="ui-datepicker-month"]').textContent();
        const cYear = await page.locator('[class="ui-datepicker-year"]').textContent();

        if (cMonth === month && cYear === year) {
            break;
        }

        // Click the next button to navigate to the next month
        await page.locator('[class="ui-datepicker-next"]').click();
    }

});