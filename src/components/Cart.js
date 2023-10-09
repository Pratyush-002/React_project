import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatchCart = useDispatch()
    const handleClearCart = () =>{
        dispatchCart(clearCart());
    };

    return (
    <div className="text-center m-5 p-5">
        
        <h1 className="text-2xl font-bold">Cart</h1>
        <button 
            className=" p-2 m-2 bg-black text-white rounded-lg" 
            onClick={handleClearCart}>Clear cart</button>
        {cartItems.length === 0 && <h1>Cart is empty. Add items to proceed</h1>}
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}/>
        </div>
    </div>
    )
}

export default Cart;