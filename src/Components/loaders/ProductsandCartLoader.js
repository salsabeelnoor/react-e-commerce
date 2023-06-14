import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const initCart = [];
    for (const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initCart.push(addedProduct);
        }
    }
    return {products: products, initCart: initCart};
}