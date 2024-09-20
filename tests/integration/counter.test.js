const TEST_URL = 'http://localhost:1234';

describe('Counter App', () => {
  const increment = async () => (await page.$('#increment-button')).click();
  const decrement = async () => (await page.$('#decrement-button')).click();
  const getCount = async () => {
    return parseInt((await (await page.$('#count')).evaluate(p => p.innerHTML)).replace('Count: ', ''));
  }
  
  beforeAll(async () => {
    await page.goto(TEST_URL);
  });

  it('should have correct title', async () => {
    await expect(page.title()).resolves.toMatch('Test Oxidizer App');
  });

  it('counter should start at 0', async () => {
    const initCount = await getCount();
    expect(initCount).toEqual(0);
  });

  it('counter should increment to 1', async () => {
    await increment();
    expect(await getCount()).toEqual(1);
  });

  it('counter shouldn\'t increment past 10', async () => {
    for (let i = 0; i < 20; i++){
      await increment();
    }
    expect(await getCount()).toEqual(10);
  });

  it('counter shouldn\'t decrement past 0', async () => {
    for (let i = 0; i < 20; i++){
      await decrement();
    }
    expect(await getCount()).toEqual(0);
  });
});
