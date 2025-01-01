import { create } from "zustand";
import { LocalStorageEnum } from "../api/utils/LocalStorage";

interface CartItem {
  id: string | number;
  quantity?: number; // Making quantity optional initially
  price: number;
}

const calculateTotalPrice = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => {
    // Calculate the price of each item by multiplying its price by its quantity
    const itemPrice = item?.price * (item.quantity || 0);
    // Add the price of the current item to the total
    return total + itemPrice;
  }, 0); // Start with a total of 0
};

// Define a function to calculate the total quantity of items in the cart
const calculateTotalQuantity = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => {
    // Add the quantity of each item to the total
    return total + (item.quantity || 0);
  }, 0); // Start with a total of 0
};

interface ModalState {
  Cart: CartItem[];
  setCart: (data: CartItem) => void;
  deleteFromCart: (id: string | number) => void;
  removeFromCart: any;
  calculateTotalPrice: () => number; // Add the calculateTotalPrice function
  calculateTotalQuantity: () => number; // Add the calculateTotalQuantity function
  removeCart: any;
}

const getInitialCart = (): CartItem[] => {
  const savedCart = localStorage.getItem(LocalStorageEnum?.CART_KEY);
  return savedCart ? JSON.parse(savedCart) : [];
};

export const useCartState = create<ModalState>((set) => ({
  Cart: getInitialCart(),
  setCart: (data) => {
    set((state) => {
      const existingItem = state.Cart.find((item) => item.id === data.id);

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        const updatedCart = state.Cart.map((item) =>
          item.id === data.id
            ? { ...item, quantity: (item.quantity || 0) + 1 } // If quantity doesn't exist, default to 0 and add 1
            : item,
        );
        localStorage.setItem(
          LocalStorageEnum?.CART_KEY,
          JSON.stringify(updatedCart),
        );
        return { Cart: updatedCart };
      } else {
        // Otherwise, add the item to the cart with the specified quantity
        const updatedCart = [
          ...state.Cart,
          { ...data, quantity: data.quantity || 1 },
        ]; // If quantity doesn't exist, default to 1
        localStorage.setItem(
          LocalStorageEnum?.CART_KEY,
          JSON.stringify(updatedCart),
        );
        return { Cart: updatedCart };
      }
    });
  },
  deleteFromCart: (id) => {
    set((state) => {
      const existingItemIndex = state.Cart.findIndex(
        (item) => item.id === id && item.quantity && item.quantity > 1,
      );

      if (existingItemIndex !== -1) {
        // If item has quantity > 1, decrement its quantity
        const updatedCart = [...state.Cart];
        if (updatedCart[existingItemIndex]?.quantity) {
          // Use optional chaining to safely access quantity
          //@ts-ignore
          updatedCart[existingItemIndex].quantity--; // Decrement quantity if it exists and is greater than 1
        }
        localStorage.setItem(
          LocalStorageEnum?.CART_KEY,
          JSON.stringify(updatedCart),
        );
        return { Cart: updatedCart };
      } else {
        // Otherwise, remove the item from the cart
        const updatedCart = state.Cart.filter((item) => item.id !== id);
        localStorage.setItem(
          LocalStorageEnum?.CART_KEY,
          JSON.stringify(updatedCart),
        );
        return { Cart: updatedCart };
      }
    });
  },

  removeFromCart: (id: number) => {
    set((state) => {
      const updatedCart = state.Cart.filter((item) => item.id !== id);
      localStorage.setItem(
        LocalStorageEnum?.CART_KEY,
        JSON.stringify(updatedCart),
      );
      return { Cart: updatedCart };
    });
  },

  removeCart: () => {
    set((state) => {
      localStorage.setItem(LocalStorageEnum?.CART_KEY, "");
      return { Cart: [] };
    });
  },
  calculateTotalPrice: () => calculateTotalPrice(getInitialCart()),
  calculateTotalQuantity: () => calculateTotalQuantity(getInitialCart()),
}));
