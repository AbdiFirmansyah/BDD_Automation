package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class LandingPage {

        public static WebDriver webDriver;

        public LandingPage(WebDriver webDriver) {
            PageFactory.initElements(webDriver, this);
            this.webDriver = webDriver;
        }

        @FindBy(xpath = "//span[@class='title']")
        private WebElement verifyLanding;
        @FindBy(xpath = "//select[@class='product_sort_container']")
        private WebElement selecCountainer;

        @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-backpack']")
        private WebElement basket1;

        @FindBy(xpath = "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
        private WebElement basket2;

        public void sortProduct(String sort){
            Select a = new Select(selecCountainer);
            a.selectByVisibleText(sort);
        }
        public boolean verifyLandigPage(){
            verifyLanding.isDisplayed();
            return true;
        }
        public void clickBasket1(){
            basket1.click();
        }
        public void clickBasket2(){
            basket2.click();

        }
    }

