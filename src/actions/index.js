import * as types from './../constans/ActionType'
//khi mua hàng sẽ có các sản phẩm và số lượng
export const actAddToCart =(product,quantity)=>{
    return{
        type:types.ADD_TO_CART,
        product,
        quantity
    }

}