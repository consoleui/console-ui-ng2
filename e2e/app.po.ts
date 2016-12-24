import { browser, element, by } from 'protractor';

export class ConsoleUiNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cui-root h1')).getText();
  }
}
