import { AppPage } from './app.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  
  it('1.0 Verify that i can go to login page', () => {
    browser.get('admin/products');
    browser.sleep(1000);
  });
  

  it('login by filling out username and password and going to Admin/Products', () =>{
    browser.sleep(1000);
    element(by.id('username')).sendKeys('kasperlovein@per.dk');
    browser.sleep(1000);
    element(by.id('password')).sendKeys('e2etest');
    browser.sleep(1000);
    
    element(by.id('submitLogin')).click();
    browser.sleep(1000);

    // SPØRG HVORFOR UNDEFINED!

  });

  it('Clicks edit', () =>{

  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
