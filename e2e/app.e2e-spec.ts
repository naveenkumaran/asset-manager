import { AssetManagerWebPage } from './app.po';

describe('asset-manager-web App', () => {
  let page: AssetManagerWebPage;

  beforeEach(() => {
    page = new AssetManagerWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
