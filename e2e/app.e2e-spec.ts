import { StoriesManagmentPage } from './app.po';

describe('stories-managment App', function() {
  let page: StoriesManagmentPage;

  beforeEach(() => {
    page = new StoriesManagmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
