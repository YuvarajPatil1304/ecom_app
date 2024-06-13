import { create } from 'zustand';

const initialState = {
  product: {},
  loading: true,
  error: null,
};

const useProductStore = create((set) => ({
  ...initialState,
  setProduct: (product) => set((state) => ({ ...state, product })),
}));

export default useProductStore;
