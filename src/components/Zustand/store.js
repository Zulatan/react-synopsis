import create from 'zustand';

const useStore = create((set) => ({
  count: 0,  // Initial state
  increment: () => set((state) => ({ count: state.count + 1 })),  // Action to update state
}));

export default useStore;





