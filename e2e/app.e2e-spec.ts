import { Angular2testappPage } from './app.po';

describe('angular2testapp App', function() {
  let page: Angular2testappPage;

  beforeEach(() => {
    page = new Angular2testappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
