import { ComicsWorldPage } from './app.po';

describe('comics-world App', () => {
  let page: ComicsWorldPage;

  beforeEach(() => {
    page = new ComicsWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
