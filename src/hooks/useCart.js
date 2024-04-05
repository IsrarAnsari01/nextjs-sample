import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/slices/cartSlices";
import useAlert from "./useAlert";
import { MESSAGES } from "../util/constants";

const useCart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ cart }) => cart);
  const { success } = useAlert();

  const addProduct = (data) => {
    dispatch(addItem(data));
    success(MESSAGES.CART.ADD.SUCCESS);
  };

  const removeProduct = (data) => {
    dispatch(removeItem(data));
    success(MESSAGES.CART.REMOVE.SUCCESS);
  };

  return { addProduct, removeProduct, getCartProducts: items };
};

export default useCart;
