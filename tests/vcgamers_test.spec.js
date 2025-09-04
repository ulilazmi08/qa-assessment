import {test, expect} from '@playwright/test'
test('Open Gercep Page & Check Title', async ({ page }) => {
  await page.goto('https://www.vcgamers.com/gercep');

  // Verify Tittle
  await expect(page).toHaveTitle(/Top Up Game Gercep, Termurah dan 100% Aman/);
  // Verify Url
  await expect(page).toHaveURL('https://www.vcgamers.com/gercep');
});
test('Search Bar Interaction', async ({ page }) => {
  await page.goto('https://www.vcgamers.com/gercep');
  //click searchbar 
  await page.waitForTimeout(3000); // Waits for 3 seconds
  await page.getByRole('textbox', { name: 'Cari Nama Brand di Gercep...' }).click();
  //fill searchbar with mobile legends
  await page.getByRole('textbox', { name: 'Cari Nama Brand di Gercep...' }).fill('mobile legends');
  await page.waitForTimeout(3000); // Waits for 3 seconds
  //press enter key
  await page.getByRole('textbox', { name: 'Cari Nama Brand di Gercep...' }).press('Enter');
  //check if mobile legends text is visible
  await page.isVisible("text='Mobile Legends'")
  //take a screenshot
  await page.screenshot({path:'./screenshot/result_searchbar.png'})
});
test('Scenario C, Click First Item', async ({ page }) => {
  await page.goto('https://www.vcgamers.com/gercep');
  //click searchbar 
  await page.waitForTimeout(3000); // Waits for 3 seconds
  await page.getByRole('textbox', { name: 'Cari Nama Brand di Gercep...' }).click();
  //fill searchbar with mobile legends
  await page.getByRole('textbox', { name: 'Cari Nama Brand di Gercep...' }).fill('mobile legends');
  await page.waitForTimeout(3000); // Waits for 3 seconds
  //press enter key
  await page.getByRole('textbox', { name: 'Cari Nama Brand di Gercep...' }).press('Enter');
  //check if mobile legends text is visible
  await page.isVisible("text='Mobile Legends'")
  //click mobile legends link with name Top Up Game Mobile Legends
  await page.getByRole('link', { name: 'Top Up Game Mobile Legends' }).click();
  await page.waitForTimeout(3000); // Waits for 3 seconds
  //verify page title
  await expect(page).toHaveTitle(/Top Up ML Murah Pasti Dapat Cashback | Mobile Legends | VCGamers/);
  //take a screenshot of result
  await page.screenshot({path:'./screenshot/result_click_item.png'})

});
