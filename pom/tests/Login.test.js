import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature test')
    .page `https://www.saucedemo.com`

test('As a user I should be able to log in when I provide valid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(productsPage.productsPageTitle.innerText).eql('PRODUCTS')
})