import React from 'react';
import Main from '../Main';
import renderer from 'react-test-renderer';
import puppeteer from 'puppeteer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Main page="http://localhost:3000">Simple SPA</Main>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

//TODO: should test the actual production
describe('Google', () => {
  let page;
  beforeAll(async () => {
    const browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    let text = await page.evaluate(() => document.body.textContent)
    expect(text).toContain('google')
  })

  afterAll(async () => {
    await page.close()
  })
})
