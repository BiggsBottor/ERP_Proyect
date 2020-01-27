export class Product {
    productName: string;
    description: string;
    stock: number;

    constructor(productName: string, description: string, stock: number) {
        this.productName = productName;
        this.description = description;
        this.stock = stock;
    }

}
