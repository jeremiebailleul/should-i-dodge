import { ShouldIDodgePage } from './app.po';

describe('should-i-dodge App', () => {
  let page: ShouldIDodgePage;

  beforeEach(() => {
    page = new ShouldIDodgePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
