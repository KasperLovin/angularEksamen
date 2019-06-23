import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  const image = "https://www.hawksearch.com/wp-content/uploads/Developer.png"
  

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

  it('1.2 Clicks "Manage Jokes" in the navigations bar', () => {
    element(by.linkText('Manage Jokes')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes');
    browser.sleep(2000);
  });

  it('1.3 Click on "new joke" and checks if the fields are empty', done => {
    element(by.id('newjoke')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes/new');
    expect(element(by.id('title')).getAttribute('value')).toBe('')
    expect(element(by.id('description')).getAttribute('value')).toBe('')
    expect(element(by.id('category')).getAttribute('value')).toBe('')
    expect(element(by.id('imageUrl')).getAttribute('value')).toBe('')
    done();
  });

  it('1.4 Fills out the form and presses save', done => {
    element(by.id('title')).sendKeys('Test Joke')
    browser.sleep(2000);
    element(by.id('description')).sendKeys("This joke is funny because its a test")
    browser.sleep(2000);
    element(by.id('category')).sendKeys('developer jokes')
    browser.sleep(2000);
    element(by.id('imageUrl')).sendKeys(image)
    browser.sleep(2000);
    element(by.id('savebutton')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes');
    browser.sleep(2000);
    done();
  });

  it('1.5 Click edit by Key', done => {
    element(by.id('-LhzGPF_0VOYp6pvZxGt')).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('admin/jokes/-LhzGPF_0VOYp6pvZxGt');
    expect(element(by.id('title')).getAttribute('value')).toBe('Test Joke')
    expect(element(by.id('description')).getAttribute('value')).toBe('This joke is funny because its a test')
    expect(element(by.id('category')).getAttribute('value')).toBe('developer jokes')
    expect(element(by.id('imageUrl')).getAttribute('value')).toBe(image)
    done();
  });

  it('1.6 Update the fields', (done) => {
    element(by.id('title')).clear().then(function() {
      element(by.id('title')).sendKeys('Test Joke');
  });
  browser.sleep(2000);
    element(by.id('description')).clear().then(function() {
      element(by.id('description')).sendKeys('This joke is funny because its a test');
  });
    element(by.id('imageUrl')).clear().then(function() {
      element(by.id('imageUrl')).sendKeys(image);
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
