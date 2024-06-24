import { test, expect } from "@playwright/test"

test.describe(`Kitchen Sink`, () => {
  test(`should build and serve index page`, async ({ page }) => {
    await page.goto(`/`)

    await expect(page).toHaveTitle(`@alexjorgef/gatsby-source-mixcloud`)
  })
  test(`contains elements`, async ({ page }) => {
    await page.goto(`/`)

    await expect(await page.locator(`h1:has-text("@alexjorgef/gatsby-source-mixcloud")`)).toBeVisible()
    // await expect(await page.locator(`text=alexjorgef`)).toBeVisible()
    await expect(await page.locator(`text=Slug: m002-testing-db`)).toBeVisible()
    await expect(await page.locator(`text=Slug: mini001-minimix-19-11-2013-420am`)).toBeVisible()
    await expect(await page.locator(`text=Slug: m006-liveset-arraial-gank-fct-2013`)).toBeVisible()
    await expect(await page.locator(`text=Demo of @alexjorgef/gatsby-source-mixcloud – GitHub – Website`)).toBeVisible()
  })
})
