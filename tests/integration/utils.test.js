const TEST_URL = 'http://localhost:1234';

describe('Utils App', () => {
  beforeAll(async () => {
    await page.goto(TEST_URL);
  });

  it('should have correct header', async () => {
    const header = await ((await page.$('#utils-app-header')).evaluate(e => e.innerHTML));
    expect(header).toEqual('Utils App')
    const subheader = await ((await page.$('#utils-app-subheader')).evaluate(e => e.innerHTML));
    expect(subheader).toEqual('Utils Subheader')
  });
});
