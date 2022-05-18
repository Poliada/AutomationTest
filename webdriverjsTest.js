"use strict"; 
var wd = require("selenium-webdriver"), 
By = wd.By, 
until = wd.until;


//Setting Desired Capabilities. 
var desiredCaps = { 
    platformName: "Android", 
    deviceName: "emulator-5554", 
    browserName: "Chrome",
};


async function testPaymi() { 
    //Initiating the Driver 
    let driver = await new wd.Builder().usingServer("http://127.0.0.1:4723/wd/hub").withCapabilities(desiredCaps).build(); 
    driver.get("https://staging.paymi.com/users/sign_in");

    // Automation command. 
    const CreateAnAccountTextLink = await driver.findElement(By.xpath("//form[@id='new_user']/div[3]/div[2]/div[2]/a")); 
    await CreateAnAccountTextLink.click(); 
    driver.get("https://staging.paymi.com/users/sign_up");
    const signupEmailInputField = await driver.findElement(By.id("user_email")); 
    await signupEmailInputField.click(); 
    await signupEmailInputField.sendKeys("testmailDavydPolianchuk@gmail.com"); 
    const signupPasswordInputField = await driver.findElement(By.id("user_password")); 
    await signupPasswordInputField.sendKeys("DavydPolianchuk_123"); 
    const TermsCheckbox = await driver.findElement(By.id("terms-label"));
    await TermsCheckbox.click(); 
    const OffersCheckbox = await driver.findElement(By.xpath("//form[@id='new_user']/div[5]/label"));
    await OffersCheckbox.click(); 
    const SignUpButton = await driver.findElement(By.xpath("//input[@name='commit']"));
    await SignUpButton.click(); 

    await driver.quit(); 
}	

//Call the Function
testPaymi()