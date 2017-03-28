import { ParcelServicePage } from './app.po';

describe('parcel-service App', () => {
  let page: ParcelServicePage;

  beforeEach(() => {
    page = new ParcelServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
