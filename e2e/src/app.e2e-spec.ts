import { AppPage } from './app.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.waitForAngularEnabled(false);
  });

  
  it('1.0 Verify that i can go to login page', () => {
    browser.get('/login');
    expect(browser.getCurrentUrl()).toContain('/login');
    browser.sleep(1000);
  });
  

  it('1.1 login by filling out username and password and going to the "home" page', () =>{
    element(by.id('username')).sendKeys('kasperlovein@per.dk');
    browser.sleep(1000)
    
    element(by.id('password')).sendKeys('e2etest');
    browser.sleep(1000)
    
    element(by.id('submitLogin')).click();
    browser.sleep(1000)

    expect(browser.getCurrentUrl()).toContain('');
    browser.sleep(1000)
  });

  it('Clicks edit', () => {
    element(by.id('dropdown01')).click();
    browser.sleep(1000)
    element(by.model(ngModelLocator)).all(by.tagName('option').get(4).click();
    browser.sleep(1000)

  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
