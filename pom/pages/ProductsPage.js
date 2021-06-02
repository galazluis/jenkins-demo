import { Selector } from "testcafe"

class ProductsPage{
    constructor(){
        this.productsPageTitle = Selector('.title')
    }
}

export default new ProductsPage()