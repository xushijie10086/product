import { AngularLifePage } from './app.po';

describe('angular-life App', () => {
  let page: AngularLifePage;

  beforeEach(() => {
    page = new AngularLifePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
