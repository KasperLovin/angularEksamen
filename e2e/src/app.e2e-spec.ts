import { AppPage } from './app.po';
import { browser, logging, element, by, protractor } from 'protractor';
import { ifError } from 'assert';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

describe('workspace-project App', () => {
  let page: AppPage;
  

  beforeEach(() => {
    page = new AppPage();
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
  });

  
  it('1.0 Verify that i can go to login page', () => {
    browser.get('/login');
    expect(browser.getCurrentUrl()).toContain('/login');
    browser.sleep(1000);
  });
  
  it('1.1 login by filling out username and password and going to the "home" page', () =>{
    element(by.id('username')).sendKeys('kasperlovein@per.dk');
    element(by.id('password')).sendKeys('e2etest');
    element(by.id('submitLogin')).click();
    browser.sleep(1000)
    expect(browser.getCurrentUrl()).toContain('');
    browser.sleep(1000)
  });

  it('1.2 Clicks "Manage Products" in the navigations bar', () => {
    element(by.linkText('Manage Products')).click();
    browser.sleep(1000)
    expect(browser.getCurrentUrl()).toContain('admin/products');
  });

  it('1.3 Click on "new product" and checks if the fields are empty', () => {
    element(by.id('newProduct')).click();
    browser.sleep(1000)
    expect(browser.getCurrentUrl()).toContain('admin/products/new');
    expect(element(by.id('title')).getAttribute('value')).toBe('')
    expect(element(by.id('price')).getAttribute('value')).toBe('')
    expect(element(by.id('category')).getAttribute('value')).toBe('')
    expect(element(by.id('imageUrl')).getAttribute('value')).toBe('')
    browser.sleep(1000)
  });

  it('1.4 Fills out the form and presses save', () => {
    element(by.id('title')).sendKeys('Test Joke')
    element(by.id('price')).sendKeys(1234)
    element(by.id('category')).sendKeys('bread')
    element(by.id('imageUrl')).sendKeys('http://www.sclance.com/pngs/png-test/png_test_1080570.png')
    element(by.id('savebutton')).click();
    expect(browser.getCurrentUrl()).toContain('admin/products');
    browser.sleep(1000)
  });

  it('1.5 Click edit by Key', () => {
    element(by.id('-LhugN3AUqlDxVCjdrDN')).click();
    browser.sleep(1000)
    expect(browser.getCurrentUrl()).toContain('admin/products/-LhugN3AUqlDxVCjdrDN');
    expect(element(by.id('title')).getAttribute('value')).toBe('Test Joke')
    expect(element(by.id('price')).getAttribute('value')).toBe('1234')
    expect(element(by.id('category')).getAttribute('value')).toBe('bread')
    expect(element(by.id('imageUrl')).getAttribute('value')).toBe('http://www.sclance.com/pngs/png-test/png_test_1080570.png')
  });

  it('1.6 Update the fields', () => {
    element(by.id('title')).clear().then(function() {
      element(by.id('title')).sendKeys('Test Joke');
  });
    element(by.id('price')).clear().then(function() {
      element(by.id('price')).sendKeys('1234');
  });
    element(by.id('imageUrl')).clear().then(function() {
      element(by.id('imageUrl')).sendKeys('http://www.sclance.com/pngs/png-test/png_test_1080570.png');
  });
    element(by.id('savebutton')).click();
    browser.sleep(2000)
    expect(browser.getCurrentUrl()).toContain('admin/products');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
