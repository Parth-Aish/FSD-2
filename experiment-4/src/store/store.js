import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Load state from localStorage
const loadState = () => {
  try {
    const serialized = localStorage.getItem('reduxState');
    return serialized ? JSON.parse(serialized) : undefined;
  } catch (e) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadState(),
});

// Save state to localStorage on every update
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});