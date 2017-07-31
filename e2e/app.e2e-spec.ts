import { CampusUiPage } from './app.po';

describe('campus-ui App', () => {
  let page: CampusUiPage;

  beforeEach(() => {
    page = new CampusUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
