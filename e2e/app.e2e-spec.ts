import { SureshAutuerPage } from './app.po';

describe('suresh-autuer App', () => {
  let page: SureshAutuerPage;

  beforeEach(() => {
    page = new SureshAutuerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
