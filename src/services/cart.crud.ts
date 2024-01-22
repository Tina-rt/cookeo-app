export const getCartList = () => {
    let cartlist = localStorage.getItem('cookeo_cart');
    if (cartlist){
        return JSON.parse(cartlist);
    }
    else{
        setCartList([]);
        return [];
    }
}

export const setCartList = (newCartList: Array<any>) => {
    localStorage.setItem('cookeo_cart', JSON.stringify(newCartList));
    return newCartList;
}