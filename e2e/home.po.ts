import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  navigateToRoot() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('ion-title')).getText();
  }
}
