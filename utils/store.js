import create from "zustand";

const useStore = create((set) => ({
  scrollProgress: 0
}));

export default useStore;
