import create from "zustand";

const useStore = create((set) => ({
  scrollProgress: 0,
  isDark: false,
  mouse: {
    x: -100,
    y: -100,
    scale: 1
  }
}));

export default useStore;
