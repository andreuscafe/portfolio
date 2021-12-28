import create from "zustand";

const useStore = create((set) => ({
  scrollProgress: 0,
  isDark: false
}));

export default useStore;
