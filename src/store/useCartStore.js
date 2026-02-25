import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cart: [],
  wishlist: [],

  addToCart: (product, size) => set((state) => {
    const exists = state.cart.find((item) => item.id === product.id && item.size === size);
    if (exists) {
      return { cart: state.cart.map((item) => (item.id === product.id && item.size === size) ? { ...item, quantity: item.quantity + 1 } : item) };
    }
    return { cart: [...state.cart, { ...product, size, quantity: 1 }] };
  }),

  updateQuantity: (id, size, quantity) => set((state) => ({
    cart: state.cart.map(item => (item.id === id && item.size === size) ? { ...item, quantity: Number(quantity) } : item)
  })),

  removeFromCart: (id, size) => set((state) => ({
    cart: state.cart.filter((item) => !(item.id === id && item.size === size))
  })),

  toggleWishlist: (product) => set((state) => {
    const isFav = state.wishlist.find(p => p.id === product.id);
    return { wishlist: isFav ? state.wishlist.filter(p => p.id !== product.id) : [...state.wishlist, product] };
  }),

  getSubtotal: () => get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2),
}));