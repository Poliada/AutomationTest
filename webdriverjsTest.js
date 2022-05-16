"use strict"; 
var wd = require("selenium-webdriver"), 
By = wd.By, 
until = wd.until;


//Setting Desired Capabilities. 
var desiredCaps = { 
    platformName: "Android", 
    deviceName: "emulator-5554", 
    app: "", 
    appPackage: "com.android.calculator2", 
    appActivity: ".Calculator", 
    browserName: '',
};


async function testCalculator() { 
    //Initiating the Driver 
    let driver = await new wd.Builder().usingServer("http://127.0.0.1:4723/wd/hub").withCapabilities(desiredCaps).build(); 

    // Automation command. 
    // 
    let el4 = await driver.findElement(By.xpath("//android.widget.LinearLayout[@content-desc='Numbers and basic operations']/android.view.ViewGroup[1]/android.widget.Button[1]"));
    await el4.click();
    await el4.click();
    let el5 = await driver.findElement(By.xpath("//android.widget.Button[@content-desc='delete']"));
    await el5.click();
    let el6 = await driver.findElement(By.xpath("//android.widget.Button[@content-desc='plus']"));
    await el6.click();
    let el7 = await driver.findElement(By.xpath("//android.widget.LinearLayout[@content-desc='Numbers and basic operations']/android.view.ViewGroup[1]/android.widget.Button[9]"));
    await el7.click();
    let el8 = await driver.findElement(By.xpath("//android.widget.Button[@content-desc='equals']"));
    await el8.click();
    let el10 = await driver.findElement(By.xpath("//android.widget.ImageButton[@content-desc='More options']"));
    await el10.click();
    let el11 = await driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView"));
    await el11.click();
    let el12 = await driver.findElement(By.xpath("//android.widget.ImageButton[@content-desc='Navigate up']"));
    await el12.click();

    await driver.quit();
}
//Call the Function
testCalculator()