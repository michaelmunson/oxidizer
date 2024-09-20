const TEST_URL = 'http://localhost:1234';

describe('Fragment App', () => {
  beforeAll(async () => {
    await page.goto(TEST_URL);
  });

  it('should have correct elements', async () => {
    const header = await ((await page.$('#fragment-app-header')).evaluate(e => e.innerHTML));
    expect(header).toEqual('Fragment App');
    const subheader = await ((await page.$('#fragment-app-subheader')).evaluate(e => e.innerHTML));
    expect(subheader).toEqual('Hello World!');
  });

  it('should react to prop changes', async () => {
    await (await page.$('#fragment-app button')).click();
    const header = await ((await page.$('#fragment-app-header')).evaluate(e => e.innerHTML));
    expect(header).toEqual('Fragment App Updated');
  })
});
