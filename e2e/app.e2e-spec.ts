import { ConsoleUiNg2Page } from './app.po';

describe('console-ui-ng2 App', function() {
  let page: ConsoleUiNg2Page;

  beforeEach(() => {
    page = new ConsoleUiNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cui works!');
  });
});
