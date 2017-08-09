import { TemplateDataBindingPage } from './app.po';

describe('template-data-binding App', () => {
  let page: TemplateDataBindingPage;

  beforeEach(() => {
    page = new TemplateDataBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
