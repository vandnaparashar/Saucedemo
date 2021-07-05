const { TITLE, INVENTORY_PAGE_HEADER, CART_PAGE_HEADER, CHECKOUT_PAGE_HEADER, FINISH_PAGE_HEADER, SUCCESS_MSG } = require('../constants/constant');
const appdata=require('../pageobjects/appdata')
const data=require('../resources/testdata.json')
describe('open sauce demo page', () => {

    it('should verify the page title then login', async() => {

       await appdata.openBrowser();
       await expect(browser).toHaveTitle(TITLE);
        appdata.loginpage(data.logindata.username,data.logindata.password);
        
    });

    it('should verify title on inventory page and add to cart', async() => {
        await expect(appdata.inventoryheader).toHaveTextContaining(INVENTORY_PAGE_HEADER);
        await appdata.inventorypage();    
    });

    it('should verify title on cart page and click on checkout button', async() => {
        await expect(appdata.cartheader).toHaveTextContaining(CART_PAGE_HEADER);
        await appdata.cartpage();
    
    });

    it('should verify title on checkout page should  fill details and click on continue button', async() => {
        await expect(appdata.checkoutheader).toHaveTextContaining(CHECKOUT_PAGE_HEADER);
        await appdata.checkoutpage(data.checkoutdata.firstname,data.checkoutdata.lastname,data.checkoutdata.postalcode);
        
    });

    it('should verify title on check out overview page of product and click on finish button', async() => {

        await expect(appdata.finishpageheader).toHaveTextContaining(FINISH_PAGE_HEADER);
        await appdata.finishpage();
        await expect(appdata.thankyouheader).toHaveTextContaining(SUCCESS_MSG); 

    });
});