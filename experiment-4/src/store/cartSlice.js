import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock Data
const MOCK_PRODUCTS = [
  { id: 1, name: 'Sony WH-1000XM5', price: 349, category: 'Audio', image: '🎧' },
  { id: 2, name: 'MacBook Air M3', price: 1099, category: 'Laptops', image: '💻' },
  { id: 3, name: 'Logitech MX Master 3S', price: 99, category: 'Accessories', image: '🖱️' },
  { id: 4, name: 'Samsung Odyssey G9', price: 1299, category: 'Monitors', image: '🖥️' },
  { id: 5, name: 'Keychron Q1 Pro', price: 199, category: 'Accessories', image: '⌨️' },
  { id: 6, name: 'iPhone 16 Pro', price: 999, category: 'Phones', image: '📱' },
  { id: 7, name: 'Herman Miller Chair', price: 1400, category: 'Furniture', image: '🪑' },
  { id: 8, name: 'PlayStation 5 Pro', price: 499, category: 'Gaming', image: '🎮' },
];

export const fetchProducts = createAsyncThunk('cart/fetchProducts', async () => {
  await new Promise(resolve => setTimeout(resolve, 600)); 
  return MOCK_PRODUCTS;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    products: [],
    searchTerm: '', // <--- THIS WAS MISSING, CAUSING THE CRASH
    categoryFilter: 'All',
    status: 'idle',
    notification: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.notification = `Added ${action.payload.name} to cart!`;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.notification = "Item removed from cart.";
    },
    updateQuantity: (state, action) => { 
      const { id, amount } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) state.items = state.items.filter(i => i.id !== id);
      }
    },
    setSearchTerm: (state, action) => { state.searchTerm = action.payload; },
    setCategoryFilter: (state, action) => { state.categoryFilter = action.payload; },
    clearNotification: (state) => { state.notification = null; }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, setSearchTerm, setCategoryFilter, clearNotification } = cartSlice.actions;
export default cartSlice.reducer;