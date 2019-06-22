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
    browser.sleep(2000);
  });
  
  it('1.1 login by filling out username and password and going to the "home" page', done =>{
    element(by.id('username')).sendKeys('kasperlovein@per.dk');
    browser.sleep(2000);
    element(by.id('password')).sendKeys('e2etest');
    browser.sleep(2000);
    element(by.id('submitLogin')).click();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toContain('');
    browser.sleep(2000);
    done();
  });

  it('1.2 Clicks "Manage jokes" in the navigations bar', () => {
    element(by.linkText('Manage jokes')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes');
    browser.sleep(2000);
  });

  it('1.3 Click on "new joke" and checks if the fields are empty', done => {
    element(by.id('newjoke')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes/new');
    expect(element(by.id('title')).getAttribute('value')).toBe('')
    expect(element(by.id('price')).getAttribute('value')).toBe('')
    expect(element(by.id('category')).getAttribute('value')).toBe('')
    expect(element(by.id('imageUrl')).getAttribute('value')).toBe('')
    done();
  });

  it('1.4 Fills out the form and presses save', done => {
    element(by.id('title')).sendKeys('Test Joke')
    browser.sleep(2000);
    element(by.id('price')).sendKeys(1234)
    browser.sleep(2000);
    element(by.id('category')).sendKeys('bread')
    browser.sleep(2000);
    element(by.id('imageUrl')).sendKeys('https://purepng.com/public/uploads/large/purepng.com-super-mariomariosuper-mariovideo-gamefictional-characternintendoshigeru-miyamotomario-franchise-17015286383789a9am.png')
    browser.sleep(2000);
    element(by.id('savebutton')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes');
    browser.sleep(2000);
    done();
  });

  it('1.5 Click edit by Key', done => {
    element(by.id('-LhyxDfpEHntbH2QZCtJ')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes/-LhyxDfpEHntbH2QZCtJ');
    expect(element(by.id('title')).getAttribute('value')).toBe('Test Joke')
    expect(element(by.id('price')).getAttribute('value')).toBe('1234')
    expect(element(by.id('category')).getAttribute('value')).toBe('bread')
    expect(element(by.id('imageUrl')).getAttribute('value')).toBe('https://purepng.com/public/uploads/large/purepng.com-super-mariomariosuper-mariovideo-gamefictional-characternintendoshigeru-miyamotomario-franchise-17015286383789a9am.png')
    done();
  });

  it('1.6 Update the fields', (done) => {
    element(by.id('title')).clear().then(function() {
      element(by.id('title')).sendKeys('Test Joke');
  });
  browser.sleep(2000);
    element(by.id('price')).clear().then(function() {
      element(by.id('price')).sendKeys('1234');
  });
    element(by.id('imageUrl')).clear().then(function() {
      element(by.id('imageUrl')).sendKeys('https://purepng.com/public/uploads/large/purepng.com-super-mariomariosuper-mariovideo-gamefictional-characternintendoshigeru-miyamotomario-franchise-17015286383789a9am.png');
  });
  browser.sleep(2000);
    element(by.id('savebutton')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes');
    done();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
